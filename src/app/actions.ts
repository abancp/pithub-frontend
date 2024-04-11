'use server'
import axios, { AxiosError, AxiosResponse } from "axios"
import { ActionResponseState , LoginUser,SignupUser } from "../types/authTypes"

export async function loginAction(currentState:ActionResponseState , formData: FormData) : Promise<ActionResponseState> {


    const loginUser: LoginUser = {  
        email: formData.get('email'),
        password: formData.get('password')
    }

    try {
        const response:AxiosResponse = await axios.post('http://localhost:8000/login', loginUser)
        return response.data
    } catch (e) {
        if(axios.isAxiosError(e)){
            const axiosError:AxiosError = e as AxiosError
            if(axiosError.response){
                return {success : false ,message:axiosError.response.data as string}
            }else if(axiosError.request){
                return {success:false,message:"Network Error! check your network and try again"}
            }
            return {success:false,message:"something went wrong!"}
        }
        return {success:false,message:"something went wrong!"}
    }
}

export async function signupAction(currentState:ActionResponseState,formData:FormData){
    
    const signupUser:SignupUser = {
        email:formData.get('email'),
        name:formData.get('name'),
        username:formData.get('username'),
        password:formData.get('password')
    }

    try {
        const response:AxiosResponse = await axios.post('http://localhost:8000/login', loginUser)
        return response.data
    } catch (e) {
        if(axios.isAxiosError(e)){
            const axiosError:AxiosError = e as AxiosError
            if(axiosError.response){
                return {success : false ,message:axiosError.response.data as string}
            }else if(axiosError.request){
                return {success:false,message:"Network Error! check your network and try again"}
            }
            return {success:false,message:"something went wrong!"}
        }
        return {success:false,message:"something went wrong!"}
    }
}