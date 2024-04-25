'use server'

import axios, { AxiosError, AxiosResponse } from "axios"
import { ActionResponseState, LoginUser, SignupActionState, SignupUser } from "../types/authTypes"
import { ZodError, string, z } from 'zod'
import { cookies } from "next/headers";
import { CreateRepoActionState, NewRepo } from "../types/repoTypes";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { SERVER_URL } from "../config/collections";

axios.defaults.withCredentials = true;

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
        const response: AxiosResponse = await axios.post(SERVER_URL+'/login', loginUser, { withCredentials: true })
        if (response.headers["set-cookie"]) {
            let tokenArgs: Array<string> = response.headers["set-cookie"][0].split(';')
            let name: string = tokenArgs[0].split('=')[0]
            let value: string = tokenArgs[0].split('=')[1]
            cookies().set(name, value, {sameSite :"none",  path: "/", expires: new Date(Date.now() + (24 * 60 * 60 * 1000)), priority: "high" })
        }   
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
        if (signupUser.password !== signupUser.confirmPassword) {
            returnState.errors.confirmPassword = "password not matching"
            return returnState
        }
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
        const response: AxiosResponse = await axios.post(SERVER_URL+"/signup", signupUser)
        return { success: response.data.success, message: response.data.message, errors: {} }
    } catch (e) {
        if (axios.isAxiosError(e)) {
            const axiosError: AxiosError = e as AxiosError
            if (axiosError.response) {
                const responseErrMessage: string = axiosError.response.data as string
                if (responseErrMessage.startsWith('email')) {
                    return { success: false, message: "", errors: { email: responseErrMessage } }
                } else if (responseErrMessage.startsWith('username')) {
                    return { success: false, message: "", errors: { username: responseErrMessage } }
                } else {
                    return { success: false, message: responseErrMessage, errors: {} }
                }
            } else if (axiosError.request) {
                return { success: false, message: "Network Error! check your network and try again", errors: {} }
            }
            return { success: false, message: "Something went wrong!", errors: {} }
        }
        return { success: false, message: "Something went wrong!", errors: {} }
    }
}

export async function createRepoAction(initialState: ActionResponseState, formData: FormData):Promise<CreateRepoActionState> {
    
    try{
        const languagesString:string = formData.get("languages") as string
        const languages:string[] = languagesString.split(',') 
        const newRepo: NewRepo = {
            name: formData.get('name'),
            description: formData.get('description'),
            secure: formData.get('secure'),
            codeURL: formData.get('codeURL'),
            languages: languages,
            liveURL: formData.get('liveURL')
        }
        const response:AxiosResponse = await axios.post(SERVER_URL+"8000/repo/new", {...newRepo,token:cookies().get("token")?.value})
        const tokenString:string = cookies().get("token")?.value as string
        const tokenPayload = JSON.parse(atob(tokenString?.split('.')[1]))
        const username = tokenPayload.username
        return {success:true,message:"New Repository Created",username}
    }catch(e){
        if (axios.isAxiosError(e)) {
            const axiosError: AxiosError = e as AxiosError
            if (axiosError.response) {
                const responseErrMessage: string = axiosError.response.data as string
                console.log(responseErrMessage);
                return {success:false,message:responseErrMessage}
            } else if (axiosError.request) {
                return { success: false, message: "Network Error! check your network and try again"+e}
            }
            return { success: false, message: "Something went wrong!"}
        }
        return { success: false, message: "Something went wrong!"}
    }
}