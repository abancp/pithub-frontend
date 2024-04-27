import React, { ReactNode } from 'react'

function LoginSignupButton({children}:{children:ReactNode}) {
  return (
    <div>
    <button className='font-bold px-2 rounded-md py-[0.13rem] hover:bg-[#0D1117] cursor-pointer' >{children}</button>
    </div>
  )
}

export default LoginSignupButton
