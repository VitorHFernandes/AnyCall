type tModalActionsProps = {
  children: React.ReactNode
}

export const ModalActions = ({ children }: tModalActionsProps) => {
  return (
    <>
      <footer className="flex w-full justify-end gap-2 p-3">
        {children}
      </footer>
    </>
  )
}