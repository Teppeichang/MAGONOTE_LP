import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <div className="bg-slate-50 flex flex-col">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
