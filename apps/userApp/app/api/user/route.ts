import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        console.log("Hi there from the route in the user API");
        return NextResponse.json({ msg: "This was hit by the backend" });
    } catch (error) {
        console.error("Error handling GET request:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};
