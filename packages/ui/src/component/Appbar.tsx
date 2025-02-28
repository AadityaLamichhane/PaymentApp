"use client"
interface AppbarInterface{
    onSignout:any,
    onSignin :any,
    user? : {
        name?: string |null
    }
}
import { Button } from "./Button"

export const Appbar = ({user ,onSignin , onSignout}:AppbarInterface)=>{
    return (
        <>
        <div className="flex  border-b  p-2 pt-3   w-full  justify-between p-">
            <div className="flex flex-col item-center justify-center text-center font-semibold text-xl "> Esewa </div>
            <div className="flex flex-col item-center justify-center mr-3 ">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Log out " : "Log in"} </Button>
            </div>
        </div>
        
        </>
    )
}