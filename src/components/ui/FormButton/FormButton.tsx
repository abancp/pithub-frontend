'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

function FormButton() {
    const {pending} = useFormStatus()
    return (
        <button type='submit' className='mt-4 w-full h-8 rounded-md bg-[#1c5ca6] hover:opacity-80 transition font-medium flex justify-center gap-1 items-center' disabled={pending}  >Submit{pending && <div className="spinner"></div>}</button>
    )
}

export default FormButton
