import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest){
    try {
        cookies().delete("token")
        return NextResponse.json({message:"logout success"},{status:200})
    } catch (error) {
        return NextResponse.json({message:"internal server error"},{status:500})

    }
}