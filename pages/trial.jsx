import Layout from "../components/layout";
import { NextSeo } from "next-seo";

const Trial = () => {
  return (
    <Layout>
      <NextSeo
        title="MAGONOTE 無料トライアル申し込みフォーム"
        description="株式会社Next Stageの広告レポート作成サービス「MAGONOTE」 の無料トライアル申し込みフォーム"
        canonical="https://magonote.shop/trial"
        openGraph={{
          type: "website",
          title: "MAGONOTE 無料トライアル申し込みフォーム",
          description:
            "株式会社Next Stageの広告レポート作成サービス「MAGONOTE」 の無料トライアル申し込みフォーム",
          siteName: "MAGONOTE",
          url: "https://magonote.shop/trial",
        }}
      />
      <div className="flex justify-center items-center min-h-screen">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScKREohNiPNDe_VlnHQrMRNKOLjgN8a4WugwKB9yTeJvKcdbw/viewform?embedded=true"
          height="1200"
          width="1200"
          className="mt-40 mb-10 mx-6 lg:mt-60"
        >
          読み込んでいます…
        </iframe>
      </div>
    </Layout>
  );
};

export default Trial;
