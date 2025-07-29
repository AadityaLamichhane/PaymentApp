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
            <div className=" absolute w-full bg- bg-slate-160 flex border-b border-b-slate-300 p-2 pt-3  justify-between overflow-cliped bg-[#ebe6e6] z-10  ">
                <div className=" text-center font-bold text-xl ml-2  ">PaisaSewa</div>
                <div className="flex items-center justify-center mr-3">
                    <Button onClick={authenticated ? onSignout : onSignin}>{authenticated ? "Log out" : "Log in"}</Button>
                </div>
            </div>
        </>)
}