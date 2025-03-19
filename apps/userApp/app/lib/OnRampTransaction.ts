"use server"
import db from "@repo/db/client"
import axios from "axios"
import { getServerSession } from "next-auth"
import { authOption } from "./auth"
export async function  onRampTransaction(amount :number , providerName:string ){
    const Backend_URL_webhook = process.env.DATABASE_URL_Webhook;
    // Making random string 
    const session =await getServerSession(authOption);
    const random = (Math.random()*10000).toString();
    const userId :number =  session.user.id || 0;
    try{
        await  db.onRampTransaction.create({
            data:{
                startTime   : new Date(),
                status      : "Processing",
                token       : random,
                provider    : providerName,
                amount      : amount*100,
                userId      : Number(userId)
            }
        });
        console.log("Servser side createt onRamp transactions");
    
    }catch(err)
    {
        console.log(`The error occured in the application is ${err}`);
    }
    
    const paymentTime = setTimeout(()=>{
        return console.error("Time limit reached");
    },40000);
    try {
        await axios.post(`${Backend_URL_webhook}/hdfcwebhook`, {
        token   : random,
        userId  : Number(userId),
        amount  : Number(amount)*100
        });
        clearTimeout(paymentTime);
    } catch (error) {
        console.error("Error during axios post:", error);
        return {
            message: "Error during on ramping transaction"
        };
    }
    return {
        message:"On Ramping transaction is created"
    }  

}