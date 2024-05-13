import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'
import { verifyToken } from "@/utils/token";
interface Props{
    params:{id:string}
}
export async function DELETE(request:NextRequest,{params}:Props){
    const user = await prisma.user.findUnique({where:{id:parseInt(params.id)}})
    const userToken=verifyToken(request)
    if(!user){
        return NextResponse.json({message:"user not found"},{status:404})
    }
    if (user.id !== userToken.id  ) {
        return  NextResponse.json({message:"access denaid"},{status:403})
    }
    await prisma.user.delete({where:{id:user.id}})
    return NextResponse.json({message:"user is deleted"},{status:200})

}

export async function GET(request:NextRequest,{params}:Props){
    const user = await prisma.user.findUnique({where:{id:parseInt(params.id)}})
    if(!user){
        return NextResponse.json({message:"user not found"},{status:404})
    }
    return NextResponse.json({user},{status:200})

}


export async function PUT(request:NextRequest,{params}:Props){
    const body=await request.json()
    const user = await prisma.user.findUnique({where:{id:parseInt(params.id)}})
    if(!user){
        return NextResponse.json({message:"user not found"},{status:404})
    }
    const token =verifyToken(request)
    if (token.id!==user.id) {
        return NextResponse.json({message:"access denaied"},{status:500})
    }
    if (body.password) {
        const salt=await bcrypt.genSalt(10)
        body.password=await bcrypt.hash(body.password,salt)
    }
    const updatedUser=await prisma.user.update({where:{id:parseInt(params.id)},data:{
        username:body.username,
        email:body.email,
        password:body.password
    },select:{
        username:true,email:true
    }})
    return NextResponse.json(updatedUser,{status:200})

}