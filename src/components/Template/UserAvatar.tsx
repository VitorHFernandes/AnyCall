'use client'

import useAppData from "@/data/hook/useAppData"
import useAuth from "@/data/hook/useAuth"
import Image from "next/image"
import Link from "next/link"

type tClassName = { className: string }

const UserAvatar = ({ className }: tClassName) => {
  const { theme } = useAppData()
  const { user } = useAuth()

  return (
    <Link href="/profile" className="relative h-10 w-10">
    {user?.imgUrl ? (
          <Image
            src={user?.imgUrl}
            alt="User avatar"
            layout="fill"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Hello to you too!"
            className={`rounded-full cursor-pointer object-cover ${className}`} 
          />
    ) : (
      <Image
          src={`/avatar-${theme}.png`}
          alt="User avatar"
          layout="fill"
          className={`rounded-full cursor-pointer object-cover ${className}`}
        />
    )}
  </Link>
)
}

export default UserAvatar