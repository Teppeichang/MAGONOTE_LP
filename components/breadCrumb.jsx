import Link from "next/link"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const BreadCrumb = ({lists}) => {
  if (!lists) {
    return ('')
  }

  return (
    <div className="flex flex-wrap mt-32 mx-6 lg:mt-48 lg:mx-20">
      {lists.map(({string, path}, index) => (
        <li className="flex text-sm tracking-wide lg:tracking-wider" key={index}>
          {lists.length - 1 !== index
          ?
          <>
            <Link href={path}><a className="underline">{string}</a></Link>
            <ChevronRightIcon aria-hidden="true" />
          </>
          :
          <span>{string}</span>
          }
        </li>
      ))}
    </div>
  )
}

export default BreadCrumb
