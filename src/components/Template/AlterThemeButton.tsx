import { IconSun, IconMoon } from '@/components/Icons/Icons'

interface iAlterThemeButton {
  theme: string | undefined,
  alterTheme?: () => void
}

const AlterThemeButton = ({ theme, alterTheme }: iAlterThemeButton) => {
  return theme === 'dark' ? (
    <div 
      onClick={ alterTheme }
      className={`
        hidden sm:flex items-center cursor-pointer
        bg-toggleLight shadow-inner
        w-14 lg:w-18 h-8 p-1 rounded-full
      `}
    >
      <div className={`flex items-center justify-center rounded-full bg-white w-6 h-6`}>
        { IconSun }
      </div>
    </div>
  ) : (
    <div 
      onClick={ alterTheme }
      className={`
        hidden sm:flex items-center justify-end cursor-pointer
        bg-toggleDark
        w-14 lg:w-18 h-8 p-1 rounded-full
      `}
    >
      <div className={`hidden lg:flex items-center mr-2 text-white`}></div>
      <div className={`flex items-center justify-center rounded-full bg-black w-6 h-6 text-white`}>
        { IconMoon }
      </div>
    </div>
  )
}

export default AlterThemeButton