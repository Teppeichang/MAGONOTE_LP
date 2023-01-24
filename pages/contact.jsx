import Layout from "../components/layout";
import { TextField } from "@mui/material";
import BreadCrumb from "../components/breadCrumb";
import { useForm } from "@formspree/react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRef } from "react";

const Contact = () => {
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

  const lists = [
    { string: "トップページ", path: "/" },
    { string: "お問い合わせ", path: "/contact" },
  ];

  return (
    <Layout>
      <BreadCrumb lists={lists} />
      <div className="min-h-screen my-20 mx-5">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSePg4vBgw_AWsStvyQcUfJUk6rhUTRf9DnS5paIAPRQMwuYNw/viewform?embedded=true"
          height="1104"
          className="w-full my-10"
        >
          読み込んでいます…
        </iframe>
      </div>
    </Layout>
  );
};

export default Contact;
