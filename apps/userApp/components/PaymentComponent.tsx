"use client"
import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/Card"
import { Select } from "./Select"
import { useState } from "react"
// defining the array of the object that have the information of the banking details 
const Bankingobject = [
    {
        name: "Siddhartha Bank",
        url: "https://www.siddharthabank.com"
    },
    {
        name:"Muktinath Bank",
        url: "https://www.muktinathbank.com"
    }
];
export const PaymentComponent = ()=>{
    const [ providerName , setProviderName] = useState(Bankingobject[0]?.name);
    const [providerUrl , SetProviderUrl] = useState(Bankingobject[0]?.url);
    
    return (
    <>
    {/* have the select comameponent with the bank url and the
      */}
<Select options ={
    Bankingobject.map(provider =>{
        return {
            name : provider.name,
            }
    })
}/>
        
    </>
    )

}