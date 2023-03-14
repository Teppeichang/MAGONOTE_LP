import Link from "next/link"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const BreadCrumb = ({lists}) => {
  if (!lists) {
    return ('')
  }

  return (
    <div className="flex mt-32 ml-9 lg:mt-48 lg:ml-20">
      {lists.map(({string, path}, index) => (
        <li className="flex text-sm" key={index}>
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
