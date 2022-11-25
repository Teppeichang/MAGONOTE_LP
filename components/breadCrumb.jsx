import Link from "next/link"
import { useRouter } from "next/router"

const BreadCrumb = () => {
  const router = useRouter();
  const paths = decodeURI(router.asPath).substring(1).split("/")
  const routes = [""];
  for (let i = 0; i < paths.length; i++) {
    routes.push(`${routes[i]}/${paths[i]}`)
  }
  return (
    <div className="m-40">
      <Link href={"/"}>TOP</Link>
      {paths.map((path, index) => (
        <>
          {">"}
          <Link href={routes[index + 1]} key={index}>{path}</Link>
        </>
      ))}
    </div>
  )
}

export default BreadCrumb
