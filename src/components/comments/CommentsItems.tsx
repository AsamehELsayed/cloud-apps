'use client'
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from 'react';
import UpdataCommentModal from './UpdataCommentModal';
import { Comment } from '@/utils/types';
import axios from 'axios';
import { useRouter } from 'next/navigation';
interface commentProps{
  comment:Comment
  userId:number
}
const CommentsItems = ({comment,userId}:commentProps) => {
    const route =useRouter()
    const [open,setOpen]=useState(false)
    const DeleteHandeler = async (e:React.FormEvent) => {
      e.preventDefault();
      try {
        axios.delete(`http://localhost:3000/api/comments/${comment.id}`)
        route.refresh()
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <div className='mb-5 rounded-lg p-3 bg-slate-800 w-1/2 mx-auto  border-gray-300'>
    <div className='flex items-center justify-between mb-2'>
       <strong className='uppercase text-white'>
         {comment.user.username}
       </strong>
       <span className='bg-yellow-700 px-1 rounded-lg text-white'>
         {comment.createdAt}
       </span>
    </div>
    <p className='text-white mb-2'>
     {comment.text}
    </p>
    
   {comment.userId === userId &&  <div className='flex justify-end items-center'>
      <FaEdit onClick={() => setOpen(true)} className='text-green-600 text-xl cursor-pointer me-3' />
      <FaTrash onClick={DeleteHandeler} className='text-red-600 text-xl cursor-pointer' />
    </div>}

    {open && 
     <UpdataCommentModal 
      setOpen={setOpen} 
      comment={comment}
     />
   }
 </div>
  )
}

export default CommentsItems
