import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { DefaultSeo, ProductJsonLd } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <DefaultSeo
      defaultTitle="MAGONOTEのLP"
      canonical="https://magnificent-kitten-d5fd8c.netlify.app"
      description="株式会社Next Stageの広告レポート作成サービス「MAGONOTE」のLPです"
    />
    <ProductJsonLd
      productName="Facebook広告レポート"
      images={["https://magnificent-kitten-d5fd8c.netlify.app/_next/image?url=%2Fimages%2Fc63232d34a5f72e41f735c9cb45ec181.png&w=1200&q=90"]}
      description="Facebook広告レポートをルッカースタジオ（旧Googleデータポータル）で自動化。Facebook広告APIを使って自動でデータ更新します。"
    />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
