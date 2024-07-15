import type { Config } from "tailwindcss";

const config: Config = {
  // contentセクション：Tailwindが最適化する際にスキャンするファイルを指定
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // pagesディレクトリ内のファイル
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // componentsディレクトリ内のファイル
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // appディレクトリ内のファイル（App Router用）
  ],

  theme: {
    extend: {
      // カスタムの背景画像を定義
      backgroundImage: {
        // 放射状のグラデーション
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // 円錐形のグラデーション
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      
      // ここに他のカスタムテーマ設定を追加できる
      // 例：カスタムカラー
      // colors: {
      //   'brand-blue': '#1da1f2',
      // },
      
      // 例：カスタムフォントサイズ
      // fontSize: {
      //   'xxs': '0.625rem',
      // },
    },
  },

  // プラグインセクション：Tailwindの機能を拡張するプラグインを追加
  plugins: [
    // 例：公式のフォームプラグイン
    // require('@tailwindcss/forms'),
  ],
};

export default config;