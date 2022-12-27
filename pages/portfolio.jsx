import Layout from "../components/layout";
import Image from "next/image";
import BreadCrumb from "../components/breadCrumb";

const Portfolio = () => {
  const lists = [
    { string: "トップページ", path: "/" },
    { string: "レポートギャラリー", path: "/portfolio" },
  ];
  return (
    <Layout>
      <BreadCrumb lists={lists} />
      <div className="min-h-screen">
        <div className="mt-10 mx-20">
          <h2 className="text-2xl font-bold">レポートテンプレート</h2>
          <p>
            アナリティクス、SEO、ウェブ広告、ソーシャルメディアなどのレポートテンプレートを豊富にご用意しています。テンプレートをそのまま利用することも、カスタマイズして利用することも両方可能です。
          </p>
        </div>
        <div className="mt-10 mx-20">
          <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center">
            <div className="flex flex-col">
              <a href={"/portfolio/facebook-report"}>
                <Image
                  src="/images/c63232d34a5f72e41f735c9cb45ec181.png"
                  width={560}
                  height={720}
                  quality={90}
                />
              </a>
              <a href={"/portfolio/facebook-report"}>Facebook広告レポート</a>
            </div>
            <div className="flex flex-col">
              <a href={"/portfolio/line-report"}>
                <Image
                  src="/images/4da13f27211a8ffbdd9d1ff88f877952.png"
                  alt="LINE広告レポート"
                  width={560}
                  height={720}
                  quality={90}
                />
              </a>
              <a href={"/portfolio/line-report"}>LINE広告レポート</a>
            </div>
            <div className="flex flex-col">
              <a href={"/portfolio/tiktok-report"}>
                <Image
                  src="/images/5dd2e69e7ca524605f094ecb720bd83e.png"
                  alt="TikTok広告レポート"
                  width={560}
                  height={720}
                  quality={90}
                />
              </a>
              <a href={"/portfolio/tiktok-report"}>TikTok広告レポート</a>
            </div>
            <div className="flex flex-col">
              <a href={"/portfolio/google-and-youtube-report"}>
                <Image
                  src="/images/db9717065f66815dee7c256ed7cd2705.png"
                  alt="Google & YouTube広告レポート"
                  width={560}
                  height={720}
                  quality={90}
                />
              </a>
              <a href={"/portfolio/google-and-youtube-report"}>Google&YouTube広告レポート</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
