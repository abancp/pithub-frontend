import React from 'react'
import Input from '../../components/ui/Input/Input'
import Button from '@/src/components/ui/Button/Button'

 function CreateRepo() {
  async function action(formData:FormData){
    'use server'
    console.log(formData)
  }
  return (
    <div className='min-h-[calc(100vh-64px)] w-100 bg-[#010409] flex  justify-center items-center '>
      <form action={action} className="w-5/6 h-fill mb-10 p-3 rounded-md  gap-2 border border-[#30363D] sm:flex text-white ">
        <div className="sm:w-[50%] bg-[#010409] flex  flex-col rounded-md border  border-[#30363D]  items-center">
          <div className="w-full p-3 bg-[#0D1117]  rounded-md border-b border-[#30363D]">
            <h3 className='text-2xl font-extralight text-center'>Create new Repository</h3>
          </div>
          <div className='p-4 w-full flex flex-col items-start gap-3'>
            <p className='font-extralight text-center '>You can perfectly manage your projects with Repositories . you can add or manage tasks auto functionings and control versions</p>
            <div className="flex gap-2 items-center"><p className='mt-1 bg-[#0D1117] px-1 pb-[0.10rem] pt-[0.08rem] rounded-md'>abancp</p>/
              <Input type='text' name='name' placeholder="name" width="100" border />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-green-600 bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg> <p className='text-green-600'>Available name</p> </div>
            <div className="mt-3 w-full gap-3 h-fit justify-center items-center flex flex-col">
              <label className='cursor-pointer'>
                <div className="flex gap-4 items-center justify-between">
                  <input type="radio" name="secure" value="public" id="secure-public" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-globe-central-south-asia" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.882 1.731a.48.48 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.7.7 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a1 1 0 0 0-.462-.04 7 7 0 0 1 2.45-2.027m-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.8.8 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.45.45 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282l.04-.001a7.003 7.003 0 0 1-12.658.905Z" />
                  </svg>
                  <div className="">
                    <h3 className='text-md font-semibold'>Public</h3>
                    <p className='w-60'>anyone can see your repository</p>
                  </div>
                </div>
                <div className=""></div>
              </label>
              <label className='cursor-pointer'>
                <div className="flex gap-4 items-center justify-between">
                  <input type="radio" value="private" name="secure" id="secure-private" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
                  </svg>
                  <div>
                    <h3 className='text-md font-semibold'>Private</h3>
                    <p className='w-60'>you can choose who can see the repo</p>
                  </div>
                </div>
              </label>
              <div className="w-full">
                <h3 className='font-semibold'>Description<span className="font-extralight text-sm">(Optional)</span> </h3>
                <Input border width="full" type='text' name="description" placeholder='eg:good cli tool to manage projects' />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-[50%] bg-[#010409] flex  flex-col rounded-md border  border-[#30363D]  items-center">
          <div className="w-full p-3 bg-[#0D1117]  rounded-md border-b border-[#30363D]">
            <h3 className='text-2xl font-extralight text-center'>Project Management</h3>
          </div>
          <div className='p-4 w-full flex flex-col items-start gap-5'>
            <div className="w-full">
              <h3 className='font-semibold'>Code URI <span className="font-extralight text-sm">(Optional)</span> <p className='text-xs font-extralight'> url of any code hosting platforms to contribute other developers to your Project</p></h3>
              <Input border width="full" type='text' name="codeURI" placeholder='eg:https://github.com/abancp/pit' />
            </div>
            <div className="w-full">
              <h3 className='font-semibold'>Languages and Technologies<span className="font-extralight text-sm">(Optional)</span> <p className='text-xs font-extralight'>tasks are planning and building for next stable versions</p></h3>
              <Input border width="full" type='text' name="languages" placeholder='Javascript,C++' />
            </div>
            
            <div className="w-full">
              <h3 className='font-semibold'>Project URI<span className="font-extralight text-sm">(Optional)</span> <p className='text-xs font-extralight'>tasks are planning and building for next stable versions</p></h3>
              <Input border width="full" type='text' name="liveURI" placeholder='eg:https://pithub.vercel.com' />
            </div>
            <Button/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateRepo
