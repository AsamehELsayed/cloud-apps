import axios from 'axios'
import React from 'react'
import { Article } from '@/utils/types'
import CommentCom from './comments'

const AdminArticlesTable = async () => {
  const {data}=await axios.get("http://localhost:3000/api/comments/")
 
  return (
    <div className="bg-gray-900 text-white p-4">
   <table className="w-full">
  <thead>
    <tr>
      <th className="py-2">user</th>
      <th className="py-2">article</th>
      <th className="py-2">text</th>
      <th className="py-2">Created At</th>
      <th className="py-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    {data?.map((item:any) => (
      <CommentCom key={item.id} item={item}></CommentCom>
    ))}
  </tbody>
</table>

  </div>
  )
}

export default AdminArticlesTable