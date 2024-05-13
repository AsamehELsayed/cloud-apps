
import ArticlesItem from '@/components/articles/articlesItem'
import React from 'react'
import { Article } from "@prisma/client";
import Pagination from '@/components/articles/pagination'
import Search from '@/components/articles/search'
import { getAllArticles, getAritcleCount } from '@/apiCall/articlesApicall';
interface ArticlePageProps {
  searchParams: { pageNumber: string }
}
const Articles = async ({ searchParams }: ArticlePageProps) => {
  const { pageNumber } = searchParams
  const Articles: Article[] = await getAllArticles(pageNumber)
  const count = await getAritcleCount()
  const totalPages = Math.ceil(count / 9)
  

  return (
    <section className='container justify-items-center  m-auto px-5 bg-slate-900 text-white'>
      <Search ></Search>
      <div className='flex items-center justify-center flex-wrap gap-7 '>
        {Articles.map(item =>
          <ArticlesItem item={item} key={item.id} route='/articles'/>

        )}
      </div>
      <Pagination totalPages={totalPages} route={"./articles?pageNumber="} currentpage={parseInt(pageNumber)}></Pagination>
    </section>
  )
}

export default Articles