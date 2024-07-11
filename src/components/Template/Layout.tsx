'use client'
import useAppData from "@/data/hook/useAppData"
import Content from "./Content"
import Header from "./Header"
import ForceAuth from '../Auth/ForceAuth'
import SideBar from "./SideBar"

interface iLayout {
  title: string,
  subtitle: string,
  children?: React.ReactNode
}

const Layout = ({ title, subtitle, children }: iLayout) => {
  const { theme } = useAppData()

  return (
    <ForceAuth>
      <div className={`${theme} flex h-screen w-screen`}>
        <SideBar />
        <div className={`flex flex-col w-full p-7 bg-white dark:bg-black`}>
          <Header title={ title } subtitle={ subtitle } />
          <Content>
            { children }
          </Content>
        </div>
      </div>
    </ForceAuth>
  )
}
export default Layout