"use server"
import db from "@repo/db/client"
import axios from "axios"
import { getServerSession } from "next-auth"
import { authOption } from "./auth"
export async function  onRampTransaction(amount :number , providerName:string ){
    const Backend_URL_webhook = process.env.DATABASE_URL_Webhook;
    console.log(`The obtained Backedn url is ${Backend_URL_webhook}`)
    // Making random string 
    const session =await getServerSession(authOption);
    
    const random = (Math.random()*10000).toString();
    const userId :number =  session?.user.id || 0;
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
    // So in the real applicatioon i would do this and redirect the user to the application to 
    // Go to the application and make the payment after which i would have to get the 
    // Webhook handler up to handle this request
    
    const paymentTime = setTimeout(()=>{
        return console.error("Time limit reached");
    },40000);
    try {
        await axios.post(`${Backend_URL_webhook}/bankwebhook`, {
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