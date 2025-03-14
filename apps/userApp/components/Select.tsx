import { useState } from "react";
export const Select = ()=>{
    const [value,setValue] = useState();
    return(
    <>
        <select onChange={ (e)=>setValue(e.target.value)}>{}</select>
    </>
    )
}