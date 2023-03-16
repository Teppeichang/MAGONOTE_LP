import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import adobeFontLoader from "../adobeFontLoader";
import { useEffect } from "react";
import { DefaultSeo, ProductJsonLd } from "next-seo";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.browser) {
      adobeFontLoader(document);
    }
  }, []);

  return (
    <>
      <DefaultSeo
        defaultTitle="MAGONOTE"
        canonical="https://magonote.shop"
        description="株式会社Next Stageの広告レポート作成サービス「MAGONOTE」"
      />
      <ProductJsonLd
        productName="Facebook広告レポート"
        images={[
          "https://magonote.shop/_next/image?url=%2Fimages%2Fc63232d34a5f72e41f735c9cb45ec181.png&w=1200&q=90",
        ]}
        description="Facebook広告レポートをルッカースタジオ（旧Googleデータポータル）で自動化。Facebook広告APIを使って自動でデータ更新します。"
      />
      <ProductJsonLd
        productName="LINE広告レポート"
        images={[
          "https://magonote.shop/_next/image?url=%2Fimages%2Fc63232d34a5f72e41f735c9cb45ec181.png&w=1200&q=90",
        ]}
        description="LINE広告レポートをルッカースタジオ（旧Googleデータポータル）で自動化。LINE広告APIを使って自動でデータ更新します。"
      />
      <ProductJsonLd
        productName="TikTok広告レポート"
        images={[
          "https://magonote.shop/_next/image?url=%2Fimages%2Fc63232d34a5f72e41f735c9cb45ec181.png&w=1200&q=90",
        ]}
        description="TikTok広告レポートをルッカースタジオ（旧Googleデータポータル）で自動化。TikTok広告APIを使って自動でデータ更新します。"
      />
      <ProductJsonLd
        productName="Google&YouTube広告レポート"
        images={[
          "https://magonote.shop/_next/image?url=%2Fimages%2Fc63232d34a5f72e41f735c9cb45ec181.png&w=1200&q=90",
        ]}
        description="Google広告・YouTube広告レポートをルッカースタジオ（旧Googleデータポータル）で作成。自動でデータ更新します。"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
