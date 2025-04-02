"use client"
import { ExitStatus } from "typescript"
import { SideBarComponent } from "./SideBarComponent"
import { useState } from "react"
// Icons Fetched from https://heroicons.com/
function HomeIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
}
function TransferIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
}

function TransactionsIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
  
}
function P2pTransactionsIcon()
    {
    return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
    </svg>)

}
export const SideBarContainer = ()=>{
    const [expand, setExpand] = useState<boolean>(false);
    const toggleExpand = () => {
        console.log( `The state of the expand applications is ${expand}`);
        setExpand((prev) => !prev); // Correct way to update state based on the previous value
        };
    return (
        <>
              <div
                className={`${
                  expand ? "w-40" : "w-26"} border-solid bg-slate-160 border-r border-slate-300 h-screen pt-28 `}
              >
                <div className="flex flex-col text-gray-800 p-2">
                  <SideBarComponent
                    href={"/dashboard"}
                    icon={<HomeIcon />}
                    children={"Dashboard"}
                    expand={expand}
                  />
                  <SideBarComponent
                    href={"/transfer"}
                    icon={<TransferIcon />}
                    children={"Transfer"}
                    expand={expand}
                  />
                  <SideBarComponent
                    href={"/transactions"}
                    icon={<TransactionsIcon />}
                    children={"Transactions"}
                    expand={expand}
                  />
                  <SideBarComponent
                    href={"/p2pfund"}
                    icon={<P2pTransactionsIcon />}
                    children={"Payment"}
                    expand={expand}
                  />
                </div>
                <button  className="  scale-0 sm:scale-100 lg:scale-100"onClick={() => toggleExpand()}>Change</button>
              </div>
        </>
    )
}