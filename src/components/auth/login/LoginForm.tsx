'use client'
import React, { useEffect } from 'react'
import Input from "../../ui/Input/Input"
import { redirect } from 'next/navigation'
import FormButton from '../../ui/FormButton/FormButton'
import { toast } from 'sonner'
import { loginAction } from '@/src/app/actions'
import { useFormState } from 'react-dom'
import { ActionResponseState } from '@/src/types/authTypes'


const LoginForm = () => {
    const initialState: ActionResponseState = { success: false, message: "" }
    const [response, formAction] = useFormState(loginAction, initialState)
    useEffect(() => {
        if (response.success) {
            toast.success(response.message)
            redirect('/')
        }
    }, [response])

    return (
        <form action={formAction} className='border text-white bg-[#0D1117] w-[20rem] max-h-fit min-h-44 p-3 rounded-md border-[#30363D] flex  justify-center flex-col '>
            <h1 className='text-center text-white font-medium text-2xl'>Login to Pithub</h1>
            <hr className='mt-4 border-[#30363D] ' />
            <span className='text-red-600 text-center text-sm '>{response.success || response.message}</span>
            <h4 className='text-left mt-4'>email <br /></h4>
            <Input name="email" type='text' />
            <div className='mt-4 flex justify-between'><h4>password</h4><h4 className='font-extralight text-sm hover:underline cursor-pointer transition hover:text-blue-900 '>forget password</h4></div>
            <Input name="password" type='text' />
            <FormButton />
        </form>
    )
}

export default LoginForm