type tChildren = { children: React.ReactNode }

const Content = ({ children }: tChildren) => {
  return (
    <div className={`flex flex-col mt-7 dark:text-white`}>
      { children }
    </div>
  )
}

export default Content