'use client'

import React, { FormEvent, useState } from 'react'
import Input from '../../ui/Input/Input'
import axios, { AxiosResponse, AxiosError } from 'axios'
import { toast, Toaster } from 'sonner';
import FormButton from '../../ui/FormButton/FormButton';

interface User {
    name: string,
    username: string,
    email: string,
    password: string,
}

interface InputEventTarget extends EventTarget {
    value: string;
}

interface ConflictError extends AxiosError {
    message: string
}

const SignupForm = () => {
    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [nameErr, setNameErr] = useState<string>("");
    const [usernameErr, setUserNameErr] = useState<string>("");
    const [emailErr, setEmailErr] = useState<string>("");
    const [passwordErr, setPasswordErr] = useState<string>("");
    const [confirmPasswordErr, setConfirmPasswordErr] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setLoading(true)

        setNameErr("")
        setUserNameErr("")
        setEmailErr("")
        setPasswordErr("")
        setConfirmPasswordErr("")

        if (name.length < 3) setNameErr("minimum 3 characters")
        if (name.length > 20) setNameErr("maximum 20 characters")
        if (username.length < 3) setUserNameErr("minimum 3 characters")
        if (username.length > 20) setUserNameErr("maximum 20 characters")
        if (password.length < 8) setPasswordErr("minimum 8 characters")
        if (password !== confirmPassword) setConfirmPasswordErr("password not matching")
        console.log(!(nameErr || usernameErr || emailErr || passwordErr || confirmPasswordErr));
        console.log(nameErr , usernameErr , emailErr , passwordErr , confirmPasswordErr);
        if (!(nameErr || usernameErr || emailErr || passwordErr || confirmPasswordErr)) {
            console.log('----');
            const user: User = {
                name,
                username,
                email,
                password,
            }

            try {
                const response: AxiosResponse = await axios.post("http://localhost:8000/signup", user)
                if (response.data.success) toast.success("Signup successful!")
                setLoading(false)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    const axiosError: AxiosError = error;
                    if (axiosError.response?.status === 409) {
                        const conflictErr: AxiosError<ConflictError> = error;
                        if (conflictErr.response?.data?.message?.split(':')[0] === 'email') {
                            setEmailErr("email already registered")
                        }
                        if (conflictErr.response?.data?.message?.split(':')[0] === 'username') {
                            setUserNameErr("username already taken")
                        }
                        setLoading(false)
                    } else {
                        toast.error("Something went wrong! Please again later")
                        setLoading(false)
                    }
                }
            }
        }else{
            setLoading(false)
        }
    }
    return (
        <div className='border text-white bg-[#0D1117] w-[20rem] max-h-fit min-h-44 p-3 rounded-md border-[#30363D] flex-col flex justify-center'>
            <Toaster />
            <form onSubmit={handleSubmit} className='flex flex-col items-left justify-center' >
                <h1 className='text-center text-white w-100 font-medium text-2xl'>Singup to Pithub</h1>
                <hr className='mt-4 border-[#30363D] ' />
                <h4 className='text-left mt-3'>full name <span className='text-red-600 font-light text-sm '>{nameErr}</span></h4>
                <Input onChange={(e: React.ChangeEvent<InputEventTarget>) => { setName(e.target.value) }} name="name" type="text" />
                <h4 className='text-left mt-3'>username <span className='text-red-600 font-light text-sm '>{usernameErr}</span></h4>
                <Input onChange={(e: React.ChangeEvent<InputEventTarget>) => { setUsername(e.target.value) }} name="username" type="text" />
                <h4 className='text-left mt-3'>email <span className='text-red-600 font-light text-sm '>{emailErr}</span></h4>
                <Input onChange={(e: React.ChangeEvent<InputEventTarget>) => { setEmail(e.target.value) }} name="email" type="email" />
                <h4 className='text-left mt-3'>password <span className='text-red-600 font-light text-sm '>{passwordErr}</span></h4>
                <Input onChange={(e: React.ChangeEvent<InputEventTarget>) => { setPassword(e.target.value) }} name="password" type="password" />
                <h4 className='text-left mt-3'>confirm password <span className='text-red-600 font-light text-sm '>{confirmPasswordErr}</span></h4>
                <Input onChange={(e: React.ChangeEvent<InputEventTarget>) => { setConfirmPassword(e.target.value) }} name="confirm" type="password" />
                <FormButton/>
            </form>
        </div>
    )
}
export default SignupForm