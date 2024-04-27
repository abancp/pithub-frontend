'use client'
import { useUserStore } from "../store/userStore";
import { SERVER_URL } from "../config/collections";
import axios, { AxiosResponse } from 'axios'
import { toast } from "sonner";
import { useEffect } from "react";

export default  function UpdateUser() {
    const isLogin = useUserStore().isLogin
    const setAccessToken = useUserStore().setAccessToken
    const setUsername = useUserStore().setUsername
    const setIsLogin = useUserStore().setIsLogin
    const setFullname = useUserStore().setFullname
 
    if (!isLogin) {
        try {
            const token = window.document.cookie?.split('=')[1]
            if (token) {
                axios.get(SERVER_URL + '/user', {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then(({data})=>{
                    if(data.username && data.name && data.email ){
                        setUsername(data.username)
                        setFullname(data.fullname)
                        setAccessToken(token)
                        setIsLogin(true)
                    }
                }).catch((e)=>{
                    console.log(e);
                })
            }
        } catch (e) {
            console.log("something went wrong on user update ",e)
            toast.error("Something Went Wrong!")
        }
    }
    return null
}
