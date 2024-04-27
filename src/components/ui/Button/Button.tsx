import React from 'react'

function Button({text}:{text:string}) {
  return (
    <button type='submit' className='font-light px-3 font-sans h-6 rounded-md bg-[#1c5ca6] hover:bg-[#1c5ca6d7] transition flex justify-center gap-1 items-center' >{text}</button>
  )
}

export default Button
