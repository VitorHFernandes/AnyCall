import useAuth from "@/data/hook/useAuth"
import { IconReports, IconExit, IconChat, IconSettings, IconHome } from "../Icons/Icons"
import Logo from "./Logo"
import MenuItem from "./MenuItem"
import Link from "next/link"

const SideBar = () => {
  const { logOut } = useAuth()
  return (
    <aside className={`flex flex-col min-h-screen bg-lightItem text-black dark:bg-darkItem dark:text-white`}>
      <div className={`flex flex-col items-center justify-center h-20 w-20 cursor-pointer`}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" text="Home" icon={IconHome()} />
        <MenuItem url="/dashboard" text="Dashboard" icon={IconReports()} />
        <MenuItem url="/chat" text="Chat" icon={IconChat()} />
        <MenuItem url="/settings" text="Configurações" icon={IconSettings()} />
      </ul>
      <ul>
        <MenuItem
          onClick={logOut}
          text="Exit" icon={IconExit()}
          className={`
            text-redLightItem dark:text-errorDarkItem
            hover:bg-errorLightItem hover:text-white
            dark:hover:text-white
          `}
        />
      </ul>
    </aside>
  )
}

export default SideBar