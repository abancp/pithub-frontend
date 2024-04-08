import React, { ChangeEvent } from 'react'

interface InputEventTarget extends EventTarget {
    value: string;
}

const Input = ({type,name,onChange}:{type:string,name:string,onChange?:(e:React.ChangeEvent<InputEventTarget>)=>void}) => {
    return (
        <input className={'px-1 w-100 mt-1 bg-[#010409] focus:outline-none focus:border-2 rounded-md focus:border-sky-400 focus:border-opacity-90'} onChange={onChange} name={name} type={type} />
    )
}

export default Input