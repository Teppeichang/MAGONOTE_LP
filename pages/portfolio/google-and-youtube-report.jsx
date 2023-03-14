import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadCrumb";
import Image from "next/image";
import Link from "next/link";

const GoogleAndYouTubeReport = () => {
  const lists = [
    { string: "トップページ", path: "/" },
    { string: "レポートギャラリー", path: "/portfolio" },
    { string: "Google&YouTube広告レポート", path: "/portfolio/google-and-youtube-report" },
  ];
  return (
    <Layout>
      <BreadCrumb lists={lists} />
      <div className="flex justify-center mx-10">
        <div className="flex flex-col max-w-xl m-6">
          <p className="font-bold text-2xl py-5">Google & YouTube広告レポートの概要</p>
          <p className="pb-5">
            Google & YouTube広告レポートをルッカースタジオ（旧Googleデータポータル）で自動化。Google
            Adsのデータソースをもとに自動でデータ更新。
          </p>
          <ul className="list-disc list-inside pb-5">
            <li>広告クリエイティブレポート付き</li>
            <li>広告代理店向けの手数料設定</li>
          </ul>
          <button className="bg-purple-800 text-white w-64 h-12 mt-6 font-bold rounded-full hover:bg-white hover:text-purple-800 hover:border-solid hover:border hover:border-purple-800">
            <Link href={"/trial"}>デモレポートを見る</Link>
          </button>
        </div>
        <div className="m-6">
          <Image
            src="/images/google_and_youtube_report_template_3.png"
            alt="Google&YouTubeレポートテンプレート_キャンペーン"
            width={600}
            height={450}
            quality={90}
          />
        </div>
      </div>
      <div className="flex justify-center mx-16">
        <div className="flex flex-col max-w-xl mr-14">
          <p className="font-bold text-2xl py-5">Google & Youtube広告レポートの基本情報</p>
          <ul className="list-disc list-inside pb-5">
            <li>データソース：Google広告(YouTube広告含む)</li>
            <li>出力先：ルッカースタジオ（旧Googleデータポータル）</li>
            <li>更新頻度：日次</li>
            <li>自動更新タイミング：毎朝9時までに前日までのデータを更新</li>
          </ul>
          <p className="font-bold text-2xl py-5">Google & Youtube広告レポートの導入の流れ</p>
          <ul className="list-disc list-inside pb-5">
            <li>お申し込み（お客様）</li>
            <li>権限付与とフォーム連絡（お客様）</li>
            <li>レポートの作成と共有（MAGONOTE）【通常1営業日で完成】</li>
            <li>必要に応じてレポートのカスタマイズ（お客様）</li>
          </ul>
        </div>
        <div className="ml-20">
          <Image
            src="/images/google_and_youtube_report_template_4.png"
            alt="Google&YouTubeレポートテンプレート_広告グループ"
            width={600}
            height={450}
            quality={90}
          />
        </div>
      </div>
      <div className="flex justify-center mx-10">
        <div className="flex flex-col max-w-xl m-6">
          <p className="font-bold text-2xl py-5">
            Google & Youtube広告レポートに含まれるレポート一覧
          </p>
          <ul className="list-disc list-inside pb-5">
            <li>日別レポート</li>
            <li>週別レポート</li>
            <li>月別レポート</li>
            <li>キャンペーンレポート</li>
            <li>広告グループレポート</li>
            <li>クリエイティブレポート</li>
            <li>検索キーワード・クエリごとのレポート</li>
          </ul>
          <p className="font-bold text-2xl py-5">
            Google & Youtube広告レポートに含まれるディメンションと指標
          </p>
          <p>
            Google広告の管理画面で使えるほぼすべての項目が利用可能です。詳しくは無料トライアルの実際のレポートでご確認ください。また、項目の不足があれば追加も可能ですのでお問合せください。
          </p>
        </div>
        <div className="m-6">
          <Image
            src="/images/google_and_youtube_report_template_5.png"
            alt="Google&YouTubeレポート_検索キーワード"
            width={600}
            height={450}
            quality={90}
          />
        </div>
      </div>
    </Layout>
  );
};

export default GoogleAndYouTubeReport;
