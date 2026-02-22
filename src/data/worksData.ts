import { WorksData } from "@/types/workType";
import sampleCorp from "@/assets/img/sampleCorp.png"
import Shelfie1 from "@/assets/img/Shelfie1.png"
import GeoLab1 from "@/assets/img/GeoLab.png"


export const worksData: WorksData = [
{
  title: "AIクローラー観測・GEO実験サイト「GEO Lab」",
  image: GeoLab1,
  description: [
    {heading: "概要", body: [{ex: "AIクローラーの挙動をリバースエンジニアリングする実験サイト。JSON-LDの効果検証・造語の生成AI反映速度・ハニーポットによるボット検出を実データで観測・公開。"}]},
    {heading: "使用技術", body: [{ex: "Next.js 15, Supabase, Vercel Edge Middleware, TypeScript"}]},
    {heading: "主な機能", body: [
      {ex: "- Edge MiddlewareでAIクローラーをリアルタイム検出・記録（UA判定 + ASN補完）"},
      {ex: "- ハニーポットトラップによる偽装ボット・スクレイパーの自動検出"},
      {ex: "- JSON-LDのA/Bテスト（実験群/対照群）によるGEO効果の定量計測"},
      {ex: "- 独自造語「GEOショック」「GEOショック指数」のAI反映速度を観測"},
      {ex: "- Supabase Realtimeを使ったクロールログのリアルタイムダッシュボード"},
      {ex: "- 公開statsページで今週・今月のクローラー統計をASN別に公開"},
    ]},
    {heading: "工夫した点", body: [
      {ex: "- MiddlewareをEdge Runtimeで動作させ、ユーザー体験を損なわずに全アクセスをロギング。IPはSHA-256+ソルトでハッシュ化しプライバシーに配慮。"},
      {ex: "- UAで判定できないボットをASNネットワーク番号で補完判定。Google・Anthropic・Amazon等の既知ASNをマッピング。"},
      {ex: "- JSON-LDあり（実験群）となし（対照群）のページを並行公開し、クロール頻度の差を実データで記録。公開3日でPerplexityが造語を正確に回答。"},
    ]},
    {heading: "改善点", body: [{ex: "DNS逆引き検証（Level 3）がEdge Runtimeの制約で未実装。Node.js Runtimeへの移行で対応可能。cronジョブによる自動AI質問もAPIキー設定次第で有効化可能。"}]},
    {heading: "開発期間", body: [{ex: "約2日（Claude AIとペアプログラミング）"}]},
  ],
  techs: [
    {names: "Next.js", icon: "/logos/nextdotjs.svg"},
    {names: "Tailwind", icon: "/logos/tailwindcss.svg"},
    {names: "TypeScript", icon: "/logos/typescript.svg"},
  ],
  github: "https://github.com/ichi-a/geo-shock",
  vercel: "https://www.geo-shock.com",
  id: "1"
},
  {
    title: "AIが好みを分析し提案する本棚アプリ",
    image: Shelfie1,
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
        {ex: "- UXを損わないようにローディングアニメーションやモーダル、本棚に追加時の挙動など細部に工夫。直感操作を意識。レスポンシブ対応。"},
        {ex: "- "},
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
    vercel: "https://shelfie-u7nh.vercel.app/",
    id: "2"
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
    vercel: "https://sample-corp-news-app.vercel.app/",
    id: "3"
  },

]
