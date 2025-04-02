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
            <div className="  bg- bg-slate-160 flex border-b border-b-slate-300 p-2 pt-3 w-full justify-between  ">
                <div className="flex flex-col items-center justify-center text-center font-bold text-xl ml-2 pl-3 ">PeeSewa</div>
                <div className="flex flex-col items-center justify-center mr-3">
                    <Button onClick={authenticated ? onSignout : onSignin}>{authenticated ? "Log out" : "Log in"}</Button>
                </div>
            </div>
        </>)
}