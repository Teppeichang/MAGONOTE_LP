import Layout from "../components/layout"
import matter from "gray-matter"
import Link from "next/link"
import BreadCrumb from "../components/breadCrumb"

const Portfolio = (props) => {
  const lists = [{string: "トップページ", path: "/"}, {string: "レポートギャラリー", path: "/portfolio"}]
  return (
    <Layout>
      <BreadCrumb lists={lists}/>
      <div className="mt-10 mx-20">
        <h2 className="text-2xl font-bold">レポートテンプレート</h2>
        <p>アナリティクス、SEO、ウェブ広告、ソーシャルメディアなどのレポートテンプレートを豊富にご用意しています。テンプレートをそのまま利用することも、カスタマイズして利用することも両方可能です。</p>
      </div>
      <div className="flex justify-between mt-10 mx-20">
        {props.portfolios.map((portfolio, index) =>
          <div key={index} className="m-2">
            <h2>{portfolio.frontmatter.title}</h2>
            <Link href={`/portfolio/${portfolio.slug}`}>Read More</Link>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Portfolio;

export async function getStaticProps () {
  const portfolios = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        slug: slug
      }
    })
    return data
  })(require.context('../data', true, /\.md$/))

  return {
    props: {
      portfolios: portfolios
    },
  }
}