import Button from "@mui/material/Button";
import Layout from "../components/layout";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <p>アクセス解析・広告・SNSなどすべてのレポートに対応</p>
        <p>すべてのマーケティングレポートを自動化</p>
        <Button variant="contained" href="#contained-buttons">今すぐ無料で始める</Button>
        <p>トライアルにクレジットカードの登録は不要です</p>
      </div>
      <div>
        <p>カスタマイズ可能な豊富なテンプレート</p>
      </div>
      <div>
        <p>
          MAGONOTEは、マーケティング担当者のデータ集計やレポート作成にかかる時間を短縮し、改善アクションに時間を使えるように作成されたマーケティングレポート自動化サービスです。
          用途にあわせてレポート・ダッシュボードテンプレートを選び、必要に応じてカスタマイズして（とても簡単です！）ご利用ください
        </p>
      </div>
      <div>
        <p>利用できるレポートのテンプレート</p>
        <Button variant="contained" href="#contained-buttons">すべてのレポートを見る</Button>
      </div>
      <div>
        <p>マーケティング担当者自らがノーコードで使える機能</p>
        <p>実務を理解したマーケティング担当者自らがノーコードで使える機能を活用してスマートにビジネスを成長させましょう。</p>
      </div>
      <div className="flex">
        <div>
          <p>すべてのデータを一元化</p>
          <p>それぞれの管理画面に毎回ログインしてデータをダウンロードしてコピー＆ペーストを繰り返すような面倒な業務はやめましょう。MAGONOTEならAPIを通じて各媒体のデータを毎日自動的に取得するので、日々のデータ更新作業を無くすことができます。</p>
        </div>
        <div>
          (画像)
        </div>
      </div>
      <div className="flex">
        <div>
          (画像)
        </div>
        <div>
          <p>手間なくレポート作成</p>
          <p></p>
        </div>
      </div>
      <div className="flex">
        <div>
          <p>簡単にレポートを共有</p>
          <p>レポートやダッシュボードは、社内メンバーやクライアントを招待すれば、招待されたメンバーは常に最新にアップデートされたデータが確認でき、また共同で編集することもできます。</p>
        </div>
        <div>
          (画像)
        </div>
      </div>
      <div className="flex">
        <div>
          (画像)
        </div>
        <div>
          <p>自由自在にカスタマイズ</p>
          <p>
            レポートやダッシュボードは一度作成したものを変更なしで利用し続ける方法では浸透しない場合が多く、活用されるものにするためには利用ユーザーの声を随時反映していくことが重要です。
            MAGONOTEは、豊富なテンプレートとGoogleデータポータルやGoogleスプレッドシートなどの既に利用者が多くまたノーコードで使えるサービスを活用することで、誰でも簡単にカスタマイズできるようにしています。
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p>今すぐレポートを自動化し、改善アクションに時間を使おう</p>
        <Button variant="contained" href="#contained-buttons">今すぐ無料で始める</Button>
      </div>
      <div className="flex items-center justify-center">
        <div>(画像)</div>
        <Button variant="contained" href="#contained-buttons">今すぐ無料で始める</Button>
      </div>
    </Layout>
  );
};

export default Index;
