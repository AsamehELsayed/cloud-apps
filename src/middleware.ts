import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest){
    const authToken= request.cookies.get("token")
 if(!authToken){
    return NextResponse.json({message:"token not profided"})
 }
}

export const config={
    matcher:["/api/users/profile/:path*"]
}