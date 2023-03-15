import Layout from "../components/layout";

const Trial = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScKREohNiPNDe_VlnHQrMRNKOLjgN8a4WugwKB9yTeJvKcdbw/viewform?embedded=true"
          height="1200"
          width="1200"
          className="mt-40 mb-10 mx-6 lg:mt-60"
        >
          読み込んでいます…
        </iframe>
      </div>
    </Layout>
  );
};

export default Trial;
