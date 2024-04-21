import React from 'react'

function Label({text}:{text:string}) {
  return (
    <div className='w-fit h-fit bg-[#0D1117] px-[5px] border rounded-3xl border-[#30363D]'>
      <p className='text-sm m-0 p-0 font-sans font-extralight'>{text}</p>
    </div>
  )
}

export default Label
