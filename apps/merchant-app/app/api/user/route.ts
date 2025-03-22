import { NextResponse } from "next/server"
export const GET = async () => {
    console.log("Geeting the responce of the get from the api on the user ");
        return NextResponse.json({
        message: "hi there"
    })
}