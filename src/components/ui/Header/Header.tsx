import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='w-100 font-sans h-10 flex justify-between p-8 items-center '>
      <div className="flex w-[50%] justify-start gap-3 text-white">
        <Link href={"/"}><div className='border hover:bg-[rgb(13,17,23)] cursor-pointer border-[#30363D] rounded-md w-7 h-7'></div></Link>
        <div className='font-bold px-2 rounded-md py-[0.13rem] hover:bg-[#0D1117] cursor-pointer'>Dashboard</div>
        <div className='font-bold px-2 rounded-md py-[0.13rem] hover:bg-[#0D1117] cursor-pointer'>Projects</div>
      </div>
      <div className="flex w-[50%] justify-end gap-3 items-center text-white">
        <Link href={'/new'} ><svg  xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="text-[#1c5ca6] cursor-pointer bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg></Link>
        <div className="w-[1.75rem] h-[1.75rem] rounded-full bg-white"></div>
      </div>
    </div>
  )
}

export default Header
