"use client";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
console.log("This application is working properly ")
export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <RecoilRoot>
            <SessionProvider>
                {children}
            </SessionProvider>
        </RecoilRoot>
    );
};