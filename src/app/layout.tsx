import { Inter, Noto_Sans_JP } from "next/font/google"
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

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
        <Header />
        {children}
        <Footer />
      </body>
    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
    </html>
  );
}
