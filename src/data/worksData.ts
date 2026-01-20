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
      {heading: "概要", body: "テキストテキストテキスト"},
      {heading: "開発背景", body: "テキストテキストテキスト"},
      {heading: "主な機能", body: "テキストテキストテキスト"},
      {heading: "使用技術", body: "テキストテキストテキスト"},
      {heading: "工夫した点", body: "テキストテキストテキスト"},
      {heading: "改善点", body: "テキストテキストテキスト"},
    ],
    techs: [
      {names: "Next.js", icon: "/logos/nextdotjs.svg"},
      {names: "Tailwind", icon: "/logos/tailwindcss.svg"},
      {names: "TypeScript", icon: "/logos/typescript.svg"},
    ],
    github: "github1",
    vercel: "vercel1",
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
