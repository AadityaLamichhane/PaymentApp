"use client"
import { Appbar } from "@repo/ui/appbar"
import { Button } from "@repo/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"
// Ensure the correct import path for authOption
export const CardElement = () => {
    const session = useSession();
    const isAuthenticated: boolean = session.status === "authenticated";
    return (
        <>
            <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} authenticated={isAuthenticated} />
        </>
    )
}