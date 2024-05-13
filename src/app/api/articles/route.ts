import { NextRequest, NextResponse } from "next/server";
import { Article } from "@prisma/client";
import prisma from "@/utils/db";
import { CreatedArticleDto } from "@/utils/dto";
import { createArticleSchema } from "@/utils/validation";


/**
 * @route api/articles
 * @method GET
 * @public
 */
export async function GET(request:NextRequest){

    try {
        const pageNumber=request.nextUrl.searchParams.get('pageNumber') as unknown as number
        let articles
        const currentPage= (pageNumber-1) * 9
        if (pageNumber) { 
            articles = await prisma.article.findMany({
                 skip: currentPage ,
                 take:9
             })
        }else{
            articles = await prisma.article.findMany({ take:9})
        }
        return NextResponse.json(articles,{status:200})
    } catch (error) {
        return NextResponse.json({message:"internal server error"},{status:200});

    }
}
/**
 * @route api/articles/
 * @method POST
 * @public
 */

export async function POST(request:NextRequest){
 const body= await request.json() as CreatedArticleDto
 const validation = createArticleSchema.safeParse(body);
 if (!validation.success) {
   return NextResponse.json({ message: validation.error.errors[0].message }, { status: 400 });
 }

 const newArticle:Article=await prisma.article.create({
    data:{
        title:body.title,
        description:body.description
    }
 })
 return NextResponse.json(newArticle)
}
