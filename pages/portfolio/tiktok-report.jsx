import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadCrumb";
import Image from "next/image";
import Link from "next/link";
import { NextSeo, BreadcrumbJsonLd, ProductJsonLd } from "next-seo";

const TikTokReport = () => {
  const lists = [
    { string: "トップページ", path: "/" },
    { string: "レポートギャラリー", path: "/portfolio" },
    { string: "TikTok広告レポート", path: "/portfolio/tiktok-report" },
  ];
  return (
    <Layout>
      <NextSeo
        title="MAGONOTE TikTok広告レポート"
        description="株式会社Next Stageの広告レポート作成サービス「MAGONOTE」 TikTok広告レポート概要"
        canonical="https://magonote.shop/portfolio/tiktok-report"
        openGraph={{
          type: "website",
          title: "MAGONOTE TikTok広告レポート概要",
          description:
            "株式会社Next Stageの広告レポート作成サービス「MAGONOTE」 TikTok広告レポート概要",
          siteName: "MAGONOTE",
          url: "https://magonote.shop/portfolio/tiktok-report",
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
            name: "TikTok広告レポート",
            item: "https://magonote.shop/portfolio/tiktok-report",
          },
        ]}
      />
      <ProductJsonLd
        productName="TikTok広告レポート"
        images={["https://magonote.shop/_next/image?url=%2Fimages%2Ftop_tiktok.png&w=1080&q=90"]}
        description="TikTok広告のレポートが作成可能です。 独自開発したアプリケーションを介してメディアパフォーマンスを自動で取得します。 APIで取得可能な数値を全取得しておりますので、詳細数値の可視化も可能です。"
      />
      <BreadCrumb lists={lists} />
      <Reveal animation={Animation.FadeInUp}>
        <div className="flex flex-col justify-center mx-6 mt-20 lg:flex lg:flex-row lg:justify-center lg:mx-10">
          <div className="flex flex-col max-w-xl lg:mr-7">
            <p className="font-mPlus2c font-bold text-xl py-5 tracking-wide lg:tracking-wider lg:text-2xl">
              TikTok広告レポートの概要
            </p>
            <p className="font-mPlus2c font-medium pb-5 tracking-wide lg:tracking-wider">
              TikTok広告レポートをルッカースタジオ（旧Googleデータポータル）で自動化。TikTok広告APIを使って自動でデータ更新。
            </p>
            <ul className="font-mPlus2c font-medium list-disc list-inside pb-5 pl-2 tracking-wide lg:tracking-wider">
              <li>広告クリエイティブレポート付き</li>
              <li>広告代理店向けの手数料設定</li>
            </ul>
            <Link href={"https://lookerstudio.google.com/u/0/reporting/a5ee2631-8453-4084-a126-e9ff949e8fae/page/p_xne8eoc62c"}>
              <a target="_blank">
                <button className="font-mPlus2c bg-purple-800 border-solid border border-purple-800 text-white w-64 h-12 mt-4 font-bold rounded-full tracking-wide transform active:bg-white active:text-purple-800 active:border-solid active:border active:border-purple-800 active:scale-90 transition-transform lg:tracking-wider">
                  デモレポートを見る
                </button>
              </a>
            </Link>
          </div>
          <div className="mt-5 lg:ml-7">
            <Image
              src="/images/tiktok_report_template_3.png"
              alt="TikTokレポートテンプレート_キャンペーン"
              width={600}
              height={450}
              quality={90}
            />
          </div>
        </div>
      </Reveal>
      <Reveal animation={Animation.FadeInUp}>
        <div className="flex flex-col justify-center mx-6 lg:flex lg:flex-row lg:justify-center lg:mx-10">
          <div className="flex flex-col max-w-xl lg:mr-10">
            <p className="font-mPlus2c font-bold text-xl py-5 tracking-wide lg:tracking-wider lg:text-2xl">
              TikTok広告レポートの基本情報
            </p>
            <ul className="font-mPlus2c font-medium list-disc list-inside pb-5 pl-2 tracking-wide lg:tracking-wider">
              <li className="pl-5 -indent-5">データソース：TikTok広告</li>
              <li className="pl-5 -indent-5">出力先：ルッカースタジオ（旧Googleデータポータル）</li>
              <li className="pl-5 -indent-5">更新頻度：日次</li>
              <li className="pl-5 -indent-5">
                自動更新タイミング：深夜0時~午前6の間に前日までのデータを更新
              </li>
            </ul>
            <p className="font-mPlus2c font-bold text-xl py-5 tracking-wide lg:tracking-wider lg:text-2xl">
              tiktok広告レポートの導入の流れ
            </p>
            <ul className="font-mPlus2c font-medium list-disc list-inside pb-5 pl-2">
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
              src="/images/tiktok_report_template_4.png"
              alt="TikTokレポートテンプレート_広告グループ"
              width={600}
              height={450}
              quality={90}
            />
          </div>
        </div>
      </Reveal>
      <Reveal animation={Animation.FadeInUp}>
        <div className="flex flex-col justify-center mx-6 mb-20 lg:flex lg:flex-row lg:justify-center lg:mx-10">
          <div className="flex flex-col max-w-xl lg:mr-7">
            <p className="font-mPlus2c font-bold text-xl py-5 tracking-wide lg:tracking-wider lg:text-2xl">
              TikTok広告レポートに含まれるレポート一覧
            </p>
            <ul className="font-mPlus2c font-medium list-disc list-inside pb-5 pl-2 tracking-wide lg:tracking-wider">
              <li>日別レポート</li>
              <li>週別レポート</li>
              <li>月別レポート</li>
              <li>キャンペーンレポート</li>
              <li>広告グループレポート</li>
              <li>クリエイティブレポート</li>
              <li>広告ごとの累計フリークエンシーレポート</li>
            </ul>
            <p className="font-mPlus2c font-bold text-xl py-5 tracking-wide lg:tracking-wider lg:text-2xl">
              TikTok広告レポートに含まれるディメンションと指標
            </p>
            <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider">
              TikTok広告の管理画面で使えるほぼすべての項目が利用可能です。詳しくは無料トライアルの実際のレポートでご確認ください。また、項目の不足があれば追加も可能ですのでお問合せください。
            </p>
          </div>
          <div className="mt-5 lg:ml-7">
            <Image
              src="/images/tiktok_report_template_5.png"
              alt="TikTokレポート_広告クリエイティブ"
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

export default TikTokReport;
