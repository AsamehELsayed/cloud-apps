import prisma from "@/utils/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request:NextRequest){

    try {
        const count =await prisma.article.count()
        return NextResponse.json(count,{status:200})
    } catch (error) {
        return NextResponse.json({message:"internal server error"},{status:200});

    }
}