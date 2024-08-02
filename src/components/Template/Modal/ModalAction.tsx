import { twMerge } from 'tailwind-merge'

const Colors = {
  dark: `rounded-lg px-4 py-1 dark:bg-darkItem font-semibold dark:hover:bg-purpleDark dark:hover:text-darkItem`,
  light: `rounded-lg px-4 py-1 text-white bg-lightItem hover:bg-primaryLight`,
  none: 'rounded-lg bg-transparent hover:bg-purple-300 dark:hover:bg-purpleDark'
}

type tModalActionProps = {
  color?: 'dark' | 'light' | 'none'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const ModalAction = ({
  id,
  children,
  className,
  color = 'none',
  onClick,
  ...rest
}: tModalActionProps) => {
  const colorButton = Colors[color];
  return (
    <>
      <button
        { ...rest }
        type="submit"
        form={id}
        onClick={onClick}
        className={colorButton}
      >
        {children}
      </button>
    </>
  )
}