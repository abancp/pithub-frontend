import React from 'react'
import ProgressBar from '../../ui/ProgressBar/ProgressBar'

function Progress({ reponame }: { reponame: string }) {
  return (
    <div className='font-mono border-[#30363D] rounded-md p-3 min-h-36 w-full border bg-[#0D1117]'>
      <h3 className='text-center  font-sans mb-3 text-lg'>{reponame}'s progress</h3>
      <div className='flex items-center justify-between gap-2  w-100'>
        <h3>v0.0.0</h3>
        <ProgressBar progress="40" width='[100%]'/>
        <h3>v0.1.0</h3>
      </div>
      <div className="flex items-center gap-5 px-20">
        <div className='flex items-center gap-1'><div className="w-3 h-3 bg-[#66eb1f] mb-1 rounded-sm"></div>Tested</div>
        <div className='flex items-center gap-1'><div className="w-3 h-3 bg-[#eb771f] mb-1 rounded-sm"></div>Completed</div>
        <div className='flex items-center gap-1'><div className="w-3 h-3 bg-[#1F6FEB] mb-1 rounded-sm"></div>Working</div>
      </div>
    </div>
  )
}

export default Progress
