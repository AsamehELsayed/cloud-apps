import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import bcrypt from 'bcryptjs'
import { loginDto} from "@/utils/dto";
import { loginSchema } from "@/utils/validation";
import { generateToken } from "@/utils/token";
import { serialize } from "cookie";

export async function POST(request:NextRequest) {
    try {
        const body = await request.json() as loginDto
        const validation=loginSchema.safeParse(body)
        if(!validation.success){
            return NextResponse.json(
                {message:validation.error.errors[0].message},{status:400}
            )
        }
        const user=await prisma.user.findUnique({where:{email:body.email}})
        if (!user) {
            return NextResponse.json(
                {message:"invalid email or password"},{status:400}
            )
        }
        const isPasswordMatch= await bcrypt.compare(body.password,user.password)
        if(!isPasswordMatch){
            return NextResponse.json(
                {message:"invalid email or password"},{status:400}
            )
        }
        const payload={
            id:user.id,
            isAdmin:user.isAdmin,
            username:user.username
        }
        const token = generateToken(payload)
        const cookie= serialize("token",token,{
            httpOnly:true,
            sameSite:"strict",
            path:"/",
            maxAge:60 * 60 * 24 *30
        })
        console.log("done")
        return NextResponse.json(
            {message:"welcome back",token}
            ,{status:200,headers:{"Set-Cookie":cookie}}
        )
    } catch (error) {
        console.error("An error occurred:", error)
        return NextResponse.json(
            {message:"An error occurred"},{status:500}
        )
    }
}
