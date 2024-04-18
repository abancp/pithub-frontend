import React from 'react'

type UserPageProps = {
    params:{
        username:string
    }
}

function page({params:{username}}:UserPageProps) {
  return (
    <div className="text-white w-full ">
      <h1 className='text-center mt-10 font-extrabold font-mono text-7xl'>{username}'s Profile</h1>
    </div>
  )
}

export default page
