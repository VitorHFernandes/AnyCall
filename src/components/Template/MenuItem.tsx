import Link from "next/link"

interface iMenuItem {
  url?: string,
  text: string,
  icon: React.ReactNode,
  className?: string,
  onClick?: (event: any) => void
}

const MenuItem = ({ url, text, icon, className, onClick}: iMenuItem) => {
  const renderLink = () => {
    return (
      <div 
        className={`
          flex flex-col justify-center items-center
          text-white h-20 w-20
          dark:text-white ${className}
        `}>
          { icon }
          <span className={`text-xs font-light`}></span>
      </div>
    )
  }

  return(
    <li onClick={ onClick } className={`ease-in duration-150 hover:shadow-2xl dark:hover:bg-hoverItemDark cursor-pointer`}>
      {
        url ? (
          <Link href={ url } className={`flex flex-col justify-center items-center h-20 w-20`}>
            { renderLink() }
          </Link>
        ) : (
          renderLink()
        )
      }
    </li>
  )
}

export default MenuItem