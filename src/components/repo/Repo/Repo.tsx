import React from 'react'
import Progress from '../Progress/Progress'

function Repo() {
  return (
    <div className='rounded-md text-sm p-3 pb-0 font-light w-[500px] bg-[#0D1117] h-50 border-[#30363D] border'>
        <h3 className='font-mono text-blue-600 text-base mb-3'>abancp/Cartopedia</h3>
        <h2 className='text-sm font-sans font-light '>best cloud platform for pitbest cloud  controll tool </h2>
      <Progress bgAndBorder={false} reponame='Pituhb'/>
    </div>
  )
}

export default Repo
