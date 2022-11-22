import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center py-28 lg:pt-40 pb-40 bg-slate-100">
        <p className="text-sm lg:text-base pb-10">アクセス解析・広告・SNSなどすべてのレポートに対応</p>
        <h2 className="font-bold text-center text-2xl lg:text-5xl pb-10">すべてのマーケティングレポートを自動化</h2>
        <button class="bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded">
          <Link href={"/trial"}>今すぐ無料で始める</Link>
        </button>
        <p className="text-sm lg:text-base">トライアルにクレジットカードの登録は不要です</p>
      </div>
      <div className="py-40">
        <div className="flex justify-center items-center">
          <div className="absolute bottom-0">
            <Image src="/images/sincerely-media-xJlc_Ke3oNI-unsplash.jpg" width={720} height={320} quality={90}/>
          </div>
        </div>
        <h2 className="font-bold text-center text-2xl lg:text-5xl">カスタマイズ可能な豊富なテンプレート</h2>
      </div>
      <div className="flex flex-col justify-center items-center p-10">
        <p className="text-center text-sm lg:text-base">
          MAGONOTEは、マーケティング担当者のデータ集計やレポート作成にかかる時間を短縮し、改善アクションに時間を使えるように作成されたマーケティングレポート自動化サービスです。
          用途にあわせてレポート・ダッシュボードテンプレートを選び、必要に応じてカスタマイズして（とても簡単です！）ご利用ください
        </p>
      </div>
      <div className="flex flex-col justify-center items-center py-20">
        <h2 className="font-bold text-center text-2xl lg:text-5xl">利用できるレポートのテンプレート</h2>
        <div className="p-10 lg:py-10">
          <div className="p-10 flex flex-col lg:flex-row">
            <div>
              <h2>Facebook広告レポート</h2>
              <div>
                <Image src="/images/c63232d34a5f72e41f735c9cb45ec181.png" width={560} height={720} quality={90}/>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
              <h2>LINE広告レポート</h2>
              <div>
                <Image src="/images/4da13f27211a8ffbdd9d1ff88f877952.png" alt="LINE広告レポート" width={560} height={720} quality={90}/>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div div className="p-10 flex flex-col lg:flex-row">
            <div>
              <h2>TikTok広告レポート</h2>
              <div>
                <Image src="/images/5dd2e69e7ca524605f094ecb720bd83e.png" alt="TikTok広告レポート" width={560} height={720} quality={90}/>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div>
              <h2>Google & YouTube広告レポート</h2>
              <div>
                <Image src="/images/e2153a6ec6990868a9b62c2482dca56e.png" alt="Google & YouTube広告レポート" width={560} height={720} quality={90}/>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <button class="bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded">
          <Link href={"/portfolio"}>すべてのレポートを見る</Link>
        </button>
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
          <img src="../images/sincerely-media-xJlc_Ke3oNI-unsplash.jpg"></img>
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
          <img src="../images/sincerely-media-xJlc_Ke3oNI-unsplash.jpg"></img>
        </div>
      </div>
      <div className="lg:flex">
        <div className="p-20">
          <h2 className="text-xl font-bold">簡単にレポートを共有</h2>
          <p>レポートやダッシュボードは、社内メンバーやクライアントを招待すれば、招待されたメンバーは常に最新にアップデートされたデータが確認でき、また共同で編集することもできます。</p>
        </div>
        <div className="p-20">
          <img src="../images/sincerely-media-xJlc_Ke3oNI-unsplash.jpg"></img>
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
          <img src="../images/sincerely-media-xJlc_Ke3oNI-unsplash.jpg"></img>
        </div>
      </div>
      <div className="flex flex-col items-center m-10 p-10 bg-yellow-200">
        <h2 className="text-xl font-bold">今すぐレポートを自動化し、改善アクションに時間を使おう</h2>
        <button class="bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded m-5">
          <Link href={"/trial"}>今すぐ無料で始める</Link>
        </button>
      </div>
      <div className="lg:flex items-center justify-center">
        <div className="p-20">
          <img src="../images/sincerely-media-xJlc_Ke3oNI-unsplash.jpg"></img>
        </div>
        <div className="flex flex-col items-center p-20">
          <h2 className="text-xl font-bold text-center">今すぐレポートを自動化しよう</h2>
          <button class="bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded">
            <Link href={"/trial"}>無料で始める</Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
