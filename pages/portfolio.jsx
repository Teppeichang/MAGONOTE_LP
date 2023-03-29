import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";
import BreadCrumb from "../components/breadCrumb";
import { NextSeo, BreadcrumbJsonLd } from "next-seo";

const Portfolio = () => {
  const lists = [
    { string: "トップページ", path: "/" },
    { string: "レポートギャラリー", path: "/portfolio" },
  ];
  return (
    <Layout>
      <NextSeo
        title="MAGONOTE レポートギャラリー"
        description="株式会社Next Stageの広告レポート作成サービス「MAGONOTE」 レポートギャラリー"
        canonical="https://magonote.shop/portfolio"
        openGraph={{
          type: "website",
          title: "MAGONOTE レポートギャラリー",
          description:
            "株式会社Next Stageの広告レポート作成サービス「MAGONOTE」 レポートギャラリー",
          siteName: "MAGONOTE",
          url: "https://magonote.shop/portfolio",
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
            name: "レポートギャラリー",
            item: "https://magonote.shop/portfolio",
          },
        ]}
      />
      <BreadCrumb lists={lists} />
      <div className="min-h-screen">
        <div className="animate__animated animate__fadeIn animate__delay-500ms mt-10 mx-6 lg:mx-0">
          <p className="font-mPlus2c text-2xl font-bold mb-1 tracking-wide lg:tracking-wider lg:mb-2 lg:text-5xl lg:text-center">
            レポートテンプレート
          </p>
          <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider lg:text-center">
            アナリティクス、SEO、ウェブ広告、ソーシャルメディアなどのレポートテンプレートを豊富にご用意しています。
          </p>
          <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider lg:text-center">
            テンプレートをそのまま利用することも、カスタマイズして利用することも両方可能です。
          </p>
        </div>
        <div className="my-10 mx-6 lg:mx-10">
          <div className="flex flex-col justify-center items-center lg:flex lg:flex-row lg:flex-wrap">
            <Reveal animation={Animation.FadeInUp} delay={500}>
              <div className="flex flex-col max-w-lg lg:m-5">
                <Link href={"/portfolio/facebook-report"}>
                  <a className="font-mPlus2c font-bold text-xl mb-4 tracking-wide lg:tracking-wider">
                    Facebook広告レポート
                  </a>
                </Link>
                <Link href={"/portfolio/facebook-report"}>
                  <a>
                    <Image
                      src="/images/top_facebook.jpg"
                      width={540}
                      height={400}
                      quality={90}
                      aria-label="facebook-report"
                      className="active:scale-95 active:delay-75 hover:scale-105 transition-transform"
                    />
                  </a>
                </Link>
              </div>
            </Reveal>
            <Reveal animation={Animation.FadeInUp} delay={500}>
              <div className="flex flex-col max-w-lg mt-4 lg:m-5">
                <Link href={"/portfolio/line-report"}>
                  <a className="font-mPlus2c font-bold text-xl mb-4 tracking-wide lg:tracking-wider">
                    LINE広告レポート
                  </a>
                </Link>
                <Link href={"/portfolio/line-report"}>
                  <a>
                    <Image
                      src="/images/top_line.jpg"
                      alt="LINE広告レポート"
                      width={540}
                      height={400}
                      quality={90}
                      aria-label="line-report"
                      className="active:scale-95 active:delay-75 hover:scale-105 transition-transform"
                    />
                  </a>
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="flex flex-col justify-center items-center lg:flex lg:flex-row lg:flex-wrap">
            <Reveal animation={Animation.FadeInUp} delay={500}>
              <div className="flex flex-col max-w-lg mt-4 lg:m-5">
                <Link href={"/portfolio/tiktok-report"}>
                  <a className="font-mPlus2c font-bold text-xl mb-4 tracking-wide lg:tracking-wider">
                    TikTok広告レポート
                  </a>
                </Link>
                <Link href={"/portfolio/tiktok-report"}>
                  <a>
                    <Image
                      src="/images/top_tiktok.jpg"
                      alt="TikTok広告レポート"
                      width={540}
                      height={400}
                      quality={90}
                      aria-label="tiktok-report"
                      className="active:scale-95 active:delay-75 hover:scale-105 transition-transform"
                    />
                  </a>
                </Link>
              </div>
            </Reveal>
            <Reveal animation={Animation.FadeInUp} delay={500}>
              <div className="flex flex-col max-w-lg mt-4 lg:m-5">
                <Link href={"/portfolio/google-and-youtube-report"}>
                  <a className="font-mPlus2c font-bold text-xl mb-4 tracking-wide lg:tracking-wider">
                    Google&YouTube広告レポート
                  </a>
                </Link>
                <Link href={"/portfolio/google-and-youtube-report"}>
                  <a>
                    <Image
                      src="/images/top_ga_yt.jpg"
                      alt="Google & YouTube広告レポート"
                      width={540}
                      height={400}
                      quality={90}
                      aria-label="google-and-youtube-report"
                      className="active:scale-95 active:delay-75 hover:scale-105 transition-transform"
                    />
                  </a>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
