import Layout from "../components/layout";
import Link from "next/link";
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
        <div className="flex justify-between mt-10 mx-20">
          <Link href={"/portfolio/facebook-report"}>Facebook広告レポート</Link>
          <Link href={"/portfolio/line-report"}>LINE広告レポート</Link>
          <Link href={"/portfolio/tiktok-report"}>TikTok広告レポート</Link>
          <Link href={"/portfolio/google-and-youtube-report"}>Google&YouTube広告レポート</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
