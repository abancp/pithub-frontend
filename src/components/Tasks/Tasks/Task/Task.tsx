import React from 'react'

function Task({name}:{name:string}) {
  return (
    <div draggable className='rounded-md h-fit w-full bg-[#161B22] border border-[#30363D]'>
      <h4 className='m-[1px] font-light  text-sm'>{name}</h4>
    </div>
  )
}

export default Task
