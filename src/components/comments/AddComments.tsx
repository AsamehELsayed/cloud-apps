'use client'
import { verifyTokenForPage } from '@/utils/token';
import axios from 'axios';import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
interface Props{
    articleId:number,
    userId:number
}
const AddComments = ({articleId,userId}:Props) => {
    const router =useRouter()
    const [text, setText] = useState("");
    const formSubmitHandler = async (e:React.FormEvent) => {

        e.preventDefault();
        if(text === "") return toast.error("Please write something");
        
        try {
            axios.post("http://localhost:3000/api/comments",{text,articleId,userId}
              
            )
            setText("");
            router.refresh()
        } catch (error:any) {
            toast.error(error?.response?.data.message);
            console.log(error);
        }
    }
  return (
    
    <div className='mx-auto w-1/2 mt-20 mb-2'>
       <form onSubmit={formSubmitHandler}>
            <input 
             className="rounded-lg text-xl p-2 w-full bg-slate-800  focus:shadow-md" 
             type="text" 
             placeholder="Add a comment..."
             value={text}
             onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className='bg-green-700 text-white mt-2 p-1 w-min text-xl rounded-lg hover:bg-green-900 transition'>
                Comment
            </button>
        </form>
    </div>
  )
}

export default AddComments
