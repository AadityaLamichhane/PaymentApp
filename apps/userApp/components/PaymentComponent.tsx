"use client"
import { InputComponent } from "@repo/ui/input"
import { Button } from "@repo/ui/button"
import { Card } from "@repo/ui/Card"
import { Select } from "./Select"
import { useState } from "react"
import { Center } from "../../../packages/ui/src/component/Center"
import { onRampTransaction } from "../app/lib/OnRampTransaction"
import { useRouter } from "next/router"

// defining the array of the object that have the information of the banking details 
const Bankingobject = [
    {
        id: 1,
        name: "Siddhartha Bank",
        url: "https://www.siddharthabank.com"
    },
    {
        id: 2,
        name: "Muktinath Bank",
        url: "https://www.muktinathbank.com"
    }
];

export const PaymentComponent = () => {

    const [providername, SetProviderName] = useState(Bankingobject[0]?.name || "");
    const [providerurl, SetProviderUrl] = useState(Bankingobject[0]?.url || "");
    const [amount, SetAmount] = useState(0);

    const handleSelectChange = (valuename: string) => {
        const selectedbank = Bankingobject.find((object) => object.name === valuename);
        if (selectedbank) {
            SetProviderName(selectedbank.name);
            SetProviderUrl(selectedbank.url);
        }
    };

    return (<div className="w-full p-8 ">
        <Card title="Topup From Bank">
            <div>
                <div className="py-4 text-left">Payment</div>
                <InputComponent title={""} label={"Money"} onChange={(value) => {
                    SetAmount(Number(value));
                }} />
                <Center>
                    <div className="p-2">
                        <Select options={
                            Bankingobject.map(provider => {
                                return {
                                    name: provider.name,
                                    id: provider.id
                                }
                            })
                        } onSelect={handleSelectChange} />
                    </div>
                </Center>
                <div>
                    <Button onClick={async () => {
                        try {
                            await onRampTransaction(amount, providerurl);
                            window.location.href = providerurl || "http://localhost:3000"

                        }
                        catch (e) {
                            console.error(e);
                        }

                    }}>Topup</Button>
                </div>
            </div>
        </Card>
    </div>
    )
}