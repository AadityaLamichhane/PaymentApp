import { useState } from "react";
export const Select = ({options}:{
    options:{
        name: string
    }[]
})=>{
    const [value,setValue] = useState();
    return(
    <>
        <select>
            {/* options will have the value and the name  */}
         
            </select>
    </>
    )
}