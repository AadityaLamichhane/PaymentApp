import { getServerSession } from "next-auth";
import { CardElement } from "../../CardElement.jsx";
import { authOption } from "../../lib/auth";
import prisma from "@repo/db/client"
import { PaymentComponent } from "../../../components/PaymentComponent";
import { OnRampingComponent } from "../../../components/OnRampingComponent";
import { BalanceCard } from "../../../components/Balance";
type OnRampTransaction = {
    id: number,
    status: string,
    amount: number,
    startTime: Date,
    userId: number
};
    async function getOnRampTransactions()
    {
        const session = await getServerSession(authOption);  
        try {
            const trnxn :any= await prisma.onRampTransaction.findMany({
                where:{
                    userId :Number(session?.user?.id)
                }})
            return trnxn.map((t:any)=>({
                id: t.id,
                status: t.status,
                amount: t.amount,
                startTime: t.startTime
    })); 
        }catch(err){
            console.log("nothing to")
    }
    }
    async function getBalance()
    {
        const session = await getServerSession(authOption);
        try{
            const transaxion= await prisma.balance.findFirst({
                where:{
                    userId:Number(session?.user.id)
                }
            });
                if(!transaxion)
                {
                    console.log("Ther was no balance for the user  ");
                    return {
                        
                            amount   :  0 ,
                            locked   :  0   
                        
                    }
                }
            return {
                amount   : transaxion?.amount || 0 ,
                locked   : transaxion?.locked || 0   
            }
        }
        catch(e)
            {
                console.log("This is the error thet is occuring in the application ",e);
            }
  }
        
        
    
type Balance = {
    amount: number;
    locked: number;
};


export default async function () {
    const balance = (await getBalance()) as Balance;
    const onRampTransactionall = (await getOnRampTransactions()) as OnRampTransaction[];

    return (
        
            <div className="sm:flex flex-col md:grid grid-cols-2 min-w-full md:w-full mx-auto">
                <div className="col-span-1 flex justify-center items-center">
                    <PaymentComponent />
                </div>
                <div className="col-span-1 flex flex-col gap-2 mx-8">
                    <div>
                        <OnRampingComponent onRampingtransactions={onRampTransactionall} />
                    </div>
                    <div>
                        <BalanceCard amount={balance.amount} locked={balance.locked} />
                    </div>
                </div>
            </div>
        );
}