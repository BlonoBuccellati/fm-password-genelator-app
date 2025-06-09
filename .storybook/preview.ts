import type { Preview } from "@storybook/nextjs-vite";

const preview: Preview = {
  parameters: {
    controls: {
      // Storybook の “Controls” パネルにどのような UI コントロール（色・日付など）を表示するかを自動判断させるためのルール
      matchers: {
        // "color" という名前の prop → 自動で カラーピッカー
        color: /(background|color)$/i,
        // "date" で終わる prop → 自動で 日付ピッカー
        date: /Date$/i,
      },
    },
    // アクセシビリティ違反に関する制御
    a11y: {
      // 'todo' - テスト UI 上で警告を表示（CIは通る）
      // 'error' - アクセシビリティ違反があれば テスト失敗（CIも落ちる）
      // 'off' - アクセシビリティチェックを 完全に無効にする
      test: "todo",
    },
  },
};

export default preview;
