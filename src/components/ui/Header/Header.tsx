import React from 'react'

function Header() {
  return (
    <div className='w-100 font-sans h-10 flex justify-between p-8 items-center '>
      <div className="flex w-[50%] justify-start gap-3 text-white">
        <div className='border hover:bg-[rgb(13,17,23)] cursor-pointer border-[#30363D] rounded-md w-7 h-7'>

        </div>
        <div className='font-bold px-2 rounded-md py-[0.13rem] hover:bg-[#0D1117] cursor-pointer'>Dashboard</div>
        <div className='font-bold px-2 rounded-md py-[0.13rem] hover:bg-[#0D1117] cursor-pointer'>Projects</div>
      </div>
      <div className="flex w-[50%] justify-end items-center text-white">
        <div className="w-[2rem] h-[2rem] rounded-full bg-white"></div>
      </div>
    </div>
  )
}

export default Header
