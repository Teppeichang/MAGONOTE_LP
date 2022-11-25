import Header from "./header";
import Footer from "./footer";
import BreadCrumb from "../components/breadCrumb"

const Layout = (props) => {
  return (
    <>
      <Header />
      <BreadCrumb />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
