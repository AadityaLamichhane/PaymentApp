"use client"
import { useState } from "react";
import { InputComponent } from "@repo/ui/input";
import { Card } from "@repo/ui/Card";
import { Button } from "@repo/ui/button";
import { P2ptransactions } from "../app/lib/p2ptransaction";
import { Center } from "../../../packages/ui/src/component/Center";
export const  Pay2Persion= ()=>{
    const [amount  , setAmount ] = useState(0);
    const [number , setNumber]= useState(0);
    return <>
    
    <Card title="Pay to Person">
        <InputComponent title={"Amount"} label={"Enter Amount"} onChange={(value)=>setAmount(Number(value))} ></InputComponent>
        <InputComponent title={"Number"} label={"Enter number of User"} onChange={(getnumber)=>setNumber(Number(getnumber))}/>
        <Center>
            <div className="p-2 mt-2">
                <Button onClick={async()=>{
                    // calling the options
                    await P2ptransactions( number, amount);
                    window.location.reload();
                }} >Transfer</Button>
            </div>
            
        </Center>
        
    </Card>
    </>
}

