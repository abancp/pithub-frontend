import React from 'react'
import Progress from '@/src/components/repo/Progress/Progress'
import Button from "../../../components/ui/Button/Button"

type RepoPageProps = {
  params: {
    username: string,
    reponame: string
  }
}

function page({ params: { reponame, username } }: RepoPageProps) {
  return (
    <div className='text-white min-h-[calc(100vh-64px)] flex flex-col gap-3 px-14'>
      <hr className='border-[#30363D]' />
      <div className='max-w-[900px] flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
        <div className=""><h2 className='font-mono text-lg p-0 m-0'> {username}/{reponame}</h2></div> 
          <Button text={"Contribute"} />
        </div>
        <div className='flex gap-2'>
          <div className='max-w-[900px] w-full'>
            <Progress reponame={reponame} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
