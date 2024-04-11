import React from 'react'
import SignupForm from '../../components/auth/signup/SignupForm'

function SignupPage() {
  return (
    <div className='w-100 bg-[#010409] min-h-[calc(100vh-64px)] max-h-fit flex justify-center items-center'>
      <SignupForm/>
    </div>
  )
}

export default SignupPage