import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import { useMediaQuery } from "react-responsive";

const Index = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1023px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });
  return (
    <Layout>
      <div className="animate__animated animate__fadeIn animate__delay-500ms flex flex-col justify-center items-start bg-slate-50 py-40 mx-6 lg:flex lg:flex-col lg:justify-center lg:items-center lg:py-0 lg:mx-0 lg:mt-52 lg:mb-72">
        <p className="font-mPlus2c font-bold text-3xl pb-4 tracking-wide lg:tracking-wider lg:text-5xl lg:text-center lg:pb-2">
          完全無料で
          <br className="lg:hidden" />
          マーケティングレポート
          <br className="lg:hidden" />
          をご提供
        </p>
        <p className="font-mPlus2c font-medium  tracking-wide lg:tracking-wider lg:text-center lg:text-xl">
          アクセス解析・広告・SNSまで幅広いレポートに対応。完全無料ですぐはじめられます。
        </p>
        <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider lg:text-center lg:text-xl">
          レポート対応メディアは順次追加予定
        </p>
        <button className="font-mPlus2c bg-purple-800 border-solid border border-purple-800 text-white transform active:bg-white active:text-purple-800 active:border-solid active:border active:border-purple-800 active:scale-95 active:delay-75 hover:scale-105 transition-transform font-bold py-2 px-4 rounded-full my-6 tracking-wide lg:tracking-wider lg:text-2xl lg:w-96 lg:h-16 lg:mt-7">
          今すぐ無料で始める
        </button>
      </div>

      {isDesktopOrLaptop && (
        <div className="flex justify-center items-center">
          <div className="animate__animated animate__fadeInUp animate__delay-500ms absolute mx-6">
            <Image
              src="/images/top_first_pc.png"
              alt="レポートのイメージ画像"
              width={1140}
              height={480}
              quality={90}
            />
          </div>
        </div>
      )}

      {isTablet && !isMobile && (
        <div className="flex justify-center items-center">
          <div className="animate__animated animate__fadeInUp animate__delay-500ms absolute mx-6">
            <Image
              src="/images/top_first_pc.png"
              alt="レポートのイメージ画像"
              width={1000}
              height={400}
              quality={90}
            />
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex justify-center items-center">
          <div className="animate__animated animate__fadeInUp animate__delay-500ms absolute mx-6 mb-10">
            <Image
              src="/images/top_first_sp.png"
              alt="レポートのイメージ画像"
              width={342}
              height={190}
              quality={90}
            />
          </div>
        </div>
      )}

      <div className="bg-purple-800 h-44 lg:h-80"></div>

      {isDesktopOrLaptop && (
        <div className="flex flex-row justify-center bg-slate-50 pt-20">
          <Reveal animation={Animation.SlideInLeft} delay={500}>
            <Image
              src="/images/top_about.png"
              alt="レポートのイメージ画像"
              width={550}
              height={400}
              quality={90}
            />
          </Reveal>
          <Reveal animation={Animation.SlideInRight} delay={500}>
            <div className="flex flex-col max-w-lg my-12 ml-10">
              <p className="font-mPlus2c font-bold text-left text-4xl tracking-wider">
                カスタマイズ可能な豊富な
                <br />
                テンプレート
              </p>
              <div className="flex items-center mt-0.5">
                <Image
                  src="/images/rect_about.png"
                  alt="RectAngle"
                  width={40}
                  height={2}
                  quality={90}
                />
                <p className="font-mPlus2c font-bold ml-3 tracking-wider">About</p>
              </div>
              <p className="font-mPlus2c font-medium mt-6 tracking-wider leading-loose">
                MAGONOTEは、マーケティング担当者のデータ集計やレポート作成に
                かかる時間を短縮し、改善アクションに時間を使えるように作成された
                マーケティングレポート自動化サービスです。Looker Studioで描写しており、
                用途に合わせたカスタマイズが誰でも簡単に行えます。
              </p>
            </div>
          </Reveal>
        </div>
      )}

      {!isDesktopOrLaptop && (
        <div className="flex flex-col justify-center items-center bg-slate-50 pt-20 mx-6">
          <Reveal animation={Animation.FadeInUp} delay={400}>
            <Image
              src="/images/top_about.png"
              alt="レポートのイメージ画像"
              width={550}
              height={400}
              quality={90}
            />
          </Reveal>
          <Reveal animation={Animation.FadeInUp} delay={500}>
            <div className="flex flex-col max-w-lg mt-8">
              <p className="font-mPlus2c font-bold text-center text-3xl tracking-wide">
                カスタマイズ可能な豊富なテンプレート
              </p>
              <p className="font-mPlus2c font-medium mt-4 tracking-wide">
                MAGONOTEは、マーケティング担当者のデータ集計やレポート作成に
                かかる時間を短縮し、改善アクションに時間を使えるように作成された
                マーケティングレポート自動化サービスです。Looker Studioで描写しており、
                用途に合わせたカスタマイズが誰でも簡単に行えます。
              </p>
            </div>
          </Reveal>
        </div>
      )}

      <div className="flex flex-col justify-center items-center bg-slate-50 mt-32 mx-6 lg:mt-20 lg:mx-0">
        <Reveal animation={Animation.FadeIn} delay={500}>
          <p className="font-mPlus2c font-bold text-center text-3xl tracking-wide lg:tracking-wider lg:text-4xl">
            利用できるレポートのテンプレート
          </p>
        </Reveal>
        <div className="pt-4 lg:pt-10">
          <Reveal animation={Animation.FadeInUp} delay={500}>
            <div className="flex flex-col lg:flex lg:flex-row">
              <div className="max-w-lg ">
                <p className="font-mPlus2c text-xl font-bold mb-2 tracking-wide lg:tracking-wider lg:px-5 lg:mb-4">
                  Facebook広告レポート
                </p>
                <div className="lg:px-5">
                  <Link href={"portfolio/facebook-report"}>
                    <a>
                      <Image
                        src="/images/top_facebook.jpg"
                        alt="Facebook広告レポートイメージ画像"
                        width={540}
                        height={400}
                        quality={90}
                        className="active:scale-95 active:delay-75 hover:scale-105 transition-transform"
                      />
                    </a>
                  </Link>
                </div>
                <p className="font-mPlus2c font-medium pb-8 mt-2 tracking-wide lg:tracking-wider lg:px-5 lg:pb-0">
                  Facebook・Instagram広告のレポートが作成可能です。
                  独自開発したアプリケーションを介してメディアパフォーマンスを自動で取得します。
                  APIで取得可能な数値を全取得しておりますので、詳細数値の可視化も可能です。
                </p>
              </div>
              <div className="max-w-lg">
                <p className="font-mPlus2c text-xl font-bold mb-2 tracking-wide lg:tracking-wider lg:px-5">
                  LINE広告レポート
                </p>
                <div className="lg:px-5">
                  <Link href={"/portfolio/line-report"}>
                    <a>
                      <Image
                        src="/images/top_line.jpg"
                        alt="LINE広告レポートイメージ画像"
                        width={540}
                        height={400}
                        quality={90}
                        className="active:scale-95 active:delay-75 hover:scale-105 transition-transform"
                      />
                    </a>
                  </Link>
                </div>
                <p className="font-mPlus2c font-medium pb-8 mt-2 tracking-wide lg:tracking-wider lg:px-5 lg:pb-0">
                  LINE広告のレポートが作成可能です。
                  独自開発したアプリケーションを介してメディアパフォーマンスを自動で取得します。
                  APIで取得可能な数値を全取得しておりますので、詳細数値の可視化も可能です。
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal animation={Animation.FadeInUp} delay={500}>
            <div className="flex flex-col lg:flex-row lg:pt-8">
              <div className="max-w-lg">
                <p className="font-mPlus2c text-xl font-bold mb-4 tracking-wide lg:tracking-wider lg:px-5">
                  TikTok広告レポート
                </p>
                <div className="lg:px-5">
                  <Link href={"/portfolio/tiktok-report"}>
                    <a>
                      <Image
                        src="/images/top_tiktok.jpg"
                        alt="TikTok広告レポートイメージ画像"
                        width={540}
                        height={400}
                        quality={90}
                        className="active:scale-95 active:delay-75 hover:scale-105 transition-transform"
                      />
                    </a>
                  </Link>
                </div>
                <p className="font-mPlus2c font-medium pb-8 mt-2 tracking-wide lg:tracking-wider lg:px-5 lg:pb-0">
                  TikTok広告のレポートが作成可能です。
                  独自開発したアプリケーションを介してメディアパフォーマンスを自動で取得します。
                  APIで取得可能な数値を全取得しておりますので、詳細数値の可視化も可能です。
                </p>
              </div>
              <div className="max-w-lg">
                <h2 className="font-mPlus2c text-xl font-bold mb-4 tracking-wide lg:tracking-wider lg:px-5">
                  Google & YouTube広告レポート
                </h2>
                <div className="lg:px-5">
                  <Link href={"/portfolio/google-and-youtube-report"}>
                    <a>
                      <Image
                        src="/images/top_ga_yt.jpg"
                        alt="Google & YouTube広告レポートイメージ画像"
                        width={540}
                        height={400}
                        quality={90}
                        className="active:scale-95 active:delay-75 hover:scale-105 transition-transform"
                      />
                    </a>
                  </Link>
                </div>
                <p className="font-mPlus2c font-medium mt-2 tracking-wide lg:tracking-wider lg:px-5">
                  Google広告/YouTube広告のレポートが作成可能です。 Looker
                  Studioのデフォルト機能を利用してメディアパフォーマンスを自動で取得します。
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal animation={Animation.FadeInUp} delay={500}>
          <Link href={"/portfolio"}>
            <button className="font-mPlus2c bg-purple-800 border-solid border border-purple-800 text-white transform focus:bg-white focus:text-purple-800 focus:border-solid focus:border focus:border-purple-800 focus:scale-95 focus:delay-75 hover:scale-105 transition-transform font-bold py-2 px-4 mt-7 rounded-full w-44 mb-32 tracking-wide lg:tracking-wider">
              レポートを見る
            </button>
          </Link>
        </Reveal>
      </div>
      <Reveal animation={Animation.FadeIn} delay={500}>
        <div className="flex flex-col items-center bg-gradient-to-r from-purple-800 to-purple-600">
          <p className="font-mPlus2c font-bold text-center text-2xl text-white mt-14 tracking-wide lg:tracking-wider lg:mt-20 lg:mx-0">
            今すぐ無料でレポートを自動化し、改善アクションに時間を使おう
          </p>
          <button className="font-mPlus2c bg-white text-purple-800 font-bold py-2 px-4 rounded-full mt-8 mb-14 w-52 transform active:scale-95 active:delay-75 hover:scale-105 transition-transform tracking-wide lg:w-96 lg:h-16 lg:text-2xl lg:tracking-wider lg:mb-20">
            今すぐ無料で始める
          </button>
        </div>
      </Reveal>
      <Reveal animation={Animation.FadeIn} delay={500}>
        <div className="flex flex-col justify-center items-center bg-slate-50 mt-20 mx-6 lg:px-20 lg:mx-0">
          <p className="font-mPlus2c font-bold text-center text-3xl tracking-wide lg:tracking-wider lg:text-4xl">
            マーケティング担当者自らがノーコードで使える機能
          </p>
          <p className="font-mPlus2c font-medium text-center mt-2 mb-4 tracking-wide lg:tracking-wider lg:mt-4 lg:mb-0">
            実務を理解したマーケティング担当者自らがノーコードで使える機能を活用して
            <br />
            スマートにビジネスを成長させましょう。
          </p>
        </div>
      </Reveal>

      {isDesktopOrLaptop && (
        <div className="flex flex-row justify-center bg-slate-50 mt-4 mb-20">
          <Reveal animation={Animation.FadeInLeft} delay={500}>
            <div className="max-w-lg px-5 py-20">
              <p className="font-mPlus2c text-2xl font-bold tracking-wider text-left">
                すべてのデータを一元化
              </p>
              <p className="font-mPlus2c font-medium mt-6 text-base tracking-wider leading-loose">
                それぞれの管理画面に毎回ログインしてデータをダウンロードしてコピー＆ペーストを繰り返すような面倒な業務はもう卒業。
                MAGONOTEならAPIを通じて各媒体のデータを毎日自動的に取得するので、日々のデータ更新作業をそのものを無くす事ができます。
              </p>
            </div>
          </Reveal>
          <Reveal animation={Animation.FadeInRight} delay={500}>
            <div className="px-5 pt-10">
              <Image
                src="/images/top_illust_1.png"
                alt="すべてのデータを一元化"
                width={450}
                height={300}
                quality={90}
              />
            </div>
          </Reveal>
        </div>
      )}

      {!isDesktopOrLaptop && (
        <div className="flex flex-col-reverse items-center bg-slate-50 mt-4">
          <Reveal animation={Animation.FadeInUp} delay={500}>
            <div className="max-w-lg mx-6">
              <p className="font-mPlus2c text-center text-2xl font-bold mt-4 mb-2 tracking-wide">
                すべてのデータを一元化
              </p>
              <p className="font-mPlus2c font-medium mb-8 tracking-wide">
                それぞれの管理画面に毎回ログインしてデータをダウンロードしてコピー＆ペーストを繰り返すような面倒な業務はもう卒業。
                MAGONOTEならAPIを通じて各媒体のデータを毎日自動的に取得するので、日々のデータ更新作業をそのものを無くす事ができます。
              </p>
            </div>
          </Reveal>
          <Reveal animation={Animation.FadeInUp} delay={500}>
            <div className="mx-6">
              <Image
                src="/images/top_illust_sp_1.png"
                alt="すべてのデータを一元化"
                width={450}
                height={300}
                quality={90}
              />
            </div>
          </Reveal>
        </div>
      )}

      {isDesktopOrLaptop && (
        <div className="flex justify-center flex-row-reverse bg-slate-50 mb-20">
          <Reveal animation={Animation.FadeInRight} delay={500}>
            <div className="max-w-lg px-5 py-10">
              <p className="font-mPlus2c text-left text-2xl font-bold tracking-wider">
                手間なくレポート作成
              </p>
              <p className="font-mPlus2c font-medium mt-6 text-base tracking-wider leading-loose">
                レポートやダッシュボードのテンプレートがあらかじめ用意されているので、毎回ゼロから新しいレポートを作る必要はありません。テンプレートを選び、権限を付与してMAGONOTEに依頼するだけで、1営業日で完成したレポートが手元に届きます。
                そのレポートをベースに必要に応じてカスタマイズしてご利用ください。
              </p>
            </div>
          </Reveal>
          <Reveal animation={Animation.FadeInLeft} delay={500}>
            <div className="px-5">
              <Image
                src="/images/top_illust_2.png"
                alt="手間なくレポート作成"
                width={450}
                height={300}
                quality={90}
              />
            </div>
          </Reveal>
        </div>
      )}

      {!isDesktopOrLaptop && (
        <div className="flex flex-col-reverse items-center bg-slate-50 mt-4">
          <Reveal animation={Animation.FadeInUp} delay={500}>
            <div className="max-w-lg mx-6">
              <p className="font-mPlus2c text-center text-2xl font-bold mt-4 mb-2 tracking-wide">
                手間なくレポート作成
              </p>
              <p className="font-mPlus2c font-medium mb-8 tracking-wide">
                レポートやダッシュボードのテンプレートがあらかじめ用意されているので、毎回ゼロから新しいレポートを作る必要はありません。テンプレートを選び、権限を付与してMAGONOTEに依頼するだけで、1営業日で完成したレポートが手元に届きます。
                そのレポートをベースに必要に応じてカスタマイズしてご利用ください。
              </p>
            </div>
          </Reveal>
          <Reveal animation={Animation.FadeInUp} delay={500}>
            <div className="mx-6">
              <Image
                src="/images/top_illust_sp_2.png"
                alt="手間なくレポート作成"
                width={450}
                height={300}
                quality={90}
              />
            </div>
          </Reveal>
        </div>
      )}

      {isDesktopOrLaptop && (
        <div className="flex flex-row justify-center bg-slate-50 mb-20">
          <Reveal animation={Animation.FadeInLeft} delay={500}>
            <div className="max-w-lg px-5 py-10">
              <p className="font-mPlus2c text-left text-2xl font-bold tracking-wider">
                簡単にレポートを共有
              </p>
              <p className="font-mPlus2c font-medium mt-6 text-base tracking-wide leading-loose">
                レポートやダッシュボードは、社内メンバーやクライアントを招待すれば、招待されたメンバーは常に最新にアップデートされたデータが確認でき、また共同で編集することもできます。
              </p>
            </div>
          </Reveal>
          <Reveal animation={Animation.FadeInRight} delay={500}>
            <div className="px-5">
              <Image
                src="/images/top_illust_3.png"
                alt="簡単にレポートを共有"
                width={450}
                height={300}
                quality={90}
              />
            </div>
          </Reveal>
        </div>
      )}

      {!isDesktopOrLaptop && (
        <div className="flex flex-col-reverse items-center bg-slate-50 mt-4">
          <Reveal animation={Animation.FadeInUp} delay={500}>
            <div className="max-w-lg mx-6">
              <p className="font-mPlus2c text-center text-2xl font-bold mt-4 mb-2 tracking-wide">
                簡単にレポートを共有
              </p>
              <p className="font-mPlus2c font-medium mb-8 tracking-wide">
                レポートやダッシュボードは、社内メンバーやクライアントを招待すれば、招待されたメンバーは常に最新にアップデートされたデータが確認でき、また共同で編集することもできます。
              </p>
            </div>
          </Reveal>
          <Reveal animation={Animation.FadeInUp} delay={500}>
            <div className="mx-6">
              <Image
                src="/images/top_illust_sp_3.png"
                alt="簡単にレポートを共有"
                width={450}
                height={300}
                quality={90}
              />
            </div>
          </Reveal>
        </div>
      )}

      {isDesktopOrLaptop && (
        <div className="flex justify-center flex-row-reverse bg-slate-50 mt-4">
          <Reveal animation={Animation.FadeInRight} delay={500}>
            <div className="max-w-lg px-5 py-10">
              <p className="font-mPlus2c text-left text-2xl font-bold tracking-wider">
                自由自在にカスタマイズ
              </p>
              <p className="font-mPlus2c font-medium mt-6 text-base tracking-wider leading-loose">
                レポートやダッシュボードは一度作成したものを変更なしで利用し続ける方法では浸透しない場合が多く、活用されるものにするためには利用ユーザーの声を随時反映していくことが重要です。MAGONOTEは、LookerStudio（旧Googleデータポータル）やGoogleスプレッドシートなどの既に利用者が多くまたノーコードで使えるサービスを活用することで、誰でも簡単にカスタマイズできるようにしています。
              </p>
            </div>
          </Reveal>
          <Reveal animation={Animation.FadeInLeft} delay={500}>
            <div className="px-5">
              <Image
                src="/images/top_illust_4.png"
                alt="自由自在にカスタマイズ"
                width={450}
                height={300}
                quality={90}
              />
            </div>
          </Reveal>
        </div>
      )}

      {!isDesktopOrLaptop && (
        <div className="flex flex-col-reverse items-center bg-slate-50 mt-4">
          <Reveal animation={Animation.FadeInUp} delay={500}>
            <div className="max-w-lg mx-6">
              <p className="font-mPlus2c text-center text-2xl font-bold mt-4 mb-2 tracking-wide">
                自由自在にカスタマイズ
              </p>
              <p className="font-mPlus2c font-medium tracking-wide">
                レポートやダッシュボードは一度作成したものを変更なしで利用し続ける方法では浸透しない場合が多く、活用されるものにするためには利用ユーザーの声を随時反映していくことが重要です。MAGONOTEは、LookerStudio（旧Googleデータポータル）やGoogleスプレッドシートなどの既に利用者が多くまたノーコードで使えるサービスを活用することで、誰でも簡単にカスタマイズできるようにしています。
              </p>
            </div>
          </Reveal>
          <Reveal animation={Animation.FadeInUp} delay={500}>
            <div className="mx-6">
              <Image
                src="/images/top_illust_sp_4.png"
                alt="自由自在にカスタマイズ"
                width={450}
                height={300}
                quality={90}
              />
            </div>
          </Reveal>
        </div>
      )}
    </Layout>
  );
};

export default Index;
