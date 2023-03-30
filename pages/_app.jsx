import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "animate.css";
import { ReactGenieAnimations } from "react-genie-styled-components";
import adobeFontLoader from "../adobeFontLoader";
import { useEffect } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    adobeFontLoader(document);
  }, []);

  return (
    <>
      <DefaultSeo
        defaultTitle="MAGONOTE | 完全無料の広告レポート作成サービス"
        canonical="https://magonote.shop"
        description="株式会社Next Stageの広告レポート作成サービス「MAGONOTE」 完全無料でマーケティングレポートをご提供"
        openGraph={{
          type: "website",
          title: "MAGONOTE | 完全無料の広告レポート作成サービス",
          description: "株式会社Next Stageの広告レポート作成サービス「MAGONOTE」 完全無料でマーケティングレポートをご提供",
          siteName: "MAGONOTE",
          url: "https://magonote.shop",
          images: [
            {
              url: "https://magonote.shop/images/header_logo.svg",
              width: 256,
              height: 40,
              alt: "MAGONOTE",
              type: "image/svg"
            }
          ]
        }}
      />
      <link rel='icon' href='/favicon.ico' />
      <ReactGenieAnimations />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
