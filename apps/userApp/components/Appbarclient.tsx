"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Appbar } from "@repo/ui/appbar"
import { useRouter } from "next/navigation";

export  function AppbarClient(){
    const route = useRouter();
    const session =   useSession();
    const authenticated = session.status === "authenticated";

    return(
    <>
    <div >
        <Appbar 
            user={session.data?.user} 
            authenticated={authenticated} 
            onSignin={() => signIn()} 
            onSignout={async () => {
                await signOut({ callbackUrl: "/api/auth/signin" });
            }}
        />
    </div>
    </>
    )
}