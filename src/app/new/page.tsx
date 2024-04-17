import React from 'react'
import CreateRepoForm from '@/src/components/repo/CreateRepoForm/CreateRepoForm'

 function CreateRepo() {
  return (
    <div className='min-h-[calc(100vh-64px)] w-100 bg-[#010409] flex  justify-center items-center '>
      <CreateRepoForm/>
    </div>
  )
}

export default CreateRepo
