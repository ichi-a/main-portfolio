import { WorksData } from "@/types/workType";
import sampleCorp from "@/assets/img/sampleCorp.png"
import app1 from "@/assets/img/app.jpg"
import app2 from "@/assets/img/app2.png"
import appd from "@/assets/img/app-d.jpg"



export const worksData: WorksData = [
  {
    title: "お知らせデモページ",
    image: sampleCorp,
    description: [
      {heading: "概要", body: [{ex: "架空の企業のお知らせページを想定したデモページ"}]},
      {heading: "使用技術", body: [{ex: "Next.js Parallel Routes / Intercepting Routes"}]},
      {heading: "主な機能", body: [
        {ex: `microCMSを利用したヘッドレスCMS構成`},
        {ex: `記事詳細をモーダル表示（ページ遷移なし）`},
        {ex: `URL直アクセス時には通常ページとして表示`},
        {ex: `スケルトンローディングによるUX向上`},
      ]},
      {heading: "工夫した点", body: [{ex: "ユーザーにページを移動する面倒を感じさせないように「お知らせ内容」をモーダルで表示。「お知らせ内容」を外部と共有できるようにモーダルにURLを実装。"}]},
      {heading: "改善点", body: [{ex: "記事内容を共有するには記事を開いた時にAPIを叩く必要があると考えたため、記事内容を開いた際に通信待ち時間が発生する点。"}]},
      {heading: "開発期間", body: [{ex: "約3日間"}]},

    ],
    techs: [
      {names: "Next.js", icon: "/logos/nextdotjs.svg"},
      {names: "Tailwind", icon: "/logos/tailwindcss.svg"},
      {names: "TypeScript", icon: "/logos/typescript.svg"},
    ],
    github: "https://github.com/ichi-a/Sample-Corp-News-App.git",
    vercel: "https://sample-corp-news-6t29sgs6u-ichis-projects-7f2e3961.vercel.app/",
    id: "1"

  },
  {
    title: "タイトル2",
    image: app1,
    description: [
      {heading: "概要", body: "テキストテキストテキスト"},
      {heading: "開発背景", body: "テキストテキストテキスト"},
      {heading: "主な機能", body: "テキストテキストテキスト"},
      {heading: "使用技術", body: "テキストテキストテキスト"},
      {heading: "工夫した点", body: "テキストテキストテキスト"},
      {heading: "開発期間", body: "テキストテキストテキスト"},
    ],
    techs: [
      {names: "React", icon: "/logos/react.svg"},
      {names: "Motion", icon: "/logos/motion.svg"}
    ],
    github: "github2",
    vercel: "vercel2",
    id: "2"
  },
  {
    title: "タイトル3",
    image: app2,
    description: [
      {heading: "概要", body: "テキストテキストテキスト"},
      {heading: "開発背景", body: "テキストテキストテキスト"},
      {heading: "主な機能", body: "テキストテキストテキスト"},
      {heading: "使用技術", body: "テキストテキストテキスト"},
      {heading: "工夫した点", body: "テキストテキストテキスト"},
      {heading: "開発期間", body: "テキストテキストテキスト"},
    ],
    techs: [
      {names: "React", icon: "/logos/react.svg"},
      {names: "Motion", icon: "/logos/motion.svg"}
    ],
    github: "github3",
    vercel: "vercel3",
    id: "3"
  },
  {
    title: "タイトル4",
    image: appd,
    description: [
      {heading: "概要", body: "テキストテキストテキスト"},
      {heading: "開発背景", body: "テキストテキストテキスト"},
      {heading: "主な機能", body: "テキストテキストテキスト"},
      {heading: "使用技術", body: "テキストテキストテキスト"},
      {heading: "工夫した点", body: "テキストテキストテキスト"},
      {heading: "開発期間", body: "テキストテキストテキスト"},
    ],
    techs: [
      {names: "React", icon: "/logos/react.svg"},
      {names: "Motion", icon: "/logos/motion.svg"},
      {names: "Tailwind", icon: "/logos/tailwindcss.svg"}
    ],
    github: "github4",
    vercel: "vercel4",
    id: "4"
  },
]
