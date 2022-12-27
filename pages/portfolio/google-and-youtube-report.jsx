import Layout from "../../components/layout";
import BreadCrumb from "../../components/breadCrumb";
import Image from "next/image";

const GoogleAndYouTubeReport = () => {
  const lists = [
    { string: "トップページ", path: "/" },
    { string: "レポートギャラリー", path: "/portfolio" },
    { string: "Google&YouTube広告レポート", path: "/portfolio/google-and-youtube-report" },
  ];
  return (
    <Layout>
      <BreadCrumb lists={lists} />
      <div className="min-h-screen mt-10 lg:flex lg:justify-center">
        <div className="px-20">
          <h2 className="font-bold text-xl py-5">Google & YouTube広告レポートの概要</h2>
          <p className="pb-5">
            Google & Youtube広告レポートをルッカースタジオ（旧Googleデータポータル）で自動化。Google
            Adsのデータソースをもとに自動でデータ更新。
          </p>
          <ul className="list-disc list-inside pb-5">
            <li>広告クリエイティブレポート付き</li>
            <li>広告代理店向けの手数料設定</li>
          </ul>
          <p className="pb-5 underline font-bold">デモレポートを見る</p>
          <h2 className="font-bold text-xl py-5">Google & Youtube広告レポートの基本情報</h2>
          <ul className="list-disc list-inside pb-5">
            <li>データソース：Google広告(YouTube広告含む)</li>
            <li>出力先：ルッカースタジオ（旧Googleデータポータル）</li>
            <li>更新頻度：日次</li>
            <li>自動更新タイミング：毎朝9時までに前日までのデータを更新</li>
          </ul>
          <h2 className="font-bold text-xl py-5">Google & Youtube広告レポートの導入の流れ</h2>
          <ul className="list-disc list-inside pb-5">
            <li>お申し込み（お客様）</li>
            <li>権限付与とフォーム連絡（お客様）</li>
            <li>レポートの作成と共有（MAGONOTE）【通常1営業日で完成】</li>
            <li>必要に応じてレポートのカスタマイズ（お客様）</li>
          </ul>
          <h2 className="font-bold text-xl py-5">Google & Youtube広告レポートに含まれるレポート一覧</h2>
          <ul className="list-disc list-inside pb-5">
            <li>日別レポート</li>
            <li>週別レポート</li>
            <li>月別レポート</li>
            <li>キャンペーンレポート</li>
            <li>広告グループレポート</li>
            <li>クリエイティブレポート</li>
          </ul>
          <h2 className="font-bold text-xl py-5">Google & Youtube広告レポートに含まれるディメンションと指標</h2>
          <p>
            Google広告の管理画面で使えるほぼすべての項目が利用可能です。詳しくは無料トライアルの実際のレポートでご確認ください。また、項目の不足があれば追加も可能ですのでお問合せください。
          </p>
        </div>
        <div className="px-20 pb-20">
          <Image src="/images/db9717065f66815dee7c256ed7cd2705.png" width={640} height={720} quality={90} objectFit="contain"></Image>
          <Image src="/images/db9717065f66815dee7c256ed7cd2705.png" width={640} height={720} quality={90} objectFit="contain"></Image>
          <Image src="/images/db9717065f66815dee7c256ed7cd2705.png" width={640} height={720} quality={90} objectFit="contain"></Image>
        </div>
      </div>
    </Layout>
  );
};

export default GoogleAndYouTubeReport;
