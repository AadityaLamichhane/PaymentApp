"use client"
import { useState } from "react";
import { InputComponent } from "@repo/ui/input";
import { Card } from "@repo/ui/Card";
import { Button } from "@repo/ui/button";
import { P2ptransactions } from "../app/lib/p2ptransaction";
export const  Pay2Persion= ()=>{
    const [amount  , setAmount ] = useState(0);
    const [number , setNumber]= useState(0);
    return <>
    
    <Card title="Pay to Person">
        <InputComponent title={"Amount"} label={"Enter Amount"} onChange={(value)=>setAmount(Number(value))} ></InputComponent>
        <InputComponent title={"Number"} label={"Enter number of User"} onChange={(getnumber)=>setNumber(Number(getnumber))}/>
        <Button onClick={async()=>{
            // calling the options
            await P2ptransactions( number, amount);
            window.location.reload();
        }} >Pay</Button>
    </Card>
    </>
}

