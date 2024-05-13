import { NextRequest, NextResponse } from "next/server";
import { Article } from "@prisma/client";
import prisma from "@/utils/db";


export async function GET(request:NextRequest) {
   
    try {
        const SearchText=request.nextUrl.searchParams.get("searchText")
    let article
    if (SearchText) {
        
        article=await prisma.article.findMany({
            where:{title:{
                startsWith:SearchText,
                mode:"insensitive"
        }}})
    }else{
        article=await prisma.article.findMany({
            take:6
        })
    } 
    console.log(article)
    return NextResponse.json(article,{status:200})
    } catch (error) {
        return NextResponse.json(error,{status:500})

    }
}