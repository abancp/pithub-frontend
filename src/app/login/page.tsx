import LoginForm from '@/src/components/auth/login/LoginForm'
import React from 'react'

function Login() {
  return (
    <div className='flex justify-center items-center bg-[#0D1117] w-100 min-h-[calc(100vh-64px)]  max-h-fit'>
      <LoginForm/>
    </div>
  )
}

export default Login
