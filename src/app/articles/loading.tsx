import React from 'react'
const articles = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const Loading = () => {
    return (
        <div className='container justify-items-center  m-auto px-5 bg-slate-900 text-white animate-pulse h-full'>
            <div className="my-4 w-1/2 text-center mx-auto  bg-slate-700 rounded p-5 text-xl"></div>
            <div className='flex items-center justify-center flex-wrap gap-7 '>
                {articles.map((item) =>
                    <div className='rounded m-4 p-4 bg-slate-800 lg:w-1/4 shadow-lg' key={item}>
                        <h1 className='font-black text-blue-800 line-clamp-1 bg-slate-900 p-5 rounded'></h1>
                        <p className='font-light line-clamp-2 my-4 rounded bg-slate-700 p-10'></p>
                        <div className='text-white bg-slate-900 rounded p-3 block w-full'></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Loading
