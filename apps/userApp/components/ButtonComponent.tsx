"use client"
import Router from "next/router"
export const ButtonComponent = ({content}:{content:string})=>{
    return (<>

    <div className="flex cursor-pointer py-4 rounded-2xl w-[160px]  justify-center items-center  bg-blue-500 font-semibold text-white hover:bg-blue-600 transition-all duration-300 ease-in-out">
        {content}
    </div>
    </>)
}