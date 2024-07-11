'use client'
import Title from "./Title"
import UserAvatar from "./UserAvatar"
import useAppData from '@/data/hook/useAppData'
import AlterThemeButton from "./AlterThemeButton"

interface iHeader {
  title: string,
  subtitle: string
}

const Header = ({ title, subtitle }: iHeader) => {
  const { theme, alterTheme } = useAppData()

  return(
    <div className={`flex`}>
      <Title title={title} subtitle={subtitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <AlterThemeButton theme={ theme } alterTheme={ alterTheme } />
        <UserAvatar className="ml-3" />
      </div>
    </div>
  )
}

export default Header