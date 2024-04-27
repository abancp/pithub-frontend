'use client'
import { useUserStore } from '@/src/store/userStore'
import React from 'react'
import Button from './Button/Button';
import LoginSignupButton from './LoginSignupButton';
import Link from 'next/link';

function UserProfile() {
    // const isLogin = useUserStore().isLogin
    const username = useUserStore().username
    console.log(username);
    return (
        <div className='flex'>
            {username ? <div className="w-[1.75rem] h-[1.75rem] rounded-full bg-white"></div> : <div className="flex gap-3"><Link href={'/login'}><LoginSignupButton>Login</LoginSignupButton></Link><Link href={'/signup'}><LoginSignupButton>Signup</LoginSignupButton></Link></div>}
        </div>
    )
}

export default UserProfile
