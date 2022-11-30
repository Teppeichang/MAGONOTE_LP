import { useState } from "react";
import Layout from "../components/layout";
import Image from "next/image";
import BreadCrumb from "../components/breadCrumb";
import { useForm } from "@formspree/react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";


const Trial = () => {
  const lists = [
    { string: "トップページ", path: "/" },
    { string: "無料で始める", path: "/trial" },
  ];

  const router = useRouter();
  const [state, handleSubmit] = useForm("xzbwqlwy");
  if (state.succeeded) {
    Swal.fire({
      title: "送信が完了しました。",
      text: "担当より◯営業日以内にメール、またはお電話にてご連絡させていただきます。",
      icon: "success",
      showConfirmButton: false,
      timer: 1500
    })
    router.push("/")
  }

  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Layout>
      <BreadCrumb lists={lists} />
      <div className="flex flex-row justify-center items-center bg-yellow-400 m-20 p-10">
        <div className="bg-white py-10 px-10">
          <p>MAGONOTE</p>
          <div>
            <Image
              src="/images/sincerely-media-xJlc_Ke3oNI-unsplash.jpg"
              width={480}
              height={400}
              quality={90}
            />
          </div>
          <ul className="list-disc list-inside">
            <li>クレジットカード登録不要</li>
            <li>Googleアナリティクスの無料テンプレート（期間制限なし）</li>
            <li>ウェブ広告・SNSレポートを14日間無料でお試し</li>
            <li>無料のZoomサポート</li>
          </ul>
        </div>
        <div className="px-20">
          <div className="mt-40 mx-10">
            <h2>無料トライアルを始めよう</h2>
          </div>
          <form className="m-10" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block p-2.5 m-2"
                placeholder="お名前"
                name="name"
                required
              />
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block p-2.5 m-2"
                placeholder="会社名"
                name="company"
                required
              />
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block p-2.5 m-2"
                placeholder="メールアドレス"
                name="email"
                required
              />
              <input
                type="tel"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block p-2.5 m-2"
                placeholder="電話番号"
                name="tel"
                required
              />
            </div>
            <div className="flex flex-row items-center">
              <p>利用規約に同意する*</p>
              <input
                required
                type="checkbox"
                className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300"
                name="checkbox"
              />
            </div>
            <button
              className="bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 rounded"
              type="submit"
              disabled={state.submitting}
            >
              今すぐ無料で始める
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Trial;
