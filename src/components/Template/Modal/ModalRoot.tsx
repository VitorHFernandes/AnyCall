type tModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
}

export const ModalRoot = ({ isOpen, children }: tModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-25 text-gray-700 dark:text-white">
          <div className="flex h-full w-full items-center justify-center">
            <div className="absolute z-50 mx-auto my-0 flex h-80 w-[480px] flex-col overflow-hidden rounded-xl bg-white dark:bg-hoverItemDark shadow-2xl">
              { children }
            </div>
          </div>
        </div>
      )}
    </>
  )
}