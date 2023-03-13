import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-start bg-slate-50 py-40 mx-6 lg:flex lg:flex-col lg:justify-center lg:items-center lg:min-h-screen lg:py-0 lg:mx-0">
        <p className="font-bold text-3xl mb-4 lg:text-5xl lg:text-center lg:mb-10">
          完全無料で
          <br className="lg:hidden" />
          マーケティングレポート
          <br className="lg:hidden" />
          をご提供
        </p>
        <p className="text-base lg:text-center lg:text-xl">
          アクセス解析・広告・SNSまで幅広いレポートに対応完全無料ですぐはじめられます。
        </p>
        <p className="lg:text-center lg:text-xl">レポート対応メディアは順次追加予定</p>
        <button className="bg-purple-800 text-white hover:bg-white hover:text-purple-800 hover:border-solid hover:border hover:border-purple-800 font-bold py-2 px-4 rounded-full mt-6 lg:text-2xl lg:w-96 lg:h-16">
          <Link href={"/trial"}>今すぐ無料で始める</Link>
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute mx-6">
          <Image
            src="/images/top_first.png"
            alt="レポートのイメージ画像"
            width={720}
            height={320}
            quality={90}
          />
        </div>
      </div>
      <div className="bg-purple-800 w-screen h-44 lg:h-80"></div>
      <div className="flex flex-col justify-center items-center bg-slate-50 pt-24 mx-6 lg:flex-row lg:pt-20">
        <Image
          src="/images/top_about.png"
          alt="レポートのイメージ画像"
          width={550}
          height={400}
          quality={90}
        />
        <div className="flex flex-col max-w-lg mt-8 mx-6 lg:mt-0 lg:ml-10">
          <p className="font-bold text-center text-3xl lg:text-left lg:text-4xl">
            カスタマイズ可能な豊富なテンプレート
          </p>
          <div className="hidden lg:flex lg:items-center lg:mt-0.5">
            <Image
              src="/images/rect_about.png"
              alt="RectAngle"
              width={40}
              height={2}
              quality={90}
            />
            <p className="text-base ml-3">About</p>
          </div>
          <p className="text-base mt-4 lg:mt-10">
            MAGONOTEは、マーケティング担当者のデータ集計やレポート作成に
            かかる時間を短縮し、改善アクションに時間を使えるように作成された
            マーケティングレポート自動化サービスです。Looker Studioで描写しており、
            用途に合わせたカスタマイズが誰でも簡単に行えます。
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-slate-50 mt-28 py-10 mx-6 lg:mt-20 lg:py-20">
        <h2 className="font-bold text-center pb-10 text-3xl lg:text-4xl">
          利用できるレポートのテンプレート
        </h2>
        <div className="lg:py-10">
          <div className="flex flex-col lg:flex lg:flex-row">
            <div className="max-w-lg">
              <h2 className="text-xl font-bold mb-4 lg:px-10">Facebook広告レポート</h2>
              <div className="lg:px-5">
                <Image
                  src="/images/top_facebook.png"
                  alt="Facebook広告レポートイメージ画像"
                  width={540}
                  height={560}
                  quality={90}
                />
              </div>
              <p className="pb-10 lg:px-10">
                Facebook・Instagram広告のレポートが作成可能です。
                独自開発したアプリケーションを介してメディアパフォーマンスを自動で取得します。
                APIで取得可能な数値を全取得しておりますので、詳細数値の可視化も可能です。
              </p>
            </div>
            <div className="max-w-lg">
              <h2 className="text-xl font-bold mb-5 lg:px-10">LINE広告レポート</h2>
              <div className="lg:px-5">
                <Image
                  src="/images/top_line.png"
                  alt="LINE広告レポートイメージ画像"
                  width={540}
                  height={560}
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
            <div className="max-w-lg">
              <h2 className="text-xl font-bold mb-5 lg:px-10">TikTok広告レポート</h2>
              <div className="lg:px-5">
                <Image
                  src="/images/top_tiktok.png"
                  alt="TikTok広告レポートイメージ画像"
                  width={540}
                  height={560}
                  quality={90}
                />
              </div>
              <p className="pb-10 lg:px-10">
                TikTok広告のレポートが作成可能です。
                独自開発したアプリケーションを介してメディアパフォーマンスを自動で取得します。
                APIで取得可能な数値を全取得しておりますので、詳細数値の可視化も可能です。
              </p>
            </div>
            <div className="max-w-lg">
              <h2 className="text-xl font-bold mb-5 lg:px-10">Google & YouTube広告レポート</h2>
              <div className="lg:px-5">
                <Image
                  src="/images/top_google_and_youtube.png"
                  alt="Google & YouTube広告レポートイメージ画像"
                  width={540}
                  height={560}
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
        <button className="bg-purple-800 text-white hover:bg-white hover:text-purple-800 hover:border-solid hover:border hover:border-purple-800 font-bold py-2 px-4 rounded-full w-44 mb-32 lg:mb-10">
          <Link href={"/portfolio"}>レポートを見る</Link>
        </button>
      </div>
      <div className="flex flex-col items-center bg-gradient-to-r from-purple-800 to-purple-600 mx-3 lg:mx-0 lg:w-screen">
        <h2 className="font-bold text-center text-2xl text-white mt-14 mx-4 lg:mt-20 lg:mx-0">
          今すぐ無料でレポートを自動化し、改善アクションに時間を使おう
        </h2>
        <button className="bg-white text-purple-800 font-bold py-2 px-4 rounded-full mt-8 mb-14 w-52 lg:mb-20">
          <Link href={"/trial"}>今すぐ無料で始める</Link>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center bg-slate-50 mt-20 mx-6 lg:px-20">
        <p className="font-bold text-center text-3xl lg:text-4xl">
          マーケティング担当者自らがノーコードで使える機能
        </p>
        <p className="text-center mt-4">
          実務を理解したマーケティング担当者自らがノーコードで使える機能を活用してスマートにビジネスを成長させましょう。
        </p>
      </div>
      <div className="flex flex-col-reverse bg-slate-50 mt-4 lg:flex lg:flex-row lg:justify-center">
        <div className="max-w-lg mx-6 lg:px-20 lg:py-20 lg:mx-0">
          <h2 className="text-center text-2xl font-bold mt-4 lg:text-left">すべてのデータを一元化</h2>
          <p className="mt-2 text-base">
            それぞれの管理画面に毎回ログインしてデータをダウンロードしてコピー＆ペーストを繰り返すような面倒な業務はもう卒業。
            MAGONOTEならAPIを通じて各媒体のデータを毎日自動的に取得するので、日々のデータ更新作業をそのものを無くす事できます。
          </p>
        </div>
        <div className="mx-6 lg:px-20 lg:py-10">
          <Image
            src="/images/top_about.png"
            alt="レポートのイメージ画像"
            width={480}
            height={360}
            quality={90}
          />
        </div>
      </div>
      <div className="flex flex-col-reverse bg-slate-50 mt-4 lg:flex lg:justify-center lg:flex-row-reverse">
        <div className="max-w-lg mx-6 lg:px-20 lg:py-20 lg:mx-0">
          <h2 className="text-center text-2xl font-bold mt-4 lg:text-left">手間なくレポート作成</h2>
          <p className="mt-2 text-base">
            レポートやダッシュボードのテンプレートがあらかじめ用意されているので、毎回ゼロから新しいレポートを作る必要はありません。テンプレートを選び、権限を付与してMAGONOTEに依頼するだけで、1営業日で完成したレポートが手元に届きます。
            そのレポートをベースに必要に応じてカスタマイズしてご利用ください。
          </p>
        </div>
        <div className="mx-6 lg:px-20">
          <Image
            src="/images/top_about.png"
            alt="レポートのイメージ画像"
            width={480}
            height={360}
            quality={90}
          />
        </div>
      </div>
      <div className="flex flex-col-reverse bg-slate-50 mt-4 lg:flex lg:flex-row lg:justify-center">
        <div className="max-w-lg mx-6 lg:px-20 lg:py-20 lg:mx-0">
          <h2 className="text-center text-2xl font-bold mt-4 lg:text-left">簡単にレポートを共有</h2>
          <p className="mt-2 text-base">
            レポートやダッシュボードは、社内メンバーやクライアントを招待すれば、招待されたメンバーは常に最新にアップデートされたデータが確認でき、また共同で編集することもできます。
          </p>
        </div>
        <div className="mx-6 lg:px-20">
          <Image
            src="/images/top_about.png"
            alt="レポートのイメージ画像"
            width={480}
            height={360}
            quality={90}
          />
        </div>
      </div>
      <div className="flex flex-col-reverse bg-slate-50 mt-4 lg:flex lg:justify-center lg:flex-row-reverse">
        <div className="max-w-lg mx-6 lg:px-20 lg:py-20 lg:mx-0">
          <h2 className="text-center text-2xl font-bold mt-4 lg:text-left">自由自在にカスタマイズ</h2>
          <p className="mt-2 text-base">
            レポートやダッシュボードは一度作成したものを変更なしで利用し続ける方法では浸透しない場合が多く、活用されるものにするためには利用ユーザーの声を随時反映していくことが重要です。MAGONOTEは、LookerStudio（旧Googleデータポータル）やGoogleスプレッドシートなどの既に利用者が多くまたノーコードで使えるサービスを活用することで、誰でも簡単にカスタマイズできるようにしています。
          </p>
        </div>
        <div className="mx-6 lg:px-20">
          <Image
            src="/images/top_about.png"
            alt="レポートのイメージ画像"
            width={480}
            height={360}
            quality={90}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
