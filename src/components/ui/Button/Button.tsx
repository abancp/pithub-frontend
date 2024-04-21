import React from 'react'

function Button({text}:{text:string}) {
  return (
    <button type='submit' className='font-light w-24 font-sans h-8 rounded-md bg-[#1c5ca6] hover:bg-[#1c5ca6d7] transition flex justify-center gap-1 items-center' >{text}</button>
  )
}

export default Button
