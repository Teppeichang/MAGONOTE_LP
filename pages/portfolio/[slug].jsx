import Layout from "../../components/layout"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"

const SinglePortfolio = (props) => {
  console.log(props)
  return (
    <Layout>
      <div className="m-40">
        <h2>{props.frontmatter.title}</h2>
        <ReactMarkdown>{props.markdownBody}</ReactMarkdown>
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