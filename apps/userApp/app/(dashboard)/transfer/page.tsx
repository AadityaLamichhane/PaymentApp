import { getServerSession } from "next-auth";
import { CardElement } from "../../CardElement";
import { authOption } from "../../lib/auth";
import prisma from "@repo/db/client"
import { PaymentComponent } from "../../../components/PaymentComponent";
import { OnRampingComponent } from "../../../components/OnRampingComponent";
import { Balance } from "../../../components/Balance";
async function getOnRampTransactions()
{
    const session = await getServerSession(authOption);
    const trnxn = await prisma.onRampTransaction.findMany({
        where:{
            userId :Number(session?.user?.id)
        }
    });
    return trnxn.map(t=>({
        time:t.startTime,
        status:t.status,
        provider:t.provider,
        amount:t.amount,
        startTime:t.startTime,
        userId:t.userId,
    })); 

}
async function getBalance()
{
    const session = await getServerSession(authOption);
    const transaxion = await prisma.balance.findMany({
        where:{
            userId:Number(session?.user.id)
        }
    })

}
export default async function ()
{
    const balance =await getBalance();
    const onRampTransactionall = await getOnRampTransactions();
    
    return (<>
            {/* Making the grid of the application in the app  */}
            <div  className="grid grid-cols-1 lg:grid-cols-3 lg:p-4  gap-3 min-w-full md:w-full  ">
                <div className="col-span-2"> 
                    <PaymentComponent/>
                 </div>
                <div className="col-span-1 flex flex-col gap-2   "> 
                    <div>
                        <OnRampingComponent/>
                    </div>
                    <div>
                        <Balance/>
                    </div>
                </div>
            </div>
    </>)
}