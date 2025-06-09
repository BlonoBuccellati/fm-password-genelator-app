import path from "node:path";
import { fileURLToPath } from "node:url";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { defineConfig } from "vitest/config";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  // テストの設定全体。
  test: {
    // workspaceを分けることで、複数のテストを分けて管理できる（storybookテスト、e2eテスト、unitテストなど)
    // workspace内に、オブジェクト{}を複数用意して管理する。
    workspace: [
      // このコードはworkspaceは１つだけ（storybookだけ）
      {
        // 継承する（他の設定がある場合）
        // 今回は ベース設定がないので実質的には無効。
        extends: true,
        // このworkspaceに適用するvitestプラグイン
        plugins: [
          // .storybook/ディレクトリがstorybookに関する設定ファイルと伝えている。
          storybookTest({ configDir: path.join(dirname, ".storybook") }),
        ],
        // このworkspace固有のテスト（vitest）の設定内容
        test: {
          // このworkspace の名前（識別ID）
          name: "storybook",
          // ブラウザ上でテストを実行するための設定
          browser: {
            // ブラウザ実行を有効
            enabled: true,
            // ブラウザなしで実行可能（github actionなど、CIで利用する）
            headless: true,
            // 使用する実行エンジンを指定
            provider: "playwright",
            // 実行に使うブラウザの種類を指定（chromium, firefox, webkit のいずれか）。
            instances: [{ browser: "chromium" }],
          },
          // テストを実行する前に自動で読み込まれるファイル。
          // 例えば、共通モックなどを、vitest.setup.tsの中で行う。
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
