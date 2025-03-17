import NextAuth from "next-auth"
import { authOption } from "../../../lib/auth"
import { NextResponse } from "next/server";

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };