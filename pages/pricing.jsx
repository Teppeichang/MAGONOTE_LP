import Layout from "../components/layout"
import BreadCrumb from "../components/breadCrumb"

const Pricing = () => {
  const lists = [{string: "トップページ", path: "/"}, {string: "料金プラン", path: "/pricing"}]
  return (
    <Layout>
      <BreadCrumb lists={lists} />
      <div>
        <h1>This is Pricing(料金プラン) Page</h1>
      </div>
    </Layout>
  )
}

export default Pricing