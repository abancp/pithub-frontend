'use client'
import React, { useState } from 'react'
import Task from './Task/Task'

function Tasks({ stage,initialTasks }: { stage: string,initialTasks:string[] }) {
    const [showFull, setShowFull] = useState<boolean>(true)
    const [tasks, setTasks] = useState<string[]>(initialTasks)

    return (
        <div className={`border-[#30363D] rounded-md  ${showFull ? "min-h-36" : "h-10"} transition w-full border bg-[rgb(13,17,23)]`}>
            <div onClick={(e) => { setShowFull(!showFull) }} className={`cursor-pointer hover:opacity-85 w-full h-10 rounded-md ${showFull && "border-b border-[#30363D]"} px-3 flex items-center justify-between  bg-[#161B22]`}>
                <h2>{stage} Tasks</h2>
                {showFull ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                </svg>}
            </div>

            {showFull &&
                <div className='p-1 flex gap-1 flex-col'>
                    {tasks.map((task)=>(<Task name={task}/>))}
                </div>
            }

        </div>
    )
}

export default Tasks
