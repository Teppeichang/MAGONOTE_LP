import Layout from "../components/layout";
import { TextField } from "@mui/material";
import BreadCrumb from "../components/breadCrumb";
import { useForm } from "@formspree/react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const Contact = () => {
  const lists = [
    { string: "トップページ", path: "/" },
    { string: "お問い合わせ", path: "/contact" },
  ];

  const router = useRouter();
  const [state, handleSubmit] = useForm("xzbwqlwy");
  if (state.succeeded) {
    Swal.fire({
      title: "送信が完了しました。",
      text: "担当より◯営業日以内にメール、またはお電話にてご連絡させていただきます。",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
    router.push("/");
  }

  return (
    <Layout>
      <BreadCrumb lists={lists} />
      <div className="min-h-screen">
        <div className="mt-10 mx-20">
          <h2 className="text-2xl font-bold">お問い合わせ・デモ予約はこちら</h2>
          <p className="mt-5">
            こちらのフォームに必要情報のご入力をお願いいたします。担当より1営業日以内にメール、またはお電話にてご連絡させていただきます。（既にご利用中のお客様はサポートへのお問い合わせからご連絡ください）
          </p>
        </div>
        <form className="flex flex-col mt-10 mb-20 mx-20" onSubmit={handleSubmit}>
          <p className="font-semibold">
            お名前<span className="text-red-600">(必須)</span>
          </p>
          <TextField required id="outlined-required" label="お名前" name="name" sx={{ my: 1 }} />
          <p className="font-semibold">
            会社名<span className="text-red-600">(必須)</span>
          </p>
          <TextField required id="outlined-required" label="会社名" name="company" sx={{ my: 1 }} />
          <p className="font-semibold">
            メールアドレス<span className="text-red-600">(必須)</span>
          </p>
          <TextField
            required
            id="outlined-required"
            label="メールアドレス"
            name="email"
            sx={{ my: 1 }}
          />
          <p className="font-semibold">
            電話番号<span className="text-red-600">(必須)</span>
          </p>
          <TextField required id="outlined-required" label="電話番号" name="tel" sx={{ my: 1 }} />
          <p className="font-semibold">お問い合わせの詳細</p>
          <p>
            デモや商談をご希望の方は、候補日程を2,3個ご記載ください。担当より日程調整後、ZOOMのミーティングURL（30分〜最大1時間）をメールにてご送付いたします。
          </p>
          <TextField
            id="outlined-multiline-static"
            label="お問い合わせの詳細"
            name="message"
            multiline
            rows={4}
            sx={{ my: 1 }}
          />
          <button
            className="bg-black hover:bg-slate-700 text-white font-medium mt-5 py-2 px-4 rounded w-max"
            type="submit"
            disabled={state.submitting}
          >
            送信する
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
