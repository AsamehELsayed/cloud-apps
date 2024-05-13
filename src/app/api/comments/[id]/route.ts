import prisma from "@/utils/db";
import { verifyToken } from "@/utils/token";
import { JWTPayload } from "@/utils/types";
import { NextRequest, NextResponse } from "next/server";

interface Props{
    params:{id:string}
}
export async function PUT(request:NextRequest,{params}:Props){
    const body= await request.json()
    if ( body.text=== "") {
        return NextResponse.json({message:"write some thing to update"},{status:404})
    }
    const comment =await prisma.comment.findUnique({where:{id:parseInt(params.id)}})
    const token =verifyToken(request) as JWTPayload
    if (!comment) {
        return NextResponse.json({message:"Comment not found"},{status:404})
    }
    if (token.id !== comment.userId) {
        return NextResponse.json({message:"Access denaied"},{status:403})
    }
    const updatedComment=await prisma.comment.update({where:{id:parseInt(params.id)},data:{
        text:body.text
    }})
    return NextResponse.json(updatedComment,{status:200})

}
export async function DELETE(request:NextRequest,{params}:Props){
    const comment =await prisma.comment.findUnique({where:{id:parseInt(params.id)}})
    const token =verifyToken(request) as JWTPayload
    if (!comment) {
        return NextResponse.json({message:"Comment not found"},{status:404})
    }
    if (token.isAdmin || token.id === comment.userId) {
        await prisma.comment.delete({where:{id:parseInt(params.id)}})
    } else {
        console.log("Access denied - token.id:", token.id, "comment.userId:", comment.userId, "token.isAdmin:", token.isAdmin);
        return NextResponse.json({ message: "Access denied" }, { status: 403 });
    }
    return NextResponse.json({message:"comment has been deleted"},{status:200})

}