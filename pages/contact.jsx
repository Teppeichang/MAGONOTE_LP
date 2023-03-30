import Layout from "../components/layout";
import BreadCrumb from "../components/breadCrumb";
import { NextSeo, BreadcrumbJsonLd } from "next-seo";

const Contact = () => {
  const lists = [
    { string: "トップページ", path: "/" },
    { string: "お問い合わせ", path: "/contact" },
  ];

  return (
    <Layout>
      <NextSeo
        title="お問い合わせ"
        description="株式会社Next Stageの広告レポート作成サービス「MAGONOTE」 に関するお問い合わせフォーム"
        canonical="https://magonote.shop/contact"
        openGraph={{
          type: "website",
          title: "お問い合わせ",
          description:
            "株式会社Next Stageの広告レポート作成サービス「MAGONOTE」 に関するお問い合わせフォーム",
          siteName: "MAGONOTE",
          url: "https://magonote.shop/portfolio/contact",
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: "トップページ",
            item: "https://magonote.shop",
          },
          {
            position: 2,
            name: "お問い合わせ",
            item: "https://magonote.shop/contact",
          },
        ]}
      />
      <BreadCrumb lists={lists} />
      <div className="flex justify-center items-center min-h-screen">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSePg4vBgw_AWsStvyQcUfJUk6rhUTRf9DnS5paIAPRQMwuYNw/viewform?embedded=true"
          height="1200"
          width="1200"
          className="my-10 mx-6"
        >
          読み込んでいます…
        </iframe>
      </div>
    </Layout>
  );
};

export default Contact;
