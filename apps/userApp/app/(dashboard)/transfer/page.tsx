import { getServerSession } from "next-auth";
import { CardElement } from "../../CardElement.jsx";
import { authOption } from "../../lib/auth";
import prisma from "@repo/db/client"

import { Prisma } from "@prisma/client";
import { PaymentComponent } from "../../../components/PaymentComponent";
import { OnRampingComponent } from "../../../components/OnRampingComponent";
import { Balance } from "../../../components/Balance";
async function getOnRampTransactions()
{       
        const session = await getServerSession(authOption);

    try {

        const trnxn :any= await prisma.onRampTransaction.findMany({
            where:{
                userId :Number(session?.user?.id)
            }})
             
        return trnxn.map((t:any)=>({
        status:t.status,
        provider:t.provider,
        amount:t.amount,
        startTime:t.startTime,
        userId:t.userId,
})); 

    }catch(err){
        console.log("nothing to")
}
}
async function getBalance()
{
const session = await getServerSession(authOption); 
    type TransactionsDetails ={
        id: number;
    amount: number;
    userId: number;
    locked: number;
    }[];
    try{
        const transaxion: TransactionsDetails= await prisma.balance.findMany({
            where:{
                userId:Number(session?.user.id)
            }
        });
        return transaxion.map((transaction)=>({
            amount   : transaction.amount,
            userId   : transaction.userId,

        }) );}
    catch(e)
    {
        console.log("This is the error thet is occuring in the application ",e);
    }
 }
export default async function ()
{
    const balance =await getBalance();
    const onRampTransactionall = await getOnRampTransactions();
    return (<>
            {/* Making the grid of the application in the app  */}
            <div  className="grid grid-cols-1 lg:grid-cols-4 lg:p-4 gap-3 min-w-full md:w-full mx-auto">
                <div className="col-span-2 flex justify-center items-center"> 
                    <PaymentComponent/>
                 </div>
                <div className="col-span-2 flex flex-col gap-2  mx-8"> 
                    <div>
                        <OnRampingComponent/>
                    </div>
                    <div >
                        <Balance/>
                    </div>
                </div>
            </div>
    </>)
}