import { useState } from "react";
import { json } from "stream/consumers";
export const Select = ({ options , onSelect}: {
    options: {
        id:number,
        name: string
    }[],
    onSelect : (value:string)=>void

}) => {
    
    return (
        <div className="p-2">
            <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange = {(e)=>{
                        onSelect(e.target.value);
                }}> 
                    {options.map(option=>{
                        return <option key = {option.id} value ={option.name}>{option.name}</option>
                    })}
            </select>
        </div>

        
    )
}