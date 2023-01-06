import Layout from "../components/layout";
import Image from "next/image";
import BreadCrumb from "../components/breadCrumb";

const Pricing = () => {
  const lists = [
    { string: "トップページ", path: "/" },
    { string: "料金プラン", path: "/pricing" },
  ];
  return (
    <Layout>
      <BreadCrumb lists={lists} />
      <div className="flex flex-col items-center my-10 mx-20 min-h-screen">
        <div><Image src="/images/youtube-pricing.png" width={880} height={560} quality={90} aria-label="youtube-pricing"/></div>
        <div><Image src="/images/listing-and-display-pricing.png" width={880} height={560} quality={90} aria-label="listing-and-display-pricing"/></div>
      </div>
    </Layout>
  );
};

export default Pricing;
