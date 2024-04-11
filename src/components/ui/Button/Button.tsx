'use client'
import React, { useState } from 'react'

function Button() {
    const [loading, setLoading] = useState<boolean>(false)
    return (
        <button type='submit' onClick={() => { setLoading(true) }} className='mt-4 w-full h-8 rounded-md bg-[#1c5ca6] hover:opacity-80 transition font-medium flex justify-center gap-1 items-center'  >Submit{loading && <div className="spinner"></div>}</button>
    )
}

export default Button
