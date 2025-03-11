import { NextRequest, NextResponse } from "next/server";
import express from "express"
import { getServerSession } from "next-auth";
import { authOption } from "../../lib/auth";

export const GET = async (req: NextRequest , res:NextResponse) => {
    // Get the data from the backend about the user 
    const user = await getServerSession(authOption);
    return NextResponse.json({
        msg:user
    })
};
