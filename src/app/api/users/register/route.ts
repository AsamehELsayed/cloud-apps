import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import bcrypt from 'bcryptjs'
import { registerDto } from "@/utils/dto";
import { registerSchema } from "@/utils/validation";
import { generateToken } from "@/utils/token";
import { serialize } from "cookie";



export async function POST(request:NextRequest){
    const body=await request.json() as registerDto
    const user=await prisma.user.findUnique({where:{email:body.email}})
    if(user){
        return NextResponse.json({ message: "user is already found"}, { status: 400 });
    }
    const validation = registerSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 });
    }
 const salt= await bcrypt.genSalt(10)
 const hashedpassword= await bcrypt.hash(body.password,salt)
    const newUser= await prisma.user.create({
        data:{
            username:body.username,
            password:hashedpassword,
            email:body.email
        },
        select:{
            username:true,
            isAdmin:true,
            id:true
        }
    })
    const payload={
        username:newUser.username,
            isAdmin:newUser.isAdmin,
            id:newUser.id
    }

    const token= generateToken(payload)
    const cookie= serialize("token",token,{
        httpOnly:true,
        sameSite:"strict",
        path:"/",
        maxAge:60 * 60 * 24 *30
    })
return NextResponse.json({newUser,token},{status:200,headers:{"Set-Cookie":cookie}})
}