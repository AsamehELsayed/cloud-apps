'use client'
import React from 'react'

interface ErrorPageProps{
    error:Error;
    reset:()=>void
}
const error = ({error,reset}:ErrorPageProps) => {
  return (
   
      <div className='pt-9 text-center'>
        <div className='text-3xl text-red-500'>somethings is worng</div>
        <h1 className='text-5xl m-10 text-white'>Error is :{error.message}</h1>
        <button className='bg-white rounded-lg text-3xl' onClick={()=>reset()}>Try Again</button>
      </div>
  )
}

export default error
