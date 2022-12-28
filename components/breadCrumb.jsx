import Link from "next/link"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const BreadCrumb = ({lists}) => {
  if (!lists) {
    return ('')
  }

  return (
    <div className="mt-24 mx-10 lg:mx-20 flex flex-row">
      {lists.map(({string, path}, index) => (
        <li className="flex items-center text-sm" key={index}>
          {lists.length - 1 !== index
          ?
          <>
            <Link href={path}>{string}</Link>
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
