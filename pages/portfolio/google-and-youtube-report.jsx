import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadCrumb";
import Image from "next/image";
import Link from "next/link";
import { NextSeo, BreadcrumbJsonLd, ProductJsonLd } from "next-seo";

const GoogleAndYouTubeReport = () => {
  const lists = [
    { string: "トップページ", path: "/" },
    { string: "レポートギャラリー", path: "/portfolio" },
    { string: "Google&YouTube広告レポート", path: "/portfolio/google-and-youtube-report" },
  ];
  return (
    <Layout>
      <NextSeo
        title="MAGONOTE Google&YouTube広告レポート"
        description="株式会社Next Stageの広告レポート作成サービス「MAGONOTE」 Google&YouTube広告レポート概要"
        canonical="https://magonote.shop/portfolio/google-and-youtube-report"
        openGraph={{
          type: "website",
          title: "MAGONOTE Google&YouTube広告レポート概要",
          description:
            "株式会社Next Stageの広告レポート作成サービス「MAGONOTE」 Google&YouTube広告レポート概要",
          siteName: "MAGONOTE",
          url: "https://magonote.shop/portfolio/google-and-youtube-report",
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
            name: "Google&YouTube広告レポート",
            item: "https://magonote.shop/portfolio/google-and-youtube-report",
          },
        ]}
      />
      <ProductJsonLd
        productName="Google&YouTube広告レポート"
        images={[
          "https://magonote.shop/_next/image?url=%2Fimages%2Ftop_google_and_youtube.png&w=1080&q=90",
        ]}
        description="Google広告/YouTube広告のレポートが作成可能です。 Looker Studioのデフォルト機能を利用してメディアパフォーマンスを自動で取得します。"
      />
      <BreadCrumb lists={lists} />
      <Reveal animation={Animation.FadeInUp} delay={500}>
        <div className="flex flex-col justify-center mx-6 mt-20 lg:flex lg:flex-row lg:justify-center lg:mx-10">
          <div className="flex flex-col max-w-xl lg:mr-7">
            <p className="font-mPlus2c font-bold text-xl py-5 tracking-wide lg:tracking-wider lg:text-2xl">
              Google & YouTube広告レポートの概要
            </p>
            <p className="font-mPlus2c font-medium pb-5 tracking-wide lg:tracking-wider">
              Google &
              YouTube広告レポートをルッカースタジオ（旧Googleデータポータル）で自動化。Google
              Adsのデータソースをもとに自動でデータ更新。
            </p>
            <ul className="font-mPlus2c font-medium list-disc list-inside pb-5 pl-2 tracking-wide lg:tracking-wider">
              <li>広告クリエイティブレポート付き</li>
              <li>広告代理店向けの手数料設定</li>
            </ul>
            <Link href={"https://lookerstudio.google.com/u/0/reporting/a5ee2631-8453-4084-a126-e9ff949e8fae/page/p_xfyc9mf62c"}>
              <a target="_blank">
                <button className="font-mPlus2c bg-purple-800 border-solid border border-purple-800 text-white w-64 h-12 mt-4 font-bold rounded-full tracking-wide transform active:bg-white active:text-purple-800 active:border-solid active:border active:border-purple-800 active:scale-90 transition-transform lg:tracking-wider">
                  デモレポートを見る
                </button>
              </a>
            </Link>
          </div>
          <div className="mt-5 lg:ml-7">
            <Image
              src="/images/google_and_youtube_report_template_3.png"
              alt="Google&YouTubeレポートテンプレート_キャンペーン"
              width={600}
              height={450}
              quality={90}
            />
          </div>
        </div>
      </Reveal>
      <Reveal animation={Animation.FadeInUp} delay={500}>
        <div className="flex flex-col justify-center mx-6 lg:flex lg:flex-row lg:justify-center lg:mx-10">
          <div className="flex flex-col max-w-xl lg:mr-14">
            <p className="font-mPlus2c font-bold text-xl py-5 tracking-wide lg:tracking-wider lg:text-2xl">
              Google & Youtube広告レポートの基本情報
            </p>
            <ul className="font-mPlus2c font-medium list-disc list-inside pb-5 pl-2 tracking-wide lg:tracking-wider">
              <li className="pl-5 -indent-5">データソース：Google広告(YouTube広告含む)</li>
              <li className="pl-5 -indent-5">出力先：ルッカースタジオ（旧Googleデータポータル）</li>
              <li className="pl-5 -indent-5">更新頻度：日次</li>
              <li className="pl-5 -indent-5">
                自動更新タイミング：毎朝9時までに前日までのデータを更新
              </li>
            </ul>
            <p className="font-mPlus2c font-bold text-xl py-5 tracking-wide lg:tracking-wider lg:text-2xl">
              Google & Youtube広告レポートの導入の流れ
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
          <div className="mt-5 lg:ml-12">
            <Image
              src="/images/google_and_youtube_report_template_4.png"
              alt="Google&YouTubeレポートテンプレート_広告グループ"
              width={600}
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
              Google & Youtube広告レポートに含まれるレポート一覧
            </p>
            <ul className="font-mPlus2c font-medium list-disc list-inside pb-5 pl-2 tracking-wide lg:tracking-wider">
              <li>日別レポート</li>
              <li>週別レポート</li>
              <li>月別レポート</li>
              <li>キャンペーンレポート</li>
              <li>広告グループレポート</li>
              <li>クリエイティブレポート</li>
              <li>検索キーワード・クエリごとのレポート</li>
            </ul>
            <p className="font-mPlus2c font-bold text-xl py-5 tracking-wide lg:tracking-wider lg:text-2xl">
              Google & Youtube広告レポートに含まれるディメンションと指標
            </p>
            <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider">
              Google広告の管理画面で使えるほぼすべての項目が利用可能です。詳しくは無料トライアルの実際のレポートでご確認ください。また、項目の不足があれば追加も可能ですのでお問合せください。
            </p>
          </div>
          <div className="mt-5 lg:ml-7">
            <Image
              src="/images/google_and_youtube_report_template_5.png"
              alt="Google&YouTubeレポート_検索キーワード"
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

export default GoogleAndYouTubeReport;
