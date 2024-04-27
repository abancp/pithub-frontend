import { create } from "zustand";

interface UserStore {
    accessToken: string | null,
    setAccessToken: (accessToken: string) => void,
    username: string | null,
    setUsername: (username: string) => void,
    fullname: string | null,
    setFullname: (fullname: string) => void,
    isLogin: boolean,
    setIsLogin: (isLogin: boolean) => void,
    theme: 'dark' | 'light',
    setTheme: (theme: 'dark' | 'light') => void,
}

const useUserStore = create<UserStore>((set) => ({
    accessToken: null,
    setAccessToken: (accessToken) => set({ accessToken }),
    username: null,
    setUsername: (username) => set({ username }),
    fullname:null,
    setFullname:(fullname)=>set({fullname}),
    isLogin: false,
    setIsLogin: (isLogin) => set({ isLogin }),
    theme: "dark",
    setTheme: (theme) => set({ theme })
}));

export { useUserStore };