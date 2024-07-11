import useAuth from "@/data/hook/useAuth"
import { IconReports, IconExit, IconDevices } from "../Icons/Icons"
import Logo from "./Logo"
import MenuItem from "./MenuItem"
import Link from "next/link"

const SideBar = () => {
  const { logOut } = useAuth()
  return (
    <aside className={`flex flex-col bg-lightItem text-black dark:bg-darkItem dark:text-white`}>
      <div className={`flex flex-col items-center justify-center h-20 w-20 cursor-pointer `}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/relatorios" text="Relatórios" icon={ IconReports } />
        <MenuItem url="/devices" text="sessions" icon={ IconDevices } />
      </ul>
      <ul>
        <MenuItem 
          onClick={logOut}
          text="Exit" icon={ IconExit }
          className={`
            text-redLightItem dark:errorDarkItem
            hover:bg-errorLightItem hover:text-white
            dark:hover:text-white
          `} />
      </ul>
    </aside>
  )
}

export default SideBar