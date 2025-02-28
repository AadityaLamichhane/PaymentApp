"use client"
import { Button }  from "@repo/ui/button"
import { Appbar } from "@repo/ui/appbar"
import {  signIn, signOut , useSession } from "next-auth/react"
export const CardElement = () => {
    const session = useSession();
    return (
        <>
            <div>
                <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user}></Appbar>
            </div>
        </>
    )
}