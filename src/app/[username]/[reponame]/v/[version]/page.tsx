import Tasks from '@/src/components/Tasks/Tasks/Tasks'
import Label from '@/src/components/ui/Label/Label'
import React from 'react'

function page({ params: { version } }: { params: { version: string } }) {
  return (
    <div className='text-white min-h-[calc(100vh-64px)] pb-10 font-sans flex flex-col items-center gap-3 px-14 '>
      <div className="flex items-center gap-3">
        <h1 className='font-mono text-xl'>Pithub  v{version}</h1>
        <Label text='Upcoming' />
      </div>
      <hr className='border-[#30363D] w-full' />
      <Tasks stage='MileStones'/>
      <Tasks stage='Features'/>
      <Tasks stage='Fixes'/>
      <Tasks stage='Version Contributers'/>
      <Tasks stage=''/>
    </div>
  )
}

export default page
