import React from 'react'
import Progress from '@/src/components/repo/Progress/Progress'
import Button from "../../../components/ui/Button/Button"
import Label from '@/src/components/ui/Label/Label'
import Tasks from '@/src/components/Tasks/Tasks/Tasks'
import axios, { AxiosResponse } from 'axios'
import { cookies } from "next/headers"
import { SERVER_URL } from '@/src/config/collections'
import Link from 'next/link'

type RepoPageProps = {
  params: {
    username: string,
    reponame: string
  }
}

async function page({ params: { reponame, username } }: RepoPageProps) {

  const { data }: AxiosResponse = await axios.get(SERVER_URL+"/repo/" + username + "/" + reponame, {
    withCredentials: true,
    headers: {
      Cookie: `token=${cookies().get("token")?.value}`,
    }
  })

  const repo = data
                                                                                                     

  return (
    <div className='text-white min-h-[calc(100vh-64px)] pb-10  flex flex-col items-center gap-3 px-14'>
      <hr className='border-[#30363D]' />
      <div className='flex gap-6 font-sans '>
        <div className='w-[900px] flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <div className="flex gap-3 items-center">
              <h2 className='font-mono font-bold text-xl p-0 m-0'> {username}/{reponame}</h2>
              <Label text='Public' />
            </div>
            <Link href={"https://"+repo.codeURL} ><Button text={"Contribute"} /></Link>
          </div>
          <div className='flex gap-2'>
            <div className='max-w-[900px] w-full'>
              <Progress reponame={reponame} />
            </div>
          </div>
          <Tasks stage='Active' initialTasks={["repo page", "responsible design"]} />
          <Tasks stage='Working' initialTasks={["home page feed"]} />
          <Tasks stage='Closed' initialTasks={["Progress bar", "Dark color theme"]} />
        </div>
        <div className="w-[300px]">
          <div className='h-7 mb-4 flex items-center justify-between'>
            <h3 className='font-bold'>About</h3>
            <h3>Settings</h3>
          </div>
          <hr className='border-[#30363D] mb-1' />
          <h3 className="font-mono font-thin text-center">{reponame}</h3>
          <h3 className="font-sans text-sm font-light text-slate-300 text-center">{repo.description}</h3>
          <a target="_blank" rel="noopener noreferrer" href={"http://"+repo.liveURL} className='hover:underline text-blue-700'> {repo.liveURL}</a>
          <div className='flex items-center mt-3 gap-1 text-sm'><div className="w-3 h-3 bg-[#fcff30] rounded-sm "></div>HTML</div>
          <div className='flex items-center gap-1 text-sm'><div className="w-3 h-3 bg-[#519f23] rounded-sm"></div>CSS</div>
          <div className='flex items-center gap-1 text-sm'><div className="w-3 h-3 bg-[#9f239d] rounded-sm"></div>JavaScript</div>
        </div>
      </div>
    </div>
  )
}

export default page
