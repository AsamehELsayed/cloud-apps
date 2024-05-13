import axios from 'axios'
import React from 'react'
import ArticleCom from './article'
import { Article } from '@/utils/types'

const AdminArticlesTable = async () => {
  const {data}=await axios.get("http://localhost:3000/api/articles/")
 
  return (
    <div className="bg-gray-900 text-white p-4">
   <table className="w-full">
  <thead>
    <tr>
      <th className="py-2">Title</th>
      <th className="py-2">Description</th>
      <th className="py-2">Created At</th>
      <th className="py-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    {data?.map((item:Article) => (
      <ArticleCom key={item.id} item={item}></ArticleCom>
    ))}
  </tbody>
</table>

  </div>
  )
}

export default AdminArticlesTable