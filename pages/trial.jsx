import { useState } from "react";
import { useRef } from "react";
import Layout from "../components/layout";
import Image from "next/image";
import { useForm } from "@formspree/react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { TextField } from "@mui/material";

const Trial = () => {
  const emailValidatePattern =
    "^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$";

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

  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Layout>
      <div className="min-h-screen mt-20 mb-10 mx-2 lg:mt-40 lg:mx-5">
        <div className="flex flex-col justify-center items-center bg-yellow-400 p-2 lg:flex-row lg:mx-40">
          <div className="bg-white py-4 px-1 lg:py-12 lg:px-28">
            <p>MAGONOTE</p>
            <div>
              <Image
                src="/images/sincerely-media-xJlc_Ke3oNI-unsplash.jpg"
                width={480}
                height={400}
                quality={90}
              />
            </div>
            <ul className="list-disc list-inside ml-7">
              <li className="-indent-6">クレジットカード登録不要</li>
              <li className="-indent-6">Googleアナリティクスの無料テンプレート（期間制限なし）</li>
              <li className="-indent-6">ウェブ広告・SNSレポートを14日間無料でお試し</li>
              <li className="-indent-6">無料のZoomサポート</li>
            </ul>
          </div>
          <div className="px-10">
            <div className="mt-20">
              <h2 className="text-xl text-center font-bold">無料トライアルを始めよう</h2>
            </div>
            <form className="m-10" onSubmit={handleSubmit}>
              <div className="flex flex-col items-center">
                <TextField
                  label="お名前"
                  name="name"
                  inputRef={nameRef}
                  value={name}
                  error={nameError}
                  helperText={nameError && nameRef?.current?.validationMessage}
                  inputProps={{ required: true }}
                  onChange={(event) => setName(event.target.value)}
                  sx={{ m: 1, input: {background: "white"} }}
                />
                <TextField
                  label="会社名"
                  name="company"
                  inputRef={companyRef}
                  value={company}
                  error={companyError}
                  helperText={companyError && companyRef?.current?.validationMessage}
                  inputProps={{ required: true }}
                  onChange={(event) => setCompany(event.target.value)}
                  sx={{ m: 1, input: {background: "white"} }}
                />
                <TextField
                  label="メールアドレス"
                  name="email"
                  inputRef={emailRef}
                  value={email}
                  error={emailError}
                  helperText={emailError && emailRef?.current?.validationMessage}
                  inputProps={{ required: true, pattern: emailValidatePattern }}
                  onChange={(event) => setEmail(event.target.value)}
                  sx={{ m: 1, input: {background: "white"} }}
                />
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
                  sx={{ m: 1, input: {background: "white"} }}
                />
                <div className="flex flex-row m-2">
                  <p>利用規約に同意する*</p>
                  <input
                    aria-label="利用規約に同意する"
                    required
                    type="checkbox"
                    className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 ml-2"
                    name="checkbox"
                  />
                </div>
                <button
                  aria-label="今すぐ無料で始める"
                  className="bg-black hover:bg-slate-700 text-white font-medium rounded mt-2 px-7 py-2"
                  type="submit"
                  disabled={state.submitting}
                  onClick={() => formValidation()}
                >
                  今すぐ無料で始める
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Trial;
