'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useState, Dispatch, SetStateAction, FormEvent } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { toast } from 'react-toastify';
interface UpdateArticleModalProps {
    setOpen: Dispatch<SetStateAction<boolean>>,
    item:{
      description:string,
      id:number
    }
}
const UpdateArticle = ({setOpen,item}:UpdateArticleModalProps) => {
  const router =useRouter()
  const [updatedText, setUpdatedText] = useState(item.description);
  const formSubmitHandler = async (e: FormEvent) => {
      e.preventDefault();
      if(updatedText === "") return toast.info("Please write something");
      console.log(item.id)
      try {
          await axios.put(`http://localhost:3000/api/articles/${item.id}`,{description:updatedText})
          router.refresh()

          setOpen(false);
          return toast.success("updated")
      } catch (error:any) {
          toast.error(error?.response?.data?.message);
          console.log(error);
      }
  }
  return (
    
    
       <div className='fixed top-0 left-0 bottom-0 right-0 z-10 bg-black bg-opacity-40 flex items-center justify-center'>
      <div className='w-11/12 lg:w-2/4 bg-slate-700 rounded-lg p-3'>
        <div className='flex justify-end items-start mb-5'>
           <IoMdCloseCircleOutline onClick={() => setOpen(false)} className='text-red-500 cursor-pointer text-3xl' />
        </div>
        <form onSubmit={formSubmitHandler}>
            <input 
             type="text" 
             placeholder='Edit Article...'
             className='text-xl rounded-lg p-2 w-full bg-slate-600 border-none mb-2 text-white focus:outline-none focus:bg-slate-900 ' 
             value={updatedText}
             onChange={(e) => setUpdatedText(e.target.value)}
            />
            <button type="submit" className='bg-green-700 w-full text-white mt-2 p-1 text-xl rounded-lg hover:bg-green-900 transition'>
                Edit
            </button>
        </form>
      </div>
    </div>

  )
}

export default UpdateArticle
