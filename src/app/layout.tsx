import { Inter, Noto_Sans_JP } from "next/font/google"
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

<meta name="apple-mobile-portfolio" content="MyPortfolio" />

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: false
});

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    template: "%s | PortFolio",
    default: "PortFolio"
  },
  description: "My PortFolio",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout(
  {
    children,
  }: Readonly<
  {
    children: React.ReactNode;
  }>) {

  return (
    <html lang="ja" className={`${inter.variable} ${noto.variable}`}>
      <body>
        {/* <ScrollBg /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
