import Layout from "../components/layout";
import BreadCrumb from "../components/breadCrumb";
import { NextSeo, BreadcrumbJsonLd } from "next-seo";

const Terms = () => {
  const lists = [
    { string: "トップページ", path: "/" },
    { string: "利用規約", path: "/terms" },
  ];
  return (
    <Layout>
      <NextSeo
        title="利用規約"
        description="株式会社Next Stageの広告レポート作成サービス「MAGONOTE」 の利用規約"
        canonical="https://magonote.shop/terms"
        openGraph={{
          type: "website",
          title: "利用規約",
          description:
            "株式会社Next Stageの広告レポート作成サービス「MAGONOTE」 の利用規約",
          siteName: "MAGONOTE",
          url: "https://magonote.shop/terms",
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
            name: "利用規約",
            item: "https://magonote.shop/terms",
          },
        ]}
      />
      <BreadCrumb lists={lists} />
      <div className="min-h-screen mx-10 lg:mx-24">
        <div className="my-10">
          <p className="font-mPlus2c text-2xl font-bold mb-2 tracking-wide lg:tracking-wider">
            利用規約
          </p>
          <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider">
            この利用規約（以下、「本規約」といいます。）は、株式会社Next
            Stage（以下、「当社」といいます。）がウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーのお客様（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
          </p>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-bold text-2xl mb-2 tracking-wide lg:tracking-wider">
            第1条（適用）
          </p>
          <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider">
            本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
            ユーザーおよび当社は、個別契約において協議のうえ、本規約と異なる定めをすることができるものとし、
            その場合には個別契約が本規約に優先するものとします。
          </p>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-bold text-2xl mb-2 tracking-wide lg:tracking-wider">
            第2条（利用登録）
          </p>
          <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider">
            登録希望者が当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。
            当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
          </p>
          <ul className="font-mPlus2c font-medium list-decimal list-inside ml-7 tracking-wide lg:tracking-wider">
            <li className="-indent-6">利用登録の申請に際して虚偽の事項を届け出た場合</li>
            <li className="-indent-6">本規約に違反したことがある者からの申請である場合</li>
            <li className="-indent-6">
              未成年者、成年被後見人、被保佐人または被補助人のいずれかであり、法定代理人、後見人、保佐人または補助人の同意等を得ていなかった場合
            </li>
            <li className="-indent-6">
              反社会的勢力等（暴力団、暴力団員、右翼団体、反社会的勢力、その他これに準ずる者を意味します。）である、または資金提供その他を通じて反社会的勢力等の維持、運営もしくは経営に協力もしくは関与する等反社会的勢力との何らかの交流もしくは関与を行っていると当社が判断した場合
            </li>
            <li className="-indent-6">その他、当社が利用登録を相当でないと判断した場合</li>
          </ul>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-bold text-2xl mb-2 tracking-wide lg:tracking-wider">
            第3条（ユーザーIDおよびパスワードの管理）
          </p>
          <p className="font-mPlus2c font-medium">
            ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを管理するものとします。
            ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与することはできません。当社は、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。
          </p>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-bold text-2xl mb-2 tracking-wide lg:tracking-wider">
            第4条（利用料金および支払方法）
          </p>
          <p className="font-mPlus2c font-medium">
            ユーザーは、本サービス利用の対価として、当社が別途定め、本ウェブサイトに表示する利用料金を、当社が指定する方法により支払うものとします。
            ユーザーが利用料金の支払を遅滞した場合には、ユーザーは法令の定める範囲内の利息を加算した遅延損害金を支払うものとします。
          </p>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-bold text-2xl mb-2 tracking-wide lg:tracking-wider">
            第5条（禁止事項）
          </p>
          <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはならないものとします。</p>
          <ul className="font-mPlus2c font-medium list-disc list-inside ml-7 tracking-wide lg:tracking-wider">
            <li className="-indent-6">
              ユーザーは、本サイトおよび本サービスを利用するにあたり、以下の各行為またはその恐れのある行為をしてはならないものとします。
            </li>
            <ul className="font-mPlus2c font-medium list-none list-inside ml-7 tracking-wide lg:tracking-wider">
              <li className="-indent-6">a. 犯罪行為若しくは犯罪行為に結びつく行為</li>
              <li className="-indent-6">
                b.
                当社または第三者の著作権、商標権その他の知的財産権、プライバシー権、名誉等の権利を侵害する行為
              </li>
              <li className="-indent-6">c. 当社または第三者を差別または誹謗中傷する行為</li>
              <li className="-indent-6">
                d.
                本サイトおよび本サービスを営利または商業目的で利用する行為（但し、当社が認める場合を除きます。)
              </li>
              <li className="-indent-6">
                e.
                本サービスの提供のためのシステムへの不正アクセス、スパム行為等、本サービスの運営を妨げる行為
              </li>
              <li className="-indent-6">
                f.
                本サイトおよび本コンテンツの全部または一部を当社に無断で、複製、複写、転載、転送、蓄積、販売、出版、その他ユーザー個人の私的利用の範囲を超えて利用する行為
              </li>
              <li className="-indent-6">
                g. 本サイトの利用権を第三者に再許諾、譲渡し、または、担保に供する行為
              </li>
              <li className="-indent-6">
                h.
                本サイトのリバースエンジニアリング、逆コンパイル、逆アセンブル、その他これらに準じる行為
              </li>
              <li className="-indent-6">i. 当社または第三者の信用を損なう行為</li>
              <li className="-indent-6">
                j. 他人になりすまして、本サイトおよび本サービスを利用する行為
              </li>
              <li className="-indent-6">k. 法令、公序良俗若しくは本利用規約に違反する行為</li>
              <li className="-indent-6">
                l. 当社の承認した以外の方法により、本サイトおよび本サービスを利用する行為
              </li>
              <li className="-indent-6">m. 当社または第三者に対する迷惑行為</li>
              <li className="-indent-6">n. その他当社が不適切と判断する行為</li>
            </ul>
            <li className="-indent-6">
              ユーザーが前項各号のいずれかに該当する行為を行ったことが判明した場合は、当社は、何らユーザーに対し事前連絡することなく、当該ユーザーによる本サービスの一部または全部の利用停止もしくはユーザーの除名等をすることができるものとし、ユーザーは、当社の判断につき、一切異議申立等行なうことはできないものとします。
            </li>
          </ul>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-bold text-2xl mb-2 tracking-wide lg:tracking-wider">
            第6条（保証の否認および免責等）
          </p>
          <ul className="font-mPlus2c font-medium list-decimal list-inside ml-7 tracking-wide lg:tracking-wider">
            <li className="-indent-6">
              当社は、本サイトおよび本サービスならびにこれらによって提供される情報について、正確性、最新性、完全性、有用性等いかなる事項についても保証いたしません。
            </li>
            <li className="-indent-6">
              当社は、ユーザーの端末が、本サイトおよび本サービスの利用に適さない場合であっても、本サイトおよび本サービスの変更、改変等、当該利用に適するように対応する義務を負わないものとします。
            </li>
            <li className="-indent-6">
              当社は、ユーザーの通信や活動に一切関与せず、本サービスの情報に起因して発生する損害について、賠償責任を負いません。万一、ユーザーと第三者間に紛争が発生した場合でも、当社は、当該紛争に対応する義務を負いません。
            </li>
            <li className="-indent-6">
              当社は、アクセス過多、その他予期せぬ要因に基づく本サービスの表示速度の低下や障害等に起因して発生したいかなる損害についても、賠償責任を負いません。
            </li>
            <li className="-indent-6">
              当社は、ユーザーが本利用規約に違反した場合、その他当社が本サービスの運営上不適当と判断する行為をユーザーが行った場合には、当該ユーザーに対して、何らの通知、催告または理由の開示なしに、本サイトおよび本サービスの利用停止、当該ユーザーの除名等、損害賠償請求等、当該ユーザーの行為の防止に必要な措置（法的措置を含みます。）を採ることができるものとし、それに起因してユーザーに発生したいかなる損害についても、賠償責任を負いません。
            </li>
          </ul>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-bold text-2xl mb-2 tracking-wide lg:tracking-wider">
            第7条（本サービスの提供の停止等）
          </p>
          <ul className="font-mPlus2c font-medium list-decimal list-inside ml-7 tracking-wide lg:tracking-wider">
            <li className="-indent-6">
              当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
            </li>
            <ul className="font-mPlus2c font-medium list-none list-inside ml-7 tracking-wide lg:tracking-wider">
              <li className="-indent-6">
                a.
                本サービスにかかるコンピュータシステム（クラウドサービスを含みます。）の保守点検または更新を行う場合
              </li>
              <li className="-indent-6">
                b.
                地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
              </li>
              <li className="-indent-6">c. コンピュータまたは通信回線等が事故により停止した場合</li>
              <li className="-indent-6">d. その他、当社が本サービスの提供が困難と判断した場合</li>
            </ul>
            <li className="-indent-6">
              当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害について、理由を問わず一切の責任を負わないものとします。
            </li>
          </ul>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-bold text-2xl mb-2 tracking-wide lg:tracking-wider">
            第8条（知的財産権等）
          </p>
          <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider">
            本サイト、および、本サービスにおいて当社が提供する文章、画像、プログラムその他のデータ等のコンテンツ（以下「本コンテンツ」といいます。）についての一切の権利（所有権、知的財産権、肖像権、パブリシティー権等）は、当社または当該権利を有する第三者に帰属するものとし、ユーザーは、方法または形態の如何を問わず、これらを当社に無断で複製、複写、転載、転送、蓄積、販売、出版その他ユーザー個人の私的利用の範囲を超えて使用してはならないものとします。
          </p>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-bold text-2xl mb-2 tracking-wide lg:tracking-wider">
            第9条（利用制限および登録抹消）
          </p>
          <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider">
            当社は、以下の場合には、事前の通知なく、データを削除し、ユーザーに対して本サービスの全部もしくは一部の利用を制限しまたはユーザーとしての登録を抹消することができるものとします。
          </p>
          <ul className="font-mPlus2c font-medium list-decimal list-inside ml-7 my-2 tracking-wide lg:tracking-wider">
            <li className="-indent-6">本規約のいずれかの条項に違反した場合</li>
            <li className="-indent-6">登録事項に虚偽の事実があることが判明した場合</li>
            <li className="-indent-6">
              破産、民事再生、会社更生または特別清算の手続開始決定等の申立がなされたとき
            </li>
            <li className="-indent-6">1年間以上本サービスの利用がない場合</li>
            <li className="-indent-6">
              当社からの問い合わせその他の回答を求める連絡に対して30日間以上応答がない場合
            </li>
            <li className="-indent-6">その他、当社が本サービスの利用を適当でないと判断した場合</li>
          </ul>
          <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider">
            前項各号のいずれかに該当した場合、ユーザーは、当然に当社に対する一切の債務について期限の利益を失い、その時点において負担する一切の債務を直ちに一括して弁済しなければなりません。
            当社は、本条に基づき当社が行った行為によりユーザーに生じた損害について、一切の責任を負いません。
          </p>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-bold text-2xl mb-2 tracking-wide lg:tracking-wider">
            第10条（サービス内容の変更等）
          </p>
          <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider">
            当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
          </p>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-bold text-2xl mb-2 tracking-wide lg:tracking-wider">
            第11条（秘密保持）
          </p>
          <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider">
            当社は、本サービスに登録されるユーザーの個人情報および投稿データについて、以下の場合を除き、秘密に取り扱うものとします。
          </p>
          <ul className="font-mPlus2c font-medium list-decimal list-inside ml-7 my-2 tracking-wide lg:tracking-wider">
            <li className="-indent-6">ユーザーの事前の書面による承諾がある場合</li>
            <li className="-indent-6">第12条に定める用途の場合</li>
            <li className="-indent-6">
              ユーザーが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合（クラウドサービスを含みます。）
            </li>
          </ul>
          <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider">
            ユーザーは、本サービスに関連して当社がユーザーに対して秘密に取り扱うことを求めて開示した非公知の情報について、当社の事前の書面による承諾がある場合を除き、秘密に取り扱うものとします。
          </p>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-bold text-2xl mb-2 tracking-wide lg:tracking-wider">
            第12条（個人情報・本情報の取扱い）
          </p>
          <ul className="font-mPlus2c font-medium list-decimal list-inside ml-7 tracking-wide lg:tracking-wider">
            <li className="-indent-6">
              当社は、ユーザーのプライバシーを尊重し、ユーザーの個人情報の管理に細心の注意を払い、当社が定めるプライバシーポリシーに従ってユーザーの個人情報を取り扱うものとします。
            </li>
            <li className="-indent-6">
              当社は、ユーザーが自らの意思および責任をもって本サービスを利用して登録する情報を、個人を特定できないように加工した統計データ・属性情報等を作成し、当該分析、統計データまたは属性情報を、個人が特定できない形で何らの制限なく利用することができることとします。なお、当該利用には、市場の調査、並びに本サービスのサービス検討、当社の既存・新規サービスの検討および開発のために行われる利用を含みますが、これらに限られません。
            </li>
            <li className="-indent-6">
              当社は、前項に定める分析、統計データまたは属性情報およびユーザーの情報を使用し、ユーザーに対して、特定の企業の委託を受けまたは当社の裁量で、当社が企画する各種イベント、当社の提供するサービスに関する情報を提供する場合があります。
            </li>
          </ul>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-bold text-2xl mb-2 tracking-wide lg:tracking-wider">
            第13条（反社会的勢力）
          </p>
          <ul className="font-mPlus2c font-medium list-decimal list-inside ml-7 tracking-wide lg:tracking-wider">
            <li className="-indent-6">
              ユーザーは、現在、暴力団、暴力団員、暴力団員でなくなった時から５年を経過しない者、暴力団準構成員、暴力団関係企業、総会屋等、社会運動等標ぼうゴロまたは特殊知能暴力集団等、その他これらに準ずる者（以下これらを「暴力団員等」といいます。）に該当しないこと、および次の各号のいずれにも該当しないことを表明し、かつ将来にわたっても該当しないことを確約するものとします。
            </li>
            <ul className="font-mPlus2c font-medium list-none list-inside ml-7 tracking-wide lg:tracking-wider">
              <li className="-indent-6">
                a.
                暴力団員等が経営を支配または実質的に関与していると認められる団体その他これらに準ずる者と関係を有すること
              </li>
              <li className="-indent-6">
                b.
                自己もしくは第三者の不正の利益を図る目的または第三者に損害を加える目的をもってするなど、不当に暴力団員等を利用していると認められる関係を有すること
              </li>
              <li className="-indent-6">
                c.暴力団員等に対して資金等を提供し、または便宜を供与するなどの関与をしていると認められる関係を有すること
              </li>
            </ul>
            <li className="-indent-6">
              ユーザーは、自らまたは第三者を利用して次の各号の一にでも該当する行為を行わないことを確約するものとします。
            </li>
            <ul className="font-mPlus2c font-medium list-none list-inside ml-7 tracking-wide lg:tracking-wider">
              <li className="-indent-6">a. 暴力的な要求行為</li>
              <li className="-indent-6">b. 法的な責任を超えた不当な要求行為</li>
              <li className="-indent-6">
                c. 取引に関して、脅迫的な言動をし、または暴力を用いる行為
              </li>
              <li className="-indent-6">
                d.
                風説を流布し、偽計を用いまたは威力を用いて相手方の信用を毀損し、または相手方の業務を妨害する行為
              </li>
              <li className="-indent-6">e. その他前各号に準ずる行為</li>
            </ul>
          </ul>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-bold text-2xl mb-2 tracking-wide lg:tracking-wider">
            第14条（利用規約の変更）
          </p>
          <ul className="font-mPlus2c font-medium list-decimal list-inside ml-7 tracking-wide lg:tracking-wider">
            <li className="-indent-6">
              当社は、当社の判断により、本利用規約をいつでも任意の理由で変更することができるものとします。
            </li>
            <li className="-indent-6">
              変更後の本利用規約は、当社が別途定める場合を除いて、本サービスが提供される端末の画面上で表示された時点より効力を生じるものとします。
            </li>
            <li className="-indent-6">
              ユーザーは、変更後の本利用規約に同意できない場合、本サイトおよび本サービスの利用を終了するものとし、変更後の本利用規約の効力が生じた後に、ユーザーが、本サイトおよび本サービスを継続して利用した場合には、変更後の本利用規約の内容に同意したものとみなされます。
            </li>
          </ul>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-bold text-2xl mb-2 tracking-wide lg:tracking-wider">
            第15条（本利用規約およびその他の利用規約等の有効性）
          </p>
          <ul className="font-mPlus2c font-medium list-decimal list-inside ml-7 tracking-wide lg:tracking-wider">
            <li className="-indent-6">
              利用規約の一部の規定が法令に基づいて無効と判断されても、本利用規約のその他の規定は有効とします。
            </li>
            <li className="-indent-6">
              本利用規約の全部または一部の規定が、あるユーザーとの関係で無効とされ、または取り消された場合でも、本利用規約はその他のユーザーとの関係では有効とします。
            </li>
          </ul>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-bold text-2xl mb-2 tracking-wide lg:tracking-wider">
            第16条（権利義務の譲渡の禁止）
          </p>
          <ul className="font-mPlus2c font-medium list-decimal list-inside ml-7 tracking-wide lg:tracking-wider">
            <li className="-indent-6">
              ユーザーは、本利用規約に別段の定めがある場合を除いて、当社の事前の書面による承諾なしに、本利用規約により生じた権利義務を、第三者に譲渡し、貸与し、または担保に供することはできないものとします。
            </li>
            <li className="-indent-6">
              当社は、本サービスにかかる事業を他社に譲渡した場合には、当該事業譲渡に伴い本利用契約上の地位、本利用規約に基づく権利義務並びにユーザーの情報を当該事業譲渡の譲受人に譲渡することができるものとし、ユーザーは、かかる譲渡につきあらかじめ同意したものとします。なお、本項に定める事業譲渡には、通常の事業譲渡のみならず、会社分割その他事業が移転するあらゆる場合を含むものとします。
            </li>
          </ul>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-bold text-2xl mb-2 tracking-wide lg:tracking-wider">
            第17条（準拠法・裁判管轄）
          </p>
          <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider">
            本規約の解釈にあたっては、日本法を準拠法とします。
            本サービスに関して紛争が生じた場合には、東京地方裁判所を専属的合意管轄とします。
          </p>
        </div>
        <div className="mb-10">
          <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider">
            附則 令和5年4月1日 作成・施行
          </p>
          <p className="font-mPlus2c font-medium tracking-wide lg:tracking-wider">
            本規約の問い合わせ先：株式会社Next Stage（info@next-stage.biz）
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
