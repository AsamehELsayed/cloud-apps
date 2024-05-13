import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'
import { JWTPayload } from './types'

export function generateToken(JWTPayload:JWTPayload){
 const privateKey=process.env.JWT_KEY as string
 const token=jwt.sign(JWTPayload,privateKey,{expiresIn:"30d"})
 return token
}
export function verifyToken(request: NextRequest){
    const authToken= request.cookies.get("token")
    const token=authToken?.value as string
    if(!token){
        return NextResponse.json({message:"token not provided"})
    }
    const userToken=jwt.verify(token, process.env.JWT_KEY as string) as any 
    return userToken
}

export function verifyTokenForPage(token:string ){
    if (token) {
        try {
            const userToken = jwt.verify(token, process.env.JWT_KEY as string) as JWTPayload;
            return userToken
          } catch (err) {
            console.error("Error verifying token:", err);
          }
    }
    return null
}