"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SideBarComponent = ({ href, title, icon }: { href: string; title: string; icon: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();
    const selected = pathname === href;

    return (
        <div className="">
            <div className={`flex items-center  cursor-pointer p-2 pl-6 transition-all duration-300 ${selected ? "border-l-4 bg-blue-500 bg-blue-100 text-white" : "text-black"}`} 
            onClick={() => router.push(href)}
            >
            <div className="mr-3 md:justify-center items-center">
            <div>
                {icon}
            </div>
            </div>
            <div className="font-bold text-sm hidden sm:block">{title}</div>
        </div>

        </div>
        
    );
};
