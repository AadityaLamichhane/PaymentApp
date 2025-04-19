import { getServerSession } from "next-auth";
import { authOption } from "../app/lib/auth";
import db from '@repo/db/client'
import { OnRampTransaction , TransferToUser ,User} from "@prisma/client";
function combineonRampandtransaction( onRampTransactions :OnRampTransaction[], fromData: TransferToUser[] ){
        
    const onRamped = onRampTransactions.map((element) =>({
 
            status:element.status=="Success"?"Success":"Failed",
            amount: element.amount,
            startTime: element.startTime,
            onRamp: true ,
            p2pTransaction: false,
            from_userId:element.userId,
            to_userId: element.userId
        }));
    const transaction = fromData.map((element) =>(
    {
            status:element.status=="Success"?"Success":"Failed",
            amount: element.amount,
            startTime: element.startTime,
            from_userId: element.from_userId,
            to_userId: element.to_userId,
            onRamp: false,
            p2pTransaction: true
    }));
    // Combine the two arrays
    const combinedData = [...onRamped, ...transaction];
    return combinedData.sort((a, b) =>  (b.startTime).getTime()-(a.startTime).getTime());
    }

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
    const obtainedData = combineonRampandtransaction(onRampTransactions , fromData)

    // making function to combine the onRamping function to the p2p function 
    
    return (
        <div>
            <div>

            
                {
                obtainedData.map((fromdataelement)=>{
                return <div className="p-2">
                   <div  className="flex justify-between ">
                    <div className="p-1 flex-col justify-center items-start">
                        
                        {fromdataelement.p2pTransaction ?<>by to </>:<>Topup</> } 
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
                   
                   
                     {( fromdataelement.status =="Failed" ||fromdataelement.status==undefined || fromdataelement.from_userId ==(user.id) && fromdataelement.to_userId != Number(user.id))
                                ?  <span className="text-red-500 font-bold">
                                    {fromdataelement.from_userId ==(user.id) && fromdataelement.to_userId != Number(user.id)?"-":"+"} Rs{fromdataelement.amount/100}
                                    </span>
                                : <span className="text-green-500 font-bold">+ Rs {fromdataelement.amount/100}</span>}
                    </div>
                </div>
                </div>
            })
                }

            </div>
            
        </div>
    )
}