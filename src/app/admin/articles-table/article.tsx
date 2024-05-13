"use client"

import { Article } from '@/utils/types'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import UpdateArticle from './UpdateArticle'
import Link from 'next/link'

interface Props {
  item: Article
}

const ArticleCom = ({ item }: Props) => {
  const[open,setOpen]=useState(false)
  const router=useRouter()

  const deleteHandler = async () => {
    if (!item.id) {
      console.error('ID is missing')
    }

    try {
      await axios.delete(`http://localhost:3000/api/articles/${item.id}`)
      router.refresh()
      return toast.success("deleted")
    } catch (error) {
      console.error('Error deleting article:', error)
    }
  }

  return (
    <tr key={item.id} className="p-5 w-full">
      <td className="p-2 rounded-xl bg-slate-600 w-1/12">{item.title}</td>
      <td className="p-2 rounded-xl bg-slate-600 w-1/12">{item.description}</td>
      <td className="p-2 rounded-xl bg-slate-600 w-1/12">{item.createdAt.toString()}</td>
      <td className="p-2 rounded-xl bg-slate-600 w-1/12 text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 "onClick={()=>setOpen(!open)}>Update</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={deleteHandler}>Delete</button>
        <Link href={`../articles/${item.id}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" >View</Link>
      </td>
     {open && <UpdateArticle item={item} setOpen={setOpen}></UpdateArticle>}
    </tr>
  )
}

export default ArticleCom