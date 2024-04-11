import React, { ChangeEvent } from 'react'

interface InputEventTarget extends EventTarget {
    value: string;
}

const Input = ({type,name,onChange,border,placeholder,width}:{type:string,name:string,onChange?:(e:React.ChangeEvent<InputEventTarget>)=>void,border?:boolean,placeholder?:string,width?:string}) => {
    return (
        <input className={`px-1  mt-1 bg-[#010409] box-content focus:outline-2 rounded-md  focus:outline-sky-400 focus:outline-opacity-90  ${border?'border border-[#30363D]':'outline-2 outline-transparent'}  ${width?'w-'+width:'w-100'}  `} placeholder={placeholder} onChange={onChange} name={name} type={type} />
    )
}

export default Input
