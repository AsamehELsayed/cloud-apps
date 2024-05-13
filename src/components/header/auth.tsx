import { verifyTokenForPage } from '@/utils/token'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import LogoutButton from './logout'

const Auth = async () => {
  const token = cookies().get("token")?.value as string || ""
  const user = verifyTokenForPage(token)
  return (
    <div className='items-center space-x-5'>
      {user ? 
      <div className="text-white text-xl ">
        <div className='flex space-x-1'>
        <span>

        {user.username}
        </span>
        <LogoutButton></LogoutButton>
        </div>
      </div> : <><Link href="/login" className="px-3 py-2 rounded-md  font-medium text-green-400 border border-green-400  hover:text-white hover:bg-green-400 cursor-pointer">
        Login
      </Link><Link href="/register" className="px-3 py-2 rounded-md border text-green-400 border-green-400   font-medium hover:text-white hover:bg-green-400 cursor-pointer">
          register
        </Link></>}
    </div>
  )
}

export default Auth
