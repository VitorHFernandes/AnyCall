import useAppData from '@/data/hook/useAppData'
import Image from 'next/image'

const Logo = () => {
  const { theme } = useAppData()
  
  return(
    <Image src={`/anycall-${theme}.png`} alt="AnyCall logo" width={100} height={100} />
  )
}

export default Logo