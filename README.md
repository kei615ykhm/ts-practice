## ts-practice
Next.js TypeScript TailwindCSSを使って実践的に基礎を学ぶリポジトリです。

## 主要な技術

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

# プロジェクト構造

| ファイル/ディレクトリ | 目的と用途 |
|-------------------|------------|
| `app/` | Next.js 13 の新しい App Router を使用するためのディレクトリ。ページやレイアウトを含む。 |
| `app/globals.css` | グローバルに適用される CSS スタイルを定義するファイル。Tailwind CSS のディレクティブもここに含まれる。 |
| `app/layout.tsx` | アプリケーション全体に適用されるレイアウトコンポーネント。共通の HTML 構造を定義する。 |
| `app/page.tsx` | アプリケーションのホームページコンポーネント。 |
| `node_modules/` | プロジェクトの依存関係（ライブラリやパッケージ）が格納されるディレクトリ。 |
| `public/` | 静的ファイル（画像、フォントなど）を格納するディレクトリ。ここに置いたファイルは公開される。 |
| `.eslintrc.json` | ESLint の設定ファイル。コードの品質とスタイルを管理するためのルールを定義する。 |
| `.gitignore` | Git がバージョン管理から除外すべきファイルやディレクトリを指定するファイル。 |
| `next-env.d.ts` | Next.js の型定義ファイル。TypeScript で Next.js の型を認識させるために使用する。 |
| `next.config.mjs` | Next.js の設定ファイル。カスタムの設定や動作を定義する。 |
| `package-lock.json` | npm によって生成される、依存関係の正確なバージョンを記録するファイル。 |
| `package.json` | プロジェクトの依存関係とスクリプトを定義するファイル。 |
| `postcss.config.mjs` | PostCSS の設定ファイル。CSS の変換や最適化のためのプラグイン（Tailwind CSS など）を設定する。 |
| `README.md` | プロジェクトの説明や使い方を記述するマークダウンファイル。 |
| `tailwind.config.ts` | Tailwind CSS の設定ファイル。カスタムテーマやプラグインを定義する。 |
| `tsconfig.json` | TypeScript の設定ファイル。コンパイルオプションやパス解決の設定を行う。 |