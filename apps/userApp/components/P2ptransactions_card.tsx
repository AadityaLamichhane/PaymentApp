import { getServerSession } from "next-auth";
import { authOption } from "../app/lib/auth";
import db from '@repo/db/client'
import { OnRampTransaction , TransferToUser ,User} from "@prisma/client";
import { decl } from "postcss";
import { error } from "console";
import { date } from "zod";
export async  function  P2ptransactions_card(){
    const session =  await getServerSession(authOption);
    const user = session?.user;
    let  onRampTransactions  : OnRampTransaction[]=   [];
    let fromData: TransferToUser[] | void  = [];
    try { 
        onRampTransactions = await db.onRampTransaction.findMany({
            where:{
                userId: Number(user.id)
            }
        });
        fromData = await db.transferToUser.findMany({
                where:{
                    OR:[
                        {from_userId: Number(user.id)}
                        ,
                        {to_userId:Number(user.id)}
                    ]
                }
        });
    }
    catch(err)
    {
        console.log("Error while getting the data ",err);
    }
    // making function to combine the onRamping function to the p2p function 
    function combinetwoobject( onRampTransactions :OnRampTransaction[], fromData: TransferToUser[] ){
        filtering the needing things and are common 
    }
    return (
        <div>
            <div>
                {
             combinedData.map((fromdataelement)=>{
                return <div key={fromdataelement.id} className="p-2">
                   
                <div  className="flex justify-between ">
                    <div className="p-1 flex-col justify-center items-start">
                        
                        Amount :{fromdataelement.amount} 
                        <div className="flex flex-col text-gray-700 text-sm">
                            <div >
                                {fromdataelement.startTime.toDateString()}
                            </div>
                            <div>
                                {fromdataelement.startTime.toLocaleTimeString()}
                            </div>
                                

                        </div>
                        
                   </div>

                   
                     <div className="m-2 justify-center items-end">
                     {(fromdataelement.from_user ==user.id ||fromdataelement.to_userId==user.id)
                                ? <span className="text-red-500 font-bold">- Rs{fromdataelement.amount}</span>
                                : <span className="text-green-500 font-bold">+ Rs {fromdataelement.amount}</span>}
                    </div>
                </div>
                </div>
            })
                }

            </div>
            <div>
                {
                    fromData.map((fromdata)=>{
                        return <div key={fromdata.id} className="p-2">
                           
                        <div  className="flex justify-between ">
                            <div className="p-1 flex-col justify-center items-start">
                                
                                Amount :{fromdata.amount} 
                                <div className="flex flex-col text-gray-700 text-sm">
                                    <div >
                                        {fromdata.startTime.toDateString()}
                                    </div>
                                    <div>
                                        {fromdata.startTime.toLocaleTimeString()}
                                    </div>
                                        

                                </div>
                                
                           </div>

                           
                             <div className="m-2 justify-center items-end">
                             {(fromdata.status ==undefined || fromdata.status == "faill")
                                        ? <span className="text-red-500 font-bold">{fromdata.status}</span>
                                        : <span className="text-green-500 font-bold">{fromdata.status}</span>}
                            </div>
                        </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}