import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "animate.css";
import { ReactGenieAnimations } from "react-genie-styled-components";
import adobeFontLoader from "../adobeFontLoader";
import { useEffect } from "react";
import { DefaultSeo, ProductJsonLd } from "next-seo";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    adobeFontLoader(document);
  }, []);

  return (
    <>
      <DefaultSeo
        defaultTitle="MAGONOTE"
        canonical="https://magonote.shop"
        description="株式会社Next Stageの広告レポート作成サービス「MAGONOTE」"
        openGraph={{
          type: "website",
          title: "MAGONOTE",
          description: "株式会社Next Stageの広告レポート作成サービス「MAGONOTE」",
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
      <ReactGenieAnimations />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
