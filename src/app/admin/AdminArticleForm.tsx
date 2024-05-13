"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { unknown } from 'zod';

const AddArticleForm = () => {
    const router =useRouter()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [success, setSuccess] = useState("")
    const [failed, setFailed] = useState("")
    const formSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
        if (title === "") return setFailed("Title is required");
        if(title.length<2)return setFailed("Title required 2 character");
        if (description === "") return setFailed("Description is required");
            setFailed("")
            await axios.post("http://localhost:3000/api/articles", { title, description })
            router.refresh()
            return setSuccess("Article uploaded")

        } catch (error: any) {
            console.log(error)
            return setFailed(`${error.response.data.message}`)
        }
    }

    return (
        <form onSubmit={formSubmitHandler} className="flex flex-col">
            <span className='mb-5'>
            {success !== "" ? <div className='text-green-500'>{success}</div> :failed !== "" && <div className='text-red-500'>{failed}</div>}
            </span>
            <input
                className="mb-4 border rounded p-2 text-xl"
                type="text"
                placeholder="Enter Article Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className='mb-4 p-2 lg:text-xl rounded resize-none'
                rows={5}
                placeholder='Enter Artilce Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button type="submit" className="text-2xl text-white bg-blue-700 hover:bg-blue-900 p-2 rounded-lg font-bold">
                Add
            </button>
        </form>
    )
}

export default AddArticleForm;