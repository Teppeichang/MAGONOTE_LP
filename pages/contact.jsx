import Layout from "../components/layout";
import { TextField } from "@mui/material";
import BreadCrumb from "../components/breadCrumb";
import { useForm } from "@formspree/react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";

const Contact = () => {
  const emailValidatePattern = "^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$";

  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const emailRef = useRef(null);
  const telNumberRef = useRef(null);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [telNumber, setTelNumber] = useState("");
  const [nameError, setNameError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [telNumberError, setTelNumberError] = useState(false);

  const formValidation = () => {
    let valid = true;

    const isNameRefExists = nameRef?.current;
    if (isNameRefExists) {
      const isNameValid = isNameRefExists.validity.valid;
      setNameError(!isNameValid);
      valid &&= isNameValid;
    }

    const isCompanyRefExists = companyRef?.current;
    if (isCompanyRefExists) {
      const isCompanyValid = isCompanyRefExists.validity.valid;
      setCompanyError(!isCompanyValid);
      valid &&= isCompanyValid;
    }

    const isEmailRefExists = emailRef?.current;
    if (isEmailRefExists) {
      const isEmailValid = isEmailRefExists.validity.valid;
      setEmailError(!isEmailValid);
      valid &&= isEmailValid;
    }

    const isTelNumberRefExists = telNumberRef?.current;
    if (isTelNumberRefExists) {
      const isTelNumberValid = isTelNumberRefExists.validity.valid;
      setTelNumberError(!isTelNumberValid);
      valid &&= isTelNumberValid;
    }
  };

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

  console.log(state)

  const lists = [
    { string: "トップページ", path: "/" },
    { string: "お問い合わせ", path: "/contact" },
  ];

  return (
    <Layout>
      <BreadCrumb lists={lists} />
      <div className="min-h-screen px-10 lg:px-20">
        <div className="mt-10">
          <h2 className="text-2xl font-bold">お問い合わせ・デモ予約はこちら</h2>
          <p className="mt-5">
            こちらのフォームに必要情報のご入力をお願いいたします。担当より1営業日以内にメール、またはお電話にてご連絡させていただきます。（既にご利用中のお客様はサポートへのお問い合わせからご連絡ください）
          </p>
        </div>
        <form className="flex flex-col mt-10 mb-20" onSubmit={handleSubmit}>
          <p className="font-semibold">
            お名前<span className="text-red-600">(必須)</span>
          </p>
          <TextField
            label="お名前"
            name="name"
            inputRef={nameRef}
            value={name}
            error={nameError}
            helperText={nameError && nameRef?.current?.validationMessage}
            inputProps={{ required: true }}
            onChange={(event) => setName(event.target.value)}
            sx={{ my: 1 }}
          />
          <p className="font-semibold">
            会社名<span className="text-red-600">(必須)</span>
          </p>
          <TextField
            label="会社名"
            name="company"
            inputRef={companyRef}
            value={company}
            error={companyError}
            helperText={companyError && companyRef?.current?.validationMessage}
            inputProps={{ required: true }}
            onChange={(event) => setCompany(event.target.value)}
            sx={{ my: 1 }}
          />
          <p className="font-semibold">
            メールアドレス<span className="text-red-600">(必須)</span>
          </p>
          <TextField
            label="メールアドレス"
            name="email"
            inputRef={emailRef}
            value={email}
            error={emailError}
            helperText={emailError && emailRef?.current?.validationMessage}
            inputProps={{ required: true, pattern: emailValidatePattern }}
            onChange={(event) => setEmail(event.target.value)}
            sx={{ my: 1 }}
          />
          <p className="font-semibold">
            電話番号<span className="text-red-600">(必須)</span>
          </p>
          <TextField
            label="電話番号"
            type="tel"
            name="tel"
            inputRef={telNumberRef}
            value={telNumber}
            error={telNumberError}
            helperText={telNumberError && telNumberRef?.current?.validationMessage}
            inputProps={{ required: true }}
            onChange={(event) => setTelNumber(event.target.value)}
            sx={{ my: 1 }}
          />
          <p className="font-semibold">お問い合わせの詳細</p>
          <p>
            デモや商談をご希望の方は、候補日程を2,3個ご記載ください。担当より日程調整後、ZOOMのミーティングURL（30分〜最大1時間）をメールにてご送付いたします。
          </p>
          <TextField
            label="お問い合わせの詳細"
            name="message"
            multiline
            rows={4}
            sx={{ my: 1 }}
          />
          <button
            aria-label="送信する"
            className="bg-black hover:bg-slate-700 text-white font-medium mt-5 py-2 px-4 rounded w-max"
            type="submit"
            disabled={state.submitting}
            onClick={() => formValidation()}
          >
            送信する
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
