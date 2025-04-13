import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { authOption } from "../app/lib/auth";
import db from '@repo/db/client'
export async  function  P2ptransactions_card(){
    // Get the user to the
    const session =  await getServerSession(authOption);
    const user = session?.user;

    try { 

        const onRampTransactions =await db.onRampTransaction.findMany({
            where:{
                userId: Number(user.id)
            }
        });
        const TransferFromuser = await db.transferToUser.findMany({
            where:{
                from_userId:Number(user.id)
            }
        })
        // Define each function one serving the data of the user using the return of teh Transfer in the data 
        

    }catch(err)
    {
        console.log("Error while getting the data ");
    }
    return (
        <>
	
	
        </>
    )
}