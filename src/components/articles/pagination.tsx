import Link from 'next/link';
import React from 'react'
interface paginationProps {
  totalPages: number,
  route:string
  currentpage:number
}
const pagination = ({totalPages,route,currentpage}:paginationProps) => {
  console.log(totalPages)
  const pages=Array.from(Array(totalPages).keys())
  return (
    <div className='flex justify-center items-center my-10'>
     {currentpage !== 1 && <Link className='bg-slate-700 p-4 rounded mx-1'  href={`${route}${currentpage-1}`}>back</Link>}
        {pages.map(page =><Link className={`${currentpage !== page+1 ?  "bg-slate-700" :"bg-slate-800"} p-4 rounded mx-1`} href={`${route}${page + 1}`} key={page +1}>{page+1}</Link>)}
     {currentpage !== totalPages && <Link className='bg-slate-700 p-4 rounded mx-1' href={`${route}${currentpage+1}`} >next</Link>}
    </div>
  )
}

export default pagination
