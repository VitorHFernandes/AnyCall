
interface iTitle {
  title: string,
  subtitle: string
}

const Title = ({ title, subtitle }: iTitle) => {
  return (
    <div>
      <h1 className={`font-black text-3xl text-black dark:text-white`}>
        { title }
      </h1>
      <h2 className={`font-light text-sm text-black dark:text-white`}>
        { subtitle }
      </h2>
    </div>
  )
}

export default Title