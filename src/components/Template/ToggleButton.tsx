import { IconCheck, IconClose } from '@/components/Icons/Icons'

interface iPropsToggleButton {
  value: boolean | undefined,
  ToggleButton?: () => void
} 

const ToggleButton = ({ value, ToggleButton }: iPropsToggleButton) => {
  return value === false ? (
    <div 
      onClick={ ToggleButton }
      className={`
        hidden sm:flex items-center cursor-pointer
        bg-toggleLight shadow-inner
        w-14 lg:w-18 h-8 p-1 rounded-full
      `}
    >
      <div className={`flex items-center justify-center rounded-full bg-white w-6 h-6`}>
        { IconClose(24, "#00000") }
      </div>
    </div>
  ) : (
    <div 
      onClick={ ToggleButton }
      className={`
        hidden sm:flex items-center justify-end cursor-pointer
        bg-lightItem
        dark:bg-purpleDark dark:focus:border-2 dark:border-
        w-14 lg:w-18 h-8 p-1 rounded-full
      `}
    >
      <div className={`hidden lg:flex items-center mr-2 text-white`}></div>
      <div className={`flex items-center justify-center rounded-full bg-black w-6 h-6 text-white`}>
        { IconCheck(24, "#FFFFFF") } 
      </div>
    </div>
  )
}

export default ToggleButton