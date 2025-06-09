// Vite + Next14+向けの設定
import type { StorybookConfig } from "@storybook/nextjs-vite";
// SVGをReactコンポーネントとしてインポートできるようにするVite用のプラグイン
import svgrPlugin from "vite-plugin-svgr";

// Storybook の設定オブジェクトの定義
const config: StorybookConfig = {
  // storybookが読み取るファイルのパスパターンの定義（.stories.tsx）
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  // 使用するアドオン
  addons: [
    // 初心者向けUIガイド
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    // 自動ドキュメント生成機能
    "@storybook/addon-docs",
    // アクセシビリティチェック
    "@storybook/addon-a11y",
    // storiesをvitestでテストするためのアドオン
    "@storybook/addon-vitest",
  ],
  framework: {
    // @storybook/nextjs-vite を指定することで、Storybook が Next.js の設定と統合される。
    // ただし、SVGは互換性の問題で、storybookで用意する必要がある（Next.jsではwebpackのsvgrなので、vite用のsvgrプラグインが必要）
    name: "@storybook/nextjs-vite",
    options: {},
  },
  //  ブラウザからアクセスできるように公開されるフォルダを指定する。
  staticDirs: ["../public"],
  // Storybook のビルド時に使われる Vite 設定をカスタマイズするためのフック
  viteFinal(config) {
    config.plugins = [
      ...config.plugins!, // すでにある Vite プラグインを維持
      svgrPlugin({
        include: /\.svg$/, // 対象は .svg ファイルのみ
      }),
    ];

    // HACK：`?url` をつけない *.svg のインポートを処理するために、既存のプラグイン "vite-plugin-storybook-nextjs-image" を修正する必要がある。
    // （これは @storybook/experimental-nextjs-vite によって設定される）
    // このプラグインには、特定のファイルタイプを除外するオプションがないため。
    // TODO: 特定のファイルタイプを除外する方法がこのプラグインでサポートされたら、このワークアラウンドを削除すること。
    config.plugins = config.plugins!.flat().map((plugin) => {
      if (
        typeof plugin === "object" &&
        plugin !== null &&
        "name" in plugin &&
        plugin.name === "vite-plugin-storybook-nextjs-image"
      ) {
        return {
          ...plugin,
          // The plugin handles *.svg by `resolveId` hook
          // see https://github.com/storybookjs/vite-plugin-storybook-nextjs/blob/b0e2b83ed5cfe666388a87a1935c9b511788eb16/src/plugins/next-image/plugin.ts#L54
          resolveId(id, importer) {
            // .svg ファイルの場合は この plugin では処理させない（= スキップ）
            // これで .svg は vite-plugin-svgr に処理をバトンタッチできるようになる。
            if (id.endsWith(".svg")) {
              return null;
            }

            // @ts-expect-error `resolveId` hook of vite-plugin-storybook-nextjs-image is a function
            return plugin.resolveId(id, importer);
          },
        };
      }
      return plugin;
    });
    return config;
  },
};
export default config;
