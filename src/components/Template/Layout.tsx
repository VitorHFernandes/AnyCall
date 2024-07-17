'use client'
import useAppData from "@/data/hook/useAppData"
import Content from "./Content"
import Header from "./Header"
import ForceAuth from '../Auth/ForceAuth'
import SideBar from "./SideBar"
import AppBar from "./AppBar"

interface iLayout {
  title: string,
  subtitle: string,
  appbar?: boolean,
  children?: React.ReactNode,
  openDialog?: () => void
}

const Layout = ({ title, subtitle, appbar, openDialog, children }: iLayout) => {
  const { theme } = useAppData()

  return (
    <ForceAuth>
      <div className={`${theme} flex h-screen w-screen min-h-screen selection:bg-purple-300 selection:text-purple-900`}>
        <SideBar />
        <div className={`flex-1 flex-col w-full p-7 bg-white overflow-auto dark:bg-black`}>
          <Header title={ title } subtitle={ subtitle } />
          <Content>
            { children }
          </Content>
          {appbar && <AppBar openDialog={openDialog} />}
        </div>
      </div>
    </ForceAuth>
  )
}
export default Layout