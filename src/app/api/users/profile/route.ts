import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";

interface Props{
    params:{id:string}
}
export async function DELETE(request:NextRequest,{params}:Props){
    const user = await prisma.user.findUnique({where:{id:parseInt(params.id)}})
    if(user){
        return NextResponse.json(user)
    }
}