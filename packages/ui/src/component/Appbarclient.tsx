"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Appbar } from "./Appbar"
import { useRouter } from "next/navigation";

export async function AppbarClient(){
    const route = useRouter();
    const session = useSession();
    const user =   session.data?.user ; 
    const authenticated:boolean = user ? true:false;

    console.log(`The user is ${authenticated} in line no 10 `);
    console.log(`The user is ${user} `);
    return(
    <>
        <Appbar user={user} authenticated={authenticated} onSignin={signIn} onSignout={async()=>{
            // signout the user and then routing to the signin page
            await signOut();
             route.push("/api/auth/signin")
        }}/>
    </>
    )
}