import Layout from "../components/layout";
import BreadCrumb from "../components/breadCrumb";

const Contact = () => {
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
