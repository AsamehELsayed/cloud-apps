import AddComments from '@/components/comments/AddComments'
import CommentsItems from '@/components/comments/CommentsItems'
import { verifyTokenForPage } from '@/utils/token'
import { Article, Comment } from '@/utils/types'
import { cookies } from 'next/headers'
import React from 'react'
interface singleAtriclePageProps{
    params:{article:string}
}
const article = async({params}:singleAtriclePageProps) => {
  const token = cookies().get("token")?.value as string || ""
  const userId=verifyTokenForPage(token)?.id as number

    const response =await fetch(`http://localhost:3000/api/articles/${params.article}`)
    const article:Article =await response.json()
    if (!response.ok) {
        throw new Error("faild to fetch article")
    }
  return (
    <div className='min-h-screen '>
    <div className='text-white container flex justify-center text-center mt-10'>
        <div className='rounded lg:w-3/4 md:w-1/2 bg-slate-800 p-10'>
         <h1 className='text-4xl'>{article.title}</h1>
         <p className='text-md mt-5 '>{article.description}</p>
        </div>
    </div>
    <AddComments articleId={article.id} userId={userId}></AddComments>
    {article.comment?.map((com: Comment)=>(

    <CommentsItems key={com.id} comment={com} userId={userId}></CommentsItems>
    
    ))}
    </div>
  )
}

export default article
