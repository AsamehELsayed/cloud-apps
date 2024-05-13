"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const RegisterForm = () => {
    const router= useRouter()
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const formSubmitHandler = async (e:React.FormEvent) => {
        e.preventDefault();
        if(username === "") return   setErrorMessage("Username is required");
        if(email === "") return   setErrorMessage("Email is required");
        if(password === "") return   setErrorMessage("Password is required");

        try {
            await axios.post(`http://localhost:3000/api/users/register/`,{username,email,password})
            router.refresh()
            router.replace("/")
        } catch (error:any) {
            setErrorMessage( error.response.data.message);
        }
      
    }

    return (
        <form onSubmit={formSubmitHandler} className="flex flex-col">
            {errorMessage && <div className='text-xl my-5 text-red-500'>{errorMessage}</div>}

            <input 
             className="mb-4 border rounded p-2 text-xl" 
             type="text" 
             placeholder="Enter Your Username"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
            />
            <input 
             className="mb-4 border rounded p-2 text-xl" 
             type="email" 
             placeholder="Enter Your Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
            <input 
             className="mb-4 border rounded p-2 text-xl" 
             type="password" 
             placeholder="Enter Your Password" 
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold">
              Register
            </button>
        </form>
    )
}

export default RegisterForm