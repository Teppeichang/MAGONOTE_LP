import Layout from "../../components/layout"
import Link from "next/link"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import BreadCrumb from "../components/breadCrumb"

const SinglePortfolio = (props) => {
  console.log(props)
  return (
    <Layout>
      <BreadCrumb />
      <div className="m-40">
        <h2 className="font-bold text-2xl lg:text-4xl pb-10">{props.frontmatter.title}</h2>
        <button class="bg-black hover:bg-slate-700 text-white font-medium py-2 px-4 mb-10 rounded">
          <Link href={"/trial"}>今すぐ無料で始める</Link>
        </button>
        <ReactMarkdown className="prose">{props.markdownBody}</ReactMarkdown>
      </div>
    </Layout>
  )
}

export default SinglePortfolio

export async function getStaticPaths () {
  const portfolioSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      return slug
    })
    return data
  })(require.context('../../data', true, /\.md$/))

  const paths = portfolioSlugs.map((portfolioSlug) => `/portfolio/${portfolioSlug}`)
return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps (context) {
  const {slug} = context.params
  const data = await import(`../../data/${slug}.md`)
  const singleDocument = matter(data.default)
  return {
    props: {
      frontmatter: singleDocument.data,
      markdownBody: singleDocument.content,
    }
  }
}