'use client'

import React,{useEffect} from 'react'
import Input from '../../ui/Input/Input'
import { toast } from 'sonner';
import FormButton from '../../ui/FormButton/FormButton';
import { signupAction } from '@/src/app/actions';
import { useFormState } from 'react-dom';
import { ActionResponseState } from '@/src/types/authTypes';
import { redirect } from 'next/navigation';

const SignupForm = () => {
    const initialState: ActionResponseState = { success: false, message: "" }
    const [response,formAction] = useFormState(signupAction,initialState)
    useEffect(()=>{
        if(response.success){
            toast.success(response.message)
            redirect('/')
        }
    },[response])

    return (
        <div className='border text-white bg-[#0D1117] w-[20rem] max-h-fit min-h-44 p-3 rounded-md border-[#30363D] flex-col flex justify-center'>
            <form action={formAction} className='flex flex-col items-left justify-center' >
                <h1 className='text-center text-white w-100 font-medium text-2xl'>Singup to Pithub</h1>
                <hr className='mt-4 border-[#30363D] ' />
                <h4 className='text-left mt-3'>full name <span className='text-red-600 font-light text-sm '></span></h4>
                <Input name="name" type="text" />
                <h4 className='text-left mt-3'>username <span className='text-red-600 font-light text-sm '></span></h4>
                <Input name="username" type="text" />
                <h4 className='text-left mt-3'>email <span className='text-red-600 font-light text-sm '></span></h4>
                <Input name="email" type="email" />
                <h4 className='text-left mt-3'>password <span className='text-red-600 font-light text-sm '></span></h4>
                <Input name="password" type="password" />
                <h4 className='text-left mt-3'>confirm password <span className='text-red-600 font-light text-sm '></span></h4>
                <Input name="confirm" type="password" />
                <FormButton/>
            </form>
        </div>
    )
}
export default SignupForm