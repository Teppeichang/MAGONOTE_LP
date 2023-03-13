import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center bg-slate-50 min-h-screen">
        <h2 className="font-bold text-center text-3xl lg:text-5xl mb-10">
          完全無料でマーケティングレポートをご提供
        </h2>
        <p className="text-center text-xl">アクセス解析・広告・SNSまで幅広いレポートに対応完全無料ですぐはじめられます。</p>
        <p className="text-center text-xl">レポート対応メディアは順次追加予定</p>
        <button className="bg-purple-800 text-white hover:bg-white hover:text-purple-800 hover:border-solid hover:border hover:border-purple-800 font-bold text-2xl py-2 px-4 rounded-full mt-6 lg:w-96 lg:h-16">
          <Link href={"/trial"}>今すぐ無料で始める</Link>
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute">
          <Image
            src="/images/top_first.png"
            alt="レポートのイメージ画像"
            width={720}
            height={320}
            quality={90}
          />
        </div>
      </div>
      <div className="bg-purple-800 px-10 pb-20 w-screen lg:px-20 lg:pt-40"></div>
      <div className="flex flex-col justify-center items-center bg-slate-50 pt-20 lg:flex-row">
        <Image
          src="/images/top_about.png"
          alt="レポートのイメージ画像"
          width={550}
          height={400}
          quality={90}
        />
        <div className="flex flex-col max-w-lg ml-10">
          <p className="font-bold text-3xl lg:text-4xl">カスタマイズ可能な豊富なテンプレート</p>
          <div className="flex items-center mt-0.5">
            <Image
              src="/images/rect_about.png"
              alt="RectAngle"
              width={40}
              height={2}
              quality={90}
            />
            <p className="text-base ml-3">About</p>
          </div>
          <p className="text-base pt-10">
            MAGONOTEは、マーケティング担当者のデータ集計やレポート作成に
            かかる時間を短縮し、改善アクションに時間を使えるように作成された
            マーケティングレポート自動化サービスです。Looker Studioで描写しており、
            用途に合わせたカスタマイズが誰でも簡単に行えます。
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-slate-50 py-10 lg:py-20">
        <h2 className="font-bold text-center px-10 pb-10 text-3xl lg:text-4xl">
          利用できるレポートのテンプレート
        </h2>
        <div className="p-10 lg:py-10">
          <div className="flex flex-col lg:flex-row">
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
        <button className="bg-purple-800 text-white hover:bg-white hover:text-purple-800 hover:border-solid hover:border hover:border-purple-800 font-bold py-2 px-4 rounded-full mb-10 w-44">
          <Link href={"/portfolio"}>レポートを見る</Link>
        </button>
      </div>
      <div className="flex flex-col items-center bg-gradient-to-r from-purple-800 to-purple-600 w-screen">
        <h2 className="font-bold text-center text-2xl text-white mt-20">
          今すぐ無料でレポートを自動化し、
          <br className="lg:hidden" />
          改善アクションに時間を使おう
        </h2>
        <button className="bg-white text-purple-800 font-bold py-2 px-4 rounded-full mt-8 mb-20 w-52">
          <Link href={"/trial"}>今すぐ無料で始める</Link>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center bg-slate-50 p-10 lg:p-20">
        <p className="font-bold text-center text-3xl lg:text-4xl">
          マーケティング担当者自らがノーコードで使える機能
        </p>
        <p className="text-center mt-4">
          実務を理解したマーケティング担当者自らがノーコードで使える機能を活用してスマートにビジネスを成長させましょう。
        </p>
      </div>
      <div className="bg-slate-50 lg:flex lg:justify-center">
        <div className="max-w-lg p-10 lg:p-20">
          <h2 className="text-2xl font-bold mb-6">すべてのデータを一元化</h2>
          <p className="text-base">
            それぞれの管理画面に毎回ログインしてデータをダウンロードしてコピー＆ペーストを繰り返すような面倒な業務はもう卒業。
            MAGONOTEならAPIを通じて各媒体のデータを毎日自動的に取得するので、日々のデータ更新作業をそのものを無くす事できます。
          </p>
        </div>
        <div className="p-10 lg:p-20">
          <Image
            src="/images/top_about.png"
            alt="レポートのイメージ画像"
            width={480}
            height={360}
            quality={90}
          />
        </div>
      </div>
      <div className="bg-slate-50 lg:flex lg:justify-center lg:flex-row-reverse">
        <div className="max-w-lg p-10 lg:p-20">
          <h2 className="text-2xl font-bold mb-6">手間なくレポート作成</h2>
          <p className="text-base">
            レポートやダッシュボードのテンプレートがあらかじめ用意されているので、毎回ゼロから新しいレポートを作る必要はありません。テンプレートを選び、権限を付与してMAGONOTEに依頼するだけで、1営業日で完成したレポートが手元に届きます。
            そのレポートをベースに必要に応じてカスタマイズしてご利用ください。
          </p>
        </div>
        <div className="p-10 lg:p-20">
          <Image
            src="/images/top_about.png"
            alt="レポートのイメージ画像"
            width={480}
            height={360}
            quality={90}
          />
        </div>
      </div>
      <div className="bg-slate-50 lg:flex lg:justify-center">
        <div className="max-w-lg p-10 lg:p-20">
          <h2 className="text-2xl font-bold mb-6">簡単にレポートを共有</h2>
          <p className="text-base">
            レポートやダッシュボードは、社内メンバーやクライアントを招待すれば、招待されたメンバーは常に最新にアップデートされたデータが確認でき、また共同で編集することもできます。
          </p>
        </div>
        <div className="p-10 lg:p-20">
          <Image
            src="/images/top_about.png"
            alt="レポートのイメージ画像"
            width={480}
            height={360}
            quality={90}
          />
        </div>
      </div>
      <div className="bg-slate-50 lg:flex lg:justify-center lg:flex-row-reverse">
        <div className="max-w-lg p-10 lg:p-20">
          <h2 className="text-2xl font-bold mb-6">自由自在にカスタマイズ</h2>
          <p className="text-base">
            レポートやダッシュボードは一度作成したものを変更なしで利用し続ける方法では浸透しない場合が多く、活用されるものにするためには利用ユーザーの声を随時反映していくことが重要です。MAGONOTEは、LookerStudio（旧Googleデータポータル）やGoogleスプレッドシートなどの既に利用者が多くまたノーコードで使えるサービスを活用することで、誰でも簡単にカスタマイズできるようにしています。
          </p>
        </div>
        <div className="p-10 lg:p-20">
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
