import { twMerge } from "tailwind-merge";

type tModalHeaderProps = {
  children: React.ReactNode;
  className: string;
}

export const ModalHeader = ({ children, className }: tModalHeaderProps) => {
  return (
    <>
       <header className="bg-slate-200 dark:bg-darkItem">
        <div className={twMerge("flex items-center justify-between p-3", className)}>
          { children }
        </div>
      </header>
    </>
  )
}