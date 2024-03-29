import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadCrumb";
import Image from "next/image";
import Link from "next/link";
import { NextSeo, BreadcrumbJsonLd, ProductJsonLd } from "next-seo";

const FacebookReport = () => {
  const lists = [
    { string: "トップページ", path: "/" },
    { string: "レポートギャラリー", path: "/portfolio" },
    { string: "Facebook広告レポート", path: "/portfolio/facebook-report" },
  ];
  return (
    <Layout>
      <NextSeo
        title="Facebook広告レポート"
        description="株式会社Next Stageの広告レポート作成サービス「MAGONOTE」 Facebook広告レポート概要"
        canonical="https://magonote.shop/portfolio/facebook-report"
        openGraph={{
          type: "website",
          title: "Facebook広告レポート",
          description:
            "株式会社Next Stageの広告レポート作成サービス「MAGONOTE」 Facebook広告レポート概要",
          siteName: "MAGONOTE",
          url: "https://magonote.shop/portfolio/facebook-report",
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
          {
            position: 3,
            name: "Facebook広告レポート",
            item: "https://magonote.shop/portfolio/facebook-report",
          },
        ]}
      />
      <ProductJsonLd
        productName="Facebook広告レポート"
        images={["https://magonote.shop/_next/image?url=%2Fimages%2Ftop_facebook.png&w=1080&q=90"]}
        description="Facebook・Instagram広告のレポートが作成可能です。 独自開発したアプリケーションを介してメディアパフォーマンスを自動で取得します。 APIで取得可能な数値を全取得しておりますので、詳細数値の可視化も可能です。"
      />
      <BreadCrumb lists={lists} />
      <Reveal animation={Animation.FadeInUp} delay={500}>
        <div className="flex flex-col justify-center mx-6 mt-20 lg:flex lg:flex-row lg:justify-center lg:mx-10">
          <div className="flex flex-col max-w-xl lg:mr-7">
            <p className="font-mPlus2c font-bold text-xl py-5 tracking-wide lg:tracking-wider lg:text-2xl">
              Facebook広告レポートの概要
            </p>
            <p className="font-mPlus2c font-medium pb-5 tracking-wide lg:tracking-wider">
              Facebook広告レポートをルッカースタジオ（旧Googleデータポータル）で自動化。Facebook広告APIを使って自動でデータ更新。
            </p>
            <ul className="font-mPlus2c font-medium list-disc list-inside pb-5 pl-2 tracking-wide lg:tracking-wider">
              <li>広告クリエイティブレポート付き</li>
              <li>広告代理店向けの手数料設定</li>
            </ul>
            <button
              target="_blank"
              rel="noopener noreferrer"
              className="font-mPlus2c text-center bg-purple-800 border-solid border border-purple-800 text-white w-64 h-12 mt-4 py-3 font-bold rounded-full tracking-wide transform active:bg-white active:text-purple-800 active:border-solid active:border active:border-purple-800 active:scale-95 active:delay-75 hover:scale-105 transition-transform lg:tracking-wider"
            >
              デモレポートを見る
            </button>
          </div>
          <div className="mt-5 lg:ml-7">
            <Image
              src="/images/fb_report_template_1.jpg"
              alt="Facebookレポートテンプレート_キャンペーン"
              width={600}
              height={450}
              quality={90}
            />
          </div>
        </div>
      </Reveal>
      <Reveal animation={Animation.FadeInUp} delay={500}>
        <div className="flex flex-col justify-center mx-6 lg:flex lg:flex-row lg:justify-center lg:mx-10">
          <div className="flex flex-col max-w-xl lg:mr-10">
            <p className="font-mPlus2c font-bold text-xl py-5 tracking-wide lg:tracking-wider lg:text-2xl">
              Facebook広告レポートの基本情報
            </p>
            <ul className="font-mPlus2c font-medium list-disc list-inside pb-5 pl-2 tracking-wide lg:tracking-wider">
              <li className="pl-5 -indent-5">データソース：Facebook広告</li>
              <li className="pl-5 -indent-5">出力先：ルッカースタジオ（旧Googleデータポータル）</li>
              <li className="pl-5 -indent-5">更新頻度：日次</li>
              <li className="pl-5 -indent-5">
                自動更新タイミング：深夜0時~午前6の間に前日までのデータを更新
              </li>
            </ul>
            <p className="font-mPlus2c font-bold text-xl py-5 tracking-wide lg:tracking-wider lg:text-2xl">
              Facebook広告レポートの導入の流れ
            </p>
            <ul className="font-mPlus2c font-medium list-disc list-inside pb-5 pl-2 tracking-wide lg:tracking-wider">
              <li className="pl-5 -indent-5">お申し込み（お客様）</li>
              <li className="pl-5 -indent-5">権限付与とフォーム連絡（お客様）</li>
              <li className="pl-5 -indent-5">
                レポートの作成と共有（MAGONOTE）【通常1営業日で完成】
              </li>
              <li className="pl-5 -indent-5">必要に応じてレポートのカスタマイズ（お客様）</li>
            </ul>
          </div>
          <div className="mt-5 lg:ml-10">
            <Image
              src="/images/fb_report_template_2.jpg"
              alt="Facebookレポートテンプレート_広告セット"
              width={590}
              height={450}
              quality={90}
            />
          </div>
        </div>
      </Reveal>
      <Reveal animation={Animation.FadeInUp} delay={500}>
        <div className="flex flex-col justify-center mx-6 mb-20 lg:flex lg:flex-row lg:justify-center lg:mx-10">
          <div className="flex flex-col max-w-xl lg:mr-7">
            <p className="font-mPlus2c font-bold text-xl py-5 tracking-wide lg:tracking-wider lg:text-2xl">
              Facebook広告レポートに含まれるレポート一覧
            </p>
            <ul className="font-mPlus2c font-medium list-disc list-inside pb-5 pl-2 tracking-wide lg:tracking-wider">
              <li>日別レポート</li>
              <li>週別レポート</li>
              <li>月別レポート</li>
              <li>キャンペーンレポート</li>
              <li>広告セットレポート</li>
              <li>クリエイティブレポート</li>
              <li>広告ごとの累計フリークエンシーレポート</li>
            </ul>
            <p className="font-mPlus2c font-bold text-xl py-5 tracking-wide lg:tracking-wider lg:text-2xl">
              Facebook広告レポートに含まれるディメンションと指標
            </p>
            <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider">
              Facebook広告の管理画面で使えるほぼすべての項目が利用可能です。詳しくは無料トライアルの実際のレポートでご確認ください。また、項目の不足があれば追加も可能ですのでお問合せください。
            </p>
          </div>
          <div className="mt-5 lg:ml-7">
            <Image
              src="/images/fb_report_template_3.jpg"
              alt="Facebookレポート_広告クリエイティブ"
              width={600}
              height={450}
              quality={90}
            />
          </div>
        </div>
      </Reveal>
    </Layout>
  );
};

export default FacebookReport;
