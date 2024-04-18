import React from 'react'

function ProgressBar({ progress, width }: { progress: string, width: string}) {
    return (
        <div className="w-full h-[0.5rem] rounded-md bg-black">
            <div className="bg-[#1F6FEB] rounded-md loading-progress w-[64%] transition-all h-full">
                <div className="bg-[#c75021] rounded-md loading-progress w-[34%] transition-all h-full">
                <div className="bg-[#61d51e] rounded-md loading-progress w-[34%] transition-all h-full"></div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
