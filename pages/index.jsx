import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center bg-slate-100 min-h-screen px-2">
        <h2 className="font-bold text-center text-2xl lg:text-5xl pb-10">
          完全無料でマーケティングレポートをご提供
        </h2>
        <p className="text-center">
          アクセス解析・広告・SNSなど
          <br className="lg:hidden" />
          すべてのレポートに対応
        </p>
        <p className="text-center pb-10 lg:text-base">
          トライアルにクレジットカードの登録は不要です
        </p>
        <button className="bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded mb-10">
          <Link href={"/trial"}>今すぐ無料で始める</Link>
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute">
          <Image
            src="/images/sincerely-media-xJlc_Ke3oNI-unsplash.jpg"
            width={720}
            height={320}
            quality={90}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-10 pb-20 lg:px-20 lg:pt-40">
        <h2 className="font-bold text-center pt-40 text-2xl lg:text-4xl">
          カスタマイズ可能な豊富なテンプレート
        </h2>
        <p className="text-center text-sm lg:text-base pt-10">
          MAGONOTEは、マーケティング担当者のデータ集計やレポート作成に
          かかる時間を短縮し、改善アクションに時間を使えるように作成された
          マーケティングレポート自動化サービスです。Looker Studioで描写しており、
          用途に合わせたカスタマイズが誰でも簡単に行えます。
        </p>
      </div>
      <div className="flex flex-col justify-center items-center py-10 lg:py-20">
        <h2 className="font-bold text-center px-10 pb-10 text-2xl lg:text-4xl">
          利用できるレポートのテンプレート
        </h2>
        <div className="p-10 lg:py-10">
          <div className="flex flex-col lg:flex-row">
            <div>
              <h2 className="text-xl font-bold mb-5 lg:px-10">Facebook広告レポート</h2>
              <div className="mb-5 lg:px-10">
                <Image
                  src="/images/c63232d34a5f72e41f735c9cb45ec181.png"
                  width={560}
                  height={720}
                  quality={90}
                />
              </div>
              <p className="pb-10 lg:px-10">
                Facebook・Instagram広告のレポートが作成可能です。
                独自開発したアプリケーションを介してメディアパフォーマンスを自動で取得します。
                APIで取得可能な数値を全取得しておりますので、詳細数値の可視化も可能です。
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-5 lg:px-10">LINE広告レポート</h2>
              <div className="mb-5 lg:px-10">
                <Image
                  src="/images/4da13f27211a8ffbdd9d1ff88f877952.png"
                  alt="LINE広告レポート"
                  width={560}
                  height={720}
                  quality={90}
                />
              </div>
              <p className="pb-10 lg:px-10">
                LINE広告のレポートが作成可能です。
                独自開発したアプリケーションを介してメディアパフォーマンスを自動で取得します。
                APIで取得可能な数値を全取得しておりますので、詳細数値の可視化も可能です。
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div>
              <h2 className="text-xl font-bold mb-5 lg:px-10">TikTok広告レポート</h2>
              <div className="mb-5 lg:px-10">
                <Image
                  src="/images/5dd2e69e7ca524605f094ecb720bd83e.png"
                  alt="TikTok広告レポート"
                  width={560}
                  height={720}
                  quality={90}
                />
              </div>
              <p className="pb-10 lg:px-10">
                TikTok広告のレポートが作成可能です。
                独自開発したアプリケーションを介してメディアパフォーマンスを自動で取得します。
                APIで取得可能な数値を全取得しておりますので、詳細数値の可視化も可能です。
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-5 lg:px-10">Google & YouTube広告レポート</h2>
              <div className="mb-5 lg:px-10">
                <Image
                  src="/images/db9717065f66815dee7c256ed7cd2705.png"
                  alt="Google & YouTube広告レポート"
                  width={560}
                  height={720}
                  quality={90}
                />
              </div>
              <p className="pb-10 lg:px-10">
                Google広告/YouTube広告のレポートが作成可能です。 Looker
                Studioのデフォルト機能を利用してメディアパフォーマンスを自動で取得します。
              </p>
            </div>
          </div>
        </div>
        <button className="bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded">
          <Link href={"/portfolio"}>すべてのレポートを見る</Link>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center bg-slate-100 p-10 lg:p-20">
        <h2 className="font-bold text-center text-2xl lg:text-4xl">
          マーケティング担当者自らがノーコードで使える機能
        </h2>
        <p className="text-center pt-10">
          実務を理解したマーケティング担当者自らがノーコードで使える機能を活用してスマートにビジネスを成長させましょう。
        </p>
      </div>
      <div className="lg:flex">
        <div className="p-10 lg:p-20">
          <h2 className="text-2xl font-bold mb-5">すべてのデータを一元化</h2>
          <p>
            それぞれの管理画面に毎回ログインしてデータをダウンロードしてコピー＆ペーストを繰り返すような面倒な業務はもう卒業。
            MAGONOTEならAPIを通じて各媒体のデータを毎日自動的に取得するので、日々のデータ更新作業をそのものを無くす事できます。
          </p>
        </div>
        <div className="p-10 lg:p-20">
          <Image
            src="/images/sincerely-media-xJlc_Ke3oNI-unsplash.jpg"
            width={960}
            height={720}
            quality={90}
          />
        </div>
      </div>
      <div className="bg-slate-100 lg:flex lg:flex-row-reverse">
        <div className="p-10 lg:p-20">
          <h2 className="text-2xl font-bold mb-5">手間なくレポート作成</h2>
          <p>
            レポートやダッシュボードのテンプレートがあらかじめ用意されているので、毎回ゼロから新しいレポートを作る必要はありません。テンプレートを選び、権限を付与してMAGONOTEに依頼するだけで、1営業日で完成したレポートが手元に届きます。
            そのレポートをベースに必要に応じてカスタマイズしてご利用ください。
          </p>
        </div>
        <div className="p-10 lg:p-20">
          <Image
            src="/images/sincerely-media-xJlc_Ke3oNI-unsplash.jpg"
            width={960}
            height={720}
            quality={90}
          />
        </div>
      </div>
      <div className="lg:flex">
        <div className="p-10 lg:p-20">
          <h2 className="text-2xl font-bold mb-5">簡単にレポートを共有</h2>
          <p>
            レポートやダッシュボードは、社内メンバーやクライアントを招待すれば、招待されたメンバーは常に最新にアップデートされたデータが確認でき、また共同で編集することもできます。
          </p>
        </div>
        <div className="p-10 lg:p-20">
          <Image
            src="/images/sincerely-media-xJlc_Ke3oNI-unsplash.jpg"
            width={960}
            height={720}
            quality={90}
          />
        </div>
      </div>
      <div className="lg:flex flex-row-reverse bg-slate-100">
        <div className="p-10 lg:p-20">
          <h2 className="text-2xl font-bold mb-5">自由自在にカスタマイズ</h2>
          <p>
            レポートやダッシュボードは一度作成したものを変更なしで利用し続ける方法では浸透しない場合が多く、活用されるものにするためには利用ユーザーの声を随時反映していくことが重要です。MAGONOTEは、LookerStudio（旧Googleデータポータル）やGoogleスプレッドシートなどの既に利用者が多くまたノーコードで使えるサービスを活用することで、誰でも簡単にカスタマイズできるようにしています。
          </p>
        </div>
        <div className="p-10 lg:p-20">
          <Image
            src="/images/sincerely-media-xJlc_Ke3oNI-unsplash.jpg"
            width={960}
            height={720}
            quality={90}
          />
        </div>
      </div>
      <div className="flex flex-col items-center bg-yellow-200 p-10 my-5 lg:m-5">
        <h2 className="font-bold text-center text-xl lg:text-2xl">
          今すぐ無料でレポートを自動化し、
          <br className="lg:hidden" />
          改善アクションに時間を使おう
        </h2>
        <button className="bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded m-5">
          <Link href={"/trial"}>今すぐ無料で始める</Link>
        </button>
      </div>
      <div className="lg:flex items-center justify-center">
        <div className="p-10 lg:p-20">
          <Image
            src="/images/sincerely-media-xJlc_Ke3oNI-unsplash.jpg"
            width={800}
            height={560}
            quality={90}
          />
        </div>
        <div className="flex flex-col p-10 lg:p-20">
          <h2 className="text-xl font-bold pb-5">今すぐレポートを自動化しよう</h2>
          <button className="bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded">
            <Link href={"/trial"}>無料で始める</Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
