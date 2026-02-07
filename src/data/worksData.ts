import { WorksData } from "@/types/workType";
import sampleCorp from "@/assets/img/sampleCorp.png"
import Shelfie from "@/assets/img/Shelfie.png"



export const worksData: WorksData = [
  {
    title: "AIが好みを分析し提案する本棚アプリ",
    image: Shelfie,
    description: [
      {heading: "概要", body: [{ex: "ユーザーの読書記録を分析し次に読む本を提案する本棚アプリ"}]},
      {heading: "使用技術", body: [{ex: "楽天BooksAPI, GeminiAPI, Firebase"}]},
      {heading: "主な機能", body: [
        {ex: `- GeminiAPIを使用したAIによる提案機能`},
        {ex: `- 楽天BooksAPIを使用したキーワード検索`},
        {ex: `- Firebaseを使用した本一覧の高速表示`},
        {ex: `- 読んだ本を記録する際、点数とコメントを一緒に記録`},
      ]},
      {heading: "工夫した点", body: [
        {ex: "- ユーザーの好みに合わせた提案をするため、点数とコメントを含めた本棚のデータをAIが分析。ユーザーに合わせたおすすめを提案。"},
        {ex: "- UXを損わないようにローディングアニメーションやモーダル、本棚に追加時の挙動など細部に工夫。直感操作を意識。"},
        {ex: "- UXを損わないようにローディングアニメーションやモーダル、本棚に追加時の挙動など細部に工夫。"},
      ]},
      {heading: "改善点", body: [{ex: "APIの制限を回避する工夫がない点。本のデータをキャッシュし保存するなど工夫が必要。"}]},
      {heading: "開発期間", body: [{ex: "約10日間"}]},
],
    techs: [
      {names: "Next.js", icon: "/logos/nextdotjs.svg"},
      {names: "Tailwind", icon: "/logos/tailwindcss.svg"},
      {names: "TypeScript", icon: "/logos/typescript.svg"},
    ],
    github: "https://github.com/ichi-a/shelfie",
    vercel: "https://shelfie-u7nh-a7md45uax-ichis-projects-7f2e3961.vercel.app",
    id: "1"
  },
  {
    title: "お知らせデモページ",
    image: sampleCorp,
    description: [
      {heading: "概要", body: [{ex: "架空の企業のニュースページを想定したデモアプリ"}]},
      {heading: "使用技術", body: [{ex: "Next.js Parallel Routes / Intercepting Routes"}]},
      {heading: "主な機能", body: [
        {ex: `- microCMSを利用したヘッドレスCMS構成`},
        {ex: `- 記事詳細をモーダル表示（ページ遷移なし）`},
        {ex: `- URL直アクセス時には通常ページとして表示`},
        {ex: `- スケルトンローディングによるUX向上`},
      ]},
      {heading: "工夫した点", body: [{ex: "ユーザーのUXを損なわないように記事内容をモーダルで表示。SNSや外部との共有ができるようにURLに直接アクセスすると通常ページを表示。"}]},
      {heading: "改善点", body: [{ex: "記事内容を開いた際にモーダル用と通常ページ用で2回API通信をしている点。スケルトンローディングによりUXを損なわないよう対策はしているが要改善。"}]},
      {heading: "開発期間", body: [{ex: "約3日間"}]},
],
    techs: [
      {names: "Next.js", icon: "/logos/nextdotjs.svg"},
      {names: "Tailwind", icon: "/logos/tailwindcss.svg"},
      {names: "TypeScript", icon: "/logos/typescript.svg"},
    ],
    github: "https://github.com/ichi-a/Sample-Corp-News-App.git",
    vercel: "https://sample-corp-news-6t29sgs6u-ichis-projects-7f2e3961.vercel.app/",
    id: "2"
  },

]
