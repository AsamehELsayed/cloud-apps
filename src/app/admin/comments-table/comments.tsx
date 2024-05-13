"use client"

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'
type comment={
  user:{
    username:string
  },
  article:{
    title:string
  },
  createdAt:Date,
  id:number,
  text:string
  }
interface Props {
  item: comment
}

const CommentCom = ({ item }: Props) => {
  const router=useRouter()

  const deleteHandler = async () => {
    if (!item.id) {
      console.error('ID is missing')
    }

    try {
      await axios.delete(`http://localhost:3000/api/comments/${item.id}`)
      router.refresh()
      return toast.success("deleted")
    } catch (error) {
      console.error('Error deleting article:', error)
    }
  }

  return (
    <tr key={item.id} >
      <td className="p-2 rounded-xl bg-slate-600 w-1/5">{item.user.username}</td>
      <td className="p-2 rounded-xl bg-slate-600 w-1/5">{item.article.title}</td>
      <td className="p-2 rounded-xl bg-slate-600 w-1/5">{item.text}</td>
      <td className="p-2 rounded-xl bg-slate-600 w-1/12">{item.createdAt.toString()}</td>
      <td className="p-2 rounded-xl bg-slate-600 w-1/5 text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold   rounded mr-2">Update</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold  rounded mr-2" onClick={deleteHandler}>Delete</button>
      </td>
    </tr>
  )
}

export default CommentCom