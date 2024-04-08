import React from 'react'

const LoginForm = () => {
    return (
        <div className='border text-white bg-[#0D1117] w-[20rem] max-h-fit min-h-44 p-3 rounded-md border-[#30363D] flex  justify-center flex-col '>
            <h1 className='text-center text-white font-medium text-2xl'>Signin to Pithub</h1>
            <hr className='mt-4 border-[#30363D] ' />
            <h4 className='text-left mt-4'>username or email</h4>
            <input className='px-1 mt-1 bg-[#010409] focus:outline-none focus:border-2 rounded-md focus:border-sky-400 focus:border-opacity-90' type="text" />
            <div className='mt-4 flex justify-between'><h4>password</h4><h4 className='font-thin text-sm hover:underline cursor-pointer transition hover:text-blue-900 '>forget password</h4></div>
            <input className='px-1 mt-1 bg-[#010409] focus:outline-none focus:border-2 rounded-md focus:border-sky-400 focus:border-opacity-90' type="password" />
            <button className='mt-4 w-100 h-8 rounded-md bg-[#1c5ca6] hover:opacity-80 transition font-medium'>Submit</button>
        </div>
    )
}

export default LoginForm