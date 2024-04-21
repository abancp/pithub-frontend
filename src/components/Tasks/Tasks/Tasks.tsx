'use client'
import React,{useState} from 'react'

function Tasks({stage}:{stage:string}) {
    const [showFull,setShowFull] = useState<boolean>(true)
    return (
        <div className={`border-[#30363D] rounded-md  ${showFull?"min-h-36":"min-h-10"} transition w-full border bg-[rgb(13,17,23)]`}>
            <div onClick={(e)=>{setShowFull(!showFull)}} className={`cursor-pointer hover:opacity-85 w-full h-10 rounded-md ${showFull&&"border-b border-[#30363D]"} px-3 flex items-center justify-between  bg-[#161B22]`}>
                <h2>{stage} Tasks</h2>
                <h3>{showFull?"side":"bottum"}</h3>
            </div>
        </div>
    )
}

export default Tasks
