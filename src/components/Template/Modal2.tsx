import useAppData from "@/data/hook/useAppData";
import { IconClose } from "../Icons/Icons"

type tModal = {
  isOpen: boolean;
  children: React.ReactNode;
  hasActions?: boolean;
  onClose?: () => void;
}

export const Modal = ({ isOpen, children, hasActions = true, onClose }: tModal ) => {
  const { theme } = useAppData()
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-25 text-gray-700 dark:text-white">
          <div className="flex h-full w-full items-center justify-center">
            <div className="absolute z-50 mx-auto my-0 flex h-80 w-[480px] flex-col overflow-hidden rounded-xl bg-white dark:bg-hoverItemDark shadow-2xl">
              <header className="bg-slate-200 dark:bg-darkItem">
                <div className="flex items-center justify-between p-3">
                  <p className="text-lg font-bold">Modal</p>
                  <button onClick={onClose}>
                    { theme === 'dark' ? IconClose(24, '#FFFFFF') : IconClose(24, '#1e1f1f') }
                  </button>
                </div>
              </header>
              <div className="flex flex-1 items-center justify-center p-3">
                { children }
              </div>
              { hasActions && (
                <footer className="flex w-full justify-end gap-2 p-3">
                  <button 
                    className={`
                        rounded-lg px-4 py-1 text-white bg-lightItem
                      hover:bg-primaryLight dark:bg-darkItem font-semibold
                      dark:hover:bg-purpleDark dark:hover:text-darkItem
                    `}>Salvar</button>
                </footer>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}