import Layout from "../components/layout";

const Trial = () => {
  return (
    <Layout>
      <div className="min-h-screen my-20 mx-5">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScKREohNiPNDe_VlnHQrMRNKOLjgN8a4WugwKB9yTeJvKcdbw/viewform?embedded=true"
          height="1104"
          className="w-full"
        >
          読み込んでいます…
        </iframe>
      </div>
    </Layout>
  );
};

export default Trial;
