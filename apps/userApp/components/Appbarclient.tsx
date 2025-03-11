"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Appbar } from "@repo/ui/appbar"
import { useRouter } from "next/navigation";

export  function AppbarClient(){
    const route = useRouter();
    const session = useSession();
    const user =   session.data?.user ; 
    const authenticated:boolean = user ? true:false;

    console.log(`The user is ${authenticated} in line no 10 `);
    console.log(`The user is ${user} `);
    return(
    <>
    
        <Appbar user={user} authenticated={authenticated} onSignin={signIn} onSignout={()=>{
            // signout the user and then routing to the signin page
             signOut();
             route.push("/api/auth/signin")
        }}/>
    </>
    )
}