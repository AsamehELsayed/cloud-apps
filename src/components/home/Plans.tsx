import { TiTick } from 'react-icons/ti';

const WebHostingPlan = () => {
  return (
    <div className=' lg:col-span-1 rounded p-4 bg-slate-800 mb-7 '>
        <h3 className='text-3xl font-bold text-purple-700'>Premium</h3>
        <strong className='text-3xl font-bold text-white mt-10'>
            $4.99/mo
        </strong>
        <span className='bg-red-200 text-red-900 rounded-full px-2 py-1 font-semibold'>
            10% OFF
        </span>
        <div className='mt-6'>
            <h5 className='text-2xl mb-1 font-semibold text-purple-700'>
                Top Features
            </h5>
            <div className='flex items-center text-green-700 mb-1 ps-3'>
                <TiTick /> 100 Website
            </div>
            <div className='flex items-center text-green-700 mb-1 ps-3'>
                <TiTick /> 100 GB SSD Storage
            </div>
            <div className='flex items-center text-green-700 mb-1 ps-3'>
                <TiTick /> Weekly Backups
            </div>
            <div className='flex items-center text-green-700 mb-1 ps-3'>
                <TiTick /> Unlimited Bandwidth
            </div>
            <div className='flex items-center text-green-700 mb-1 ps-3'>
                <TiTick /> Free SLL
            </div>
            <div className='flex items-center text-green-700 mb-1 ps-3'>
                <TiTick /> Free Email
            </div>
        </div>
        <button className='mt-4 border-2 border-gray-900 text-gray-900 text-2xl font-bold p-1 rounded-full hover:text-white hover:bg-gray-900 transition w-full'>
            BUY NOW
        </button>
    </div>
  )
}

export default WebHostingPlan