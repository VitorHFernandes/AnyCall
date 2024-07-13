import Link from "next/link"

interface iBox {
  url?: string,
  title?: string,
  text: string,
  icon?: any,
  classDiv?: string,
  className?: string,
  onClick?: (event: any) => void
}

const Box = ({ url, text, icon, className, title, onClick, classDiv = 'shadow-md hover:shadow-2xl cursor-pointer'}: iBox) => {

  const renderLink = () => {
    return (
      <div 
        className={`
          flex flex-col justify-center items-center
          text-black h-64 w-64
          dark:text-white ${className}
        `}>
          { icon }
          {title ? (
            <h1 className={`${className} 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-3xl`}>
              {title}
            </h1>
          ) : false}
          <span className={`2xl:text-md sm:text-sm ${className} font-light mt-5`}>{ text }</span>
      </div>
    )
  }

  return(
    <div onClick={ onClick } className={`ease-in duration-150 flex flex-col justify-center items-center dark:bg-hoverItemDark ${classDiv}`}>
      {
        url ? (
          <Link href={ url }>
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