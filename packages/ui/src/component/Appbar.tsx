"use client"
interface AppbarInterface {
    onSignout: any,
    onSignin: any,
    user?: {
        name?: string | null
    },
    authenticated: boolean
}
import { Button } from "./Button"

export const Appbar = ({ user, onSignin, onSignout, authenticated }: AppbarInterface) => {
    return (
        <>
            <div className="flex border-b border-b-slate-300 p-2 pt-3 w-full justify-between p-1">
                <div className="flex flex-col items-center justify-center text-center font-bold text-xl ml-2 pl-3 ">ESEWA</div>
                <div className="flex flex-col items-center justify-center mr-3">
                    <Button onClick={authenticated ? onSignout : onSignin}>{authenticated ? "Log out" : "Log in"}</Button>
                </div>
            </div>
        </>
    )
}