'use client'
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/ui/Header/Header";
import { Toaster, toast } from "sonner";
import { useUserStore } from "../store/userStore";
import axios from 'axios'
import { SERVER_URL } from "../config/collections";
import { getCookie } from "cookies-next";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Pithub",
//   description: "Best project management cloud platform",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLogin, setAccessToken, setUsername, setFullname, setIsLogin] = useUserStore((state) => [state.isLogin, state.setAccessToken, state.setUsername, state.setFullname, state.setIsLogin])
  if (!isLogin) {
    try {
      const token = getCookie('token')
      console.log(token)
      if (token) {
        axios.get(SERVER_URL + '/user', {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(({ data }) => {
          if (data.username && data.fullname && data.email) {
            setUsername(data.username)
            setFullname(data.fullname)
            setAccessToken(token)
            setIsLogin(true)
          }else{
            console.log("something");
          }
        }).catch((e) => {
          console.log(e);
        })
      }
    } catch (e) {
      console.log("something went wrong on user update ", e)
      toast.error("Something Went Wrong!")
    }
  }
  return (
    <html lang="en">
      <body className={`${inter.className} w-100 bg-[#010409]  min-h-screen max-h-fit`}>
        <Header />
        {children}
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
