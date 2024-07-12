import Link from "next/link"

interface iBox {
  url?: string,
  text: string,
  icon: any,
  className?: string,
  onClick?: (event: any) => void
}

const Box = ({ url, text, icon, className, onClick}: iBox) => {

  const renderLink = () => {
    return (
      <div 
        className={`
          flex flex-col justify-center items-center
          text-black h-64 w-64
          dark:text-white ${className}
        `}>
          { icon }
          <span className={`text-sm font-light mt-7`}>{ text }</span>
      </div>
    )
  }

  return(
    <div onClick={ onClick } className={`ease-in duration-150 shadow-md hover:shadow-2xl dark:bg-hoverItemDark cursor-pointer`}>
      {
        url ? (
          <Link href={ url } className={`flex flex-col justify-center items-center`}>
            { renderLink() }
          </Link>
        ) : (
          renderLink()
        )
      }
    </div>
  )
}

export default Box