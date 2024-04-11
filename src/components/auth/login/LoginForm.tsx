import React from 'react'
import Input from "../../ui/Input/Input"
import axios from 'axios'
import { redirect } from 'next/navigation'
import Button from '../../ui/Button/Button'
import { toast } from 'sonner'

const LoginForm = () => {
    async function handleSubmit(formData: FormData) {
        'use server'
        const response = await axios.post('http://localhost:8000/login', { email: formData.get('email'), password: formData.get('password') })
        if(response.data.success){
            toast.success("Login Successful")
            redirect('/')
        }else{
            toast.error(response.data.message || "Something Went Wrong! please try again later")
        }
    }
    return (
        <form action={handleSubmit} className='border text-white bg-[#0D1117] w-[20rem] max-h-fit min-h-44 p-3 rounded-md border-[#30363D] flex  justify-center flex-col '>
            <h1 className='text-center text-white font-medium text-2xl'>Signin to Pithub</h1>
            <hr className='mt-4 border-[#30363D] ' />
            <h4 className='text-left mt-4'>username or email</h4>
            <Input name="email" type='text' />
            <div className='mt-4 flex justify-between'><h4>password</h4><h4 className='font-thin text-sm hover:underline cursor-pointer transition hover:text-blue-900 '>forget password</h4></div>
            <Input name="password" type='text' />
            <Button/>
        </form>
    )
}

export default LoginForm