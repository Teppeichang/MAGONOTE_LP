import Link from "next/link";
import Layout from "../components/layout";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center py-28 lg:p-40 bg-slate-100">
        <p className="text-sm lg:text-base pb-10">アクセス解析・広告・SNSなどすべてのレポートに対応</p>
        <h2 className="font-bold text-center text-2xl lg:text-5xl pb-10">すべてのマーケティングレポートを自動化</h2>
        <button class="bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded mb-10">今すぐ無料で始める</button>
        <p className="text-sm lg:text-base">トライアルにクレジットカードの登録は不要です</p>
        <div>(レポートテンプレ画像)</div>
      </div>
      <div className="py-20">
        <h2 className="font-bold text-center text-2xl lg:text-5xl">カスタマイズ可能な豊富なテンプレート</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-center text-sm lg:text-base px-5">
          MAGONOTEは、マーケティング担当者のデータ集計やレポート作成にかかる時間を短縮し、改善アクションに時間を使えるように作成されたマーケティングレポート自動化サービスです。
          用途にあわせてレポート・ダッシュボードテンプレートを選び、必要に応じてカスタマイズして（とても簡単です！）ご利用ください
        </p>
      </div>
      <div className="flex flex-col justify-center items-center py-20">
        <h2 className="font-bold text-center text-2xl lg:text-5xl">利用できるレポートのテンプレート</h2>
        <div className="p-10 lg:py-10">
          <div className="flex flex-col">
            <div>
              <h2>Facebook広告レポート</h2>
              <p>(レポートテンプレ画像)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
              <h2>LINE広告レポート</h2>
              <p>(レポートテンプレ画像)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div div className="flex flex-col">
            <div>
              <h2>LINE広告レポート</h2>
              <p>(レポートテンプレ画像)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
              <h2>Google & YouTube広告レポート</h2>
              <p>(レポートテンプレ画像)</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <button class="bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded">すべてのレポートを見る</button>
      </div>
      <div className="flex flex-col justify-center items-center p-10 bg-slate-100">
        <h2 className="font-bold text-center text-2xl lg:text-5xl">マーケティング担当者自らがノーコードで使える機能</h2>
        <p className="py-10">実務を理解したマーケティング担当者自らがノーコードで使える機能を活用してスマートにビジネスを成長させましょう。</p>
      </div>
      <div className="lg:flex">
        <div className="p-10">
          <h2 className="text-center text-xl font-bold">すべてのデータを一元化</h2>
          <p className="py-10">それぞれの管理画面に毎回ログインしてデータをダウンロードしてコピー＆ペーストを繰り返すような面倒な業務はやめましょう。MAGONOTEならAPIを通じて各媒体のデータを毎日自動的に取得するので、日々のデータ更新作業を無くすことができます。</p>
        </div>
        <div className="p-20">
          (フリー素材)
        </div>
      </div>
      <div className="lg:flex lg:flex-row-reverse bg-slate-100">
        <div className="p-20">
          <h2 className="text-xl font-bold">手間なくレポート作成</h2>
          <p>
            レポートやダッシュボードのテンプレートがあらかじめ用意されているので、毎回ゼロから新しいレポートを作る必要はありません。テンプレートを選び、権限を付与してインハウスプラスに依頼するだけで、1営業日で完成したレポートが手元に届きます。
            そのレポートをベースに必要に応じてカスタマイズしてご利用ください。
          </p>
        </div>
        <div className="p-20">
          (フリー素材)
        </div>
      </div>
      <div className="lg:flex">
        <div className="p-20">
          <h2 className="text-xl font-bold">簡単にレポートを共有</h2>
          <p>レポートやダッシュボードは、社内メンバーやクライアントを招待すれば、招待されたメンバーは常に最新にアップデートされたデータが確認でき、また共同で編集することもできます。</p>
        </div>
        <div className="p-20">
          (フリー素材)
        </div>
      </div>
      <div className="lg:flex flex-row-reverse bg-slate-100">
        <div className="p-20">
          <h2 className="text-xl font-bold">自由自在にカスタマイズ</h2>
          <p>
            レポートやダッシュボードは一度作成したものを変更なしで利用し続ける方法では浸透しない場合が多く、活用されるものにするためには利用ユーザーの声を随時反映していくことが重要です。
            MAGONOTEは、豊富なテンプレートとGoogleデータポータルやGoogleスプレッドシートなどの既に利用者が多くまたノーコードで使えるサービスを活用することで、誰でも簡単にカスタマイズできるようにしています。
          </p>
        </div>
        <div className="p-20">
          (フリー素材)
        </div>
      </div>
      <div className="flex flex-col items-center m-10 p-10 bg-yellow-200">
        <h2 className="text-xl font-bold">今すぐレポートを自動化し、改善アクションに時間を使おう</h2>
        <button class="bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded m-5">今すぐ無料で始める</button>
      </div>
      <div className="lg:flex items-center justify-center">
        <div className="p-20">(画像)</div>
        <div className="flex flex-col items-center p-20">
          <h2 className="text-xl font-bold text-center">今すぐレポートを自動化しよう</h2>
          <button class="bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded">無料で始める</button>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
