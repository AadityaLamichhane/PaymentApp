"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SideBarComponent = ({ href, icon, children ,expand }: { href: string; children : React.ReactNode; icon: React.ReactNode ,expand:Boolean}) => {
    const router = useRouter();
    const pathname = usePathname();
    const selected = pathname === href;
// Make Icons and group them to thhe component to make the changes very systematc
const onClickhandler = ()=>{
    // Get the click and the component change
    router.push(href);
}
    return (
        
<>
<div className="flex p-1">
    <div  onClick={onClickhandler} className="flex items-center group hover:bg-black hover:font-bold hover:text-white hover:text-bold p-4 cursor-pointer transition-all duration-300 rounded-xl">
        <div className="flex justify-center items-center px-auto hover:pl-1" >
            
            {icon}
            {(!expand)?<span className="cursor-pointer sidebartoggle  group-hover:scale-100 group-hover:left-28 ">{children}</span>:<></>}
            
        </div>
        <div className="pl-1 ">
            {(expand)?children:""}
        </div>
        
    </div>
    
</div>
</>
        
    );
};
