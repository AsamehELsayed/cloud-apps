import React from 'react'
const articles = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const Loading = () => {
    return (

        <div className='h-screen animate-pulse'>
    <div className='text-white container flex justify-center text-center mt-10'>
        <div className='rounded lg:w-3/4 md:w-1/2 bg-slate-800 p-10'>
         <h1 className='text-4xl'></h1>
         <p className='text-md mt-5 '></p>
        </div>
    </div>
    <div className='mb-5 rounded-lg p-3 bg-slate-800 w-1/2 mx-auto h-10 mt-20 border-gray-300'></div>
    <div className='mb-5 rounded-lg p-3 bg-slate-800 w-1/2 mx-auto h-1/3 mt-10 border-gray-300'></div>
    </div>
    )
       
}

export default Loading
