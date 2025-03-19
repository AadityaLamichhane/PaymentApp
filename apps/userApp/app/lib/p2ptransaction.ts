"use server"

import { getServerSession } from "next-auth"
import { authOption } from "./auth"
import db from "@repo/db/client"

export async function  P2ptransactions (to:number , amount :number )
{
    
    const session = await getServerSession(authOption);
    const fromUser = session?.user.id;
    
    try {
        
        const balancefrom   = await db.balance.findFirstOrThrow({where:{userId:Number(fromUser)}});
        if(balancefrom.amount < amount )
        {
            return console.error("Not enough money to send to the user ");
        }
    }
    catch(err)
    {
        return console.log("Error occured while getting thee balance ", err);

    }
    const toUser = await db.user.findFirst({
        where:{
            number:to.toString()
        }
    });
    if (!toUser)
    {
        return console.error("Failed to find the user to send the money");
        }
    db.$transaction([
        db.balance.update({
            where:{
                userId : Number(fromUser) 
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
        )
    ]);
    console.log("Pay to person was successfull")
}