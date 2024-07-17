type tModalContentProps = {
  children: React.ReactNode;
}

export const ModalContent = ({ children }: tModalContentProps) => {
  return (
    <>
      <div className="flex flex-1 items-center justify-center p-3">
        { children }
      </div>
    </>
  )
}