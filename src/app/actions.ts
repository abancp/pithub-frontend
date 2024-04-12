'use server'
import axios, { AxiosError, AxiosResponse } from "axios"
import { ActionResponseState, LoginUser, SignupActionState, SignupUser } from "../types/authTypes"
import { ZodError, z } from 'zod'

const createUserFormSchema = z.object({
    name: z.string().trim().min(3, "minimum 3 characters"),
    username: z.string().trim().min(3, "minimum 3 characters"),
    email: z.string().email("Invalid email"),
    password: z.string().trim().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string()
})

export async function loginAction(currentState: ActionResponseState, formData: FormData): Promise<ActionResponseState> {


    const loginUser: LoginUser = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    try {
        const response: AxiosResponse = await axios.post('http://localhost:8000/login', loginUser)
        return response.data
    } catch (e) {
        if (axios.isAxiosError(e)) {
            const axiosError: AxiosError = e as AxiosError
            if (axiosError.response) {
                return { success: false, message: axiosError.response.data as string }
            } else if (axiosError.request) {
                return { success: false, message: "Network Error! check your network and try again" }
            }
            return { success: false, message: "something went wrong!" }
        }
        return { success: false, message: "something went wrong!" }
    }
}

export async function signupAction(currentState: SignupActionState, formData: FormData): Promise<SignupActionState> {

    const signupUser: SignupUser = {
        email: formData.get('email'),
        name: formData.get('name'),
        username: formData.get('username'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword')
    }

    let returnState: SignupActionState = {
        success: false,
        errors: {
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        message: ''
    }

    try {
        createUserFormSchema.parse(signupUser)
        returnState.success = true
    } catch (e) {
        if (e instanceof ZodError) {
            for (const error of e.errors) {
                let element: string = error.path[0] as string
                switch (element) {
                    case "name": {
                        returnState.errors.name = error.message
                        break
                    }
                    case "username": {
                        returnState.errors.username = error.message
                        break
                    }
                    case "email": {
                        returnState.errors.email = error.message
                        break
                    }
                    case "password": {
                        returnState.errors.password = error.message
                        break
                    }
                    case "confirmPassword": {
                        returnState.errors.confirmPassword = error.message
                        break
                    }
                }
            }
        }
        returnState.message = "Something went wrong!"
    }

    if (!returnState.success) {
        return returnState
    }

    try {
        const response: AxiosResponse = await axios.post("http://localhost:8000/signup", signupUser)
        return { success: response.data.success, message: response.data.message, errors: {} }
    } catch (e) {
        if (axios.isAxiosError(e)) {
            const axiosError: AxiosError = e as AxiosError
            if (axiosError.response) {
                const responseErrMessage:string = axiosError.response.data as string
                if(responseErrMessage.startsWith('email')){
                    return { success: false, message: "", errors: {email:responseErrMessage} }
                }else if(responseErrMessage.startsWith('username')){
                    return { success: false, message: "", errors: {username:responseErrMessage} }
                }else{
                    return {success:false,message:responseErrMessage,errors:{}}
                }
            } else if (axiosError.request) {
                return { success: false, message: "Network Error! check your network and try again", errors: {} }
            }
            return { success: false, message: "Something went wrong!", errors: {} }
        }
        return { success: false, message: "Something went wrong!", errors: {} }
    }
}