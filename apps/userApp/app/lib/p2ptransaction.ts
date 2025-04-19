"use server"
import { getServerSession } from "next-auth"
import { authOption } from "./auth"
import db from "@repo/db/client"
export async function  P2ptransactions (to : string , amount :number )
{
    const session = await getServerSession(authOption);
    const fromUser:number = Number(session?.user.id);   
    try {
        const balancefrom   = await db.balance.findFirstOrThrow({where:{userId:Number(fromUser)}});
        if(balancefrom.amount < amount )
        {
            console.log(`not enough money to make the transatcon `)
            return false ; 
        }
    }
    catch(err)
    {
        return console.log("Error occured while getting thee balance ", err);
    }
    const toUser = await db.user.findFirst({
        where:{
            number:to
        }
    }).catch((err)=>{
        return console.log("The error is occuring while getting the nummber to send to the user ");
    });
    if (!toUser)
    {
        return console.error("Failed to find the user to send the money");
    }
    if(toUser.id == session?.user.id){
        throw new Error("You cannot send money to yourself");

    }
    // if there is the user 
try{
    db.$transaction([
        db.balance.update({
            where:{
                userId : fromUser 
            },
            data:{
                amount:{
                    decrement:(amount*100)
                }
            }
        }),
        db.balance.upsert({
            where:{
                id : Number(toUser.id)  
            },
             update:{
                    amount:{
                        increment:(Number(amount)*100)
                    }
                },
                create:{
                    amount: (Number(amount)*100),
                    locked:0,
                    userId :Number(toUser.id)
                }
            }
        ), 
        db.transferToUser.create({
       
            data:{
                startTime: new Date(),
                status:"Success",
                amount: Number((amount)*100),
                to_userId:toUser.id,
                from_userId:fromUser
            }

        })
    ]);


}catch(err){
    db.transferToUser.create({
        data:{
            startTime: new Date(),
            status:"faill",
            amount: Number((amount)*100),
            to_userId:toUser.id,
            from_userId:fromUser
        }

    }).catch((err)=>{
        console.log("Cannot cath  in Error in transaction");
    });
    
    return console.log("unsuccessfull in the payment");
}
    
    console.log("Pay to person was successfull")
    return true;
}