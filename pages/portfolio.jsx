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
        <div className="mt-10 mx-6 lg:mx-10">
          <p className="text-2xl font-bold mb-1 tracking-wide lg:tracking-wider lg:mb-2 lg:text-5xl lg:text-center">レポートテンプレート</p>
          <p className="tracking-wide lg:tracking-wider lg:text-center">アナリティクス、SEO、ウェブ広告、ソーシャルメディアなどのレポートテンプレートを豊富にご用意しています。</p>
          <p className="tracking-wide lg:tracking-wider lg:text-center">テンプレートをそのまま利用することも、カスタマイズして利用することも両方可能です。</p>
        </div>
        <div className="my-10 mx-6 lg:mx-10">
          <div className="flex flex-col justify-center items-center lg:flex lg:flex-row lg:flex-wrap">
            <div className="flex flex-col max-w-lg lg:m-5">
              <a href={"/portfolio/facebook-report"} className="font-bold text-xl mb-4 tracking-wide lg:tracking-wider">
                Facebook広告レポート
              </a>
              <a href={"/portfolio/facebook-report"}>
                <Image
                  src="/images/top_facebook.png"
                  width={540}
                  height={540}
                  quality={90}
                  aria-label="facebook-report"
                />
              </a>
            </div>
            <div className="flex flex-col max-w-lg mt-4 lg:m-5">
              <a href={"/portfolio/line-report"} className="font-bold text-xl mb-4 tracking-wide lg:tracking-wider">
                LINE広告レポート
              </a>
              <a href={"/portfolio/line-report"}>
                <Image
                  src="/images/top_line.png"
                  alt="LINE広告レポート"
                  width={540}
                  height={540}
                  quality={90}
                  aria-label="line-report"
                />
              </a>
            </div>
            <div className="flex flex-col max-w-lg mt-4 lg:m-5">
              <a href={"/portfolio/tiktok-report"} className="font-bold text-xl mb-4 tracking-wide lg:tracking-wider">
                TikTok広告レポート
              </a>
              <a href={"/portfolio/tiktok-report"}>
                <Image
                  src="/images/top_tiktok.png"
                  alt="TikTok広告レポート"
                  width={540}
                  height={540}
                  quality={90}
                  aria-label="tiktok-report"
                />
              </a>
            </div>
            <div className="flex flex-col max-w-lg mt-4 lg:m-5">
              <a href={"/portfolio/google-and-youtube-report"} className="font-bold text-xl mb-4 tracking-wide lg:tracking-wider">
                Google&YouTube広告レポート
              </a>
              <a href={"/portfolio/google-and-youtube-report"}>
                <Image
                  src="/images/top_google_and_youtube.png"
                  alt="Google & YouTube広告レポート"
                  width={540}
                  height={540}
                  quality={90}
                  aria-label="google-and-youtube-report"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
