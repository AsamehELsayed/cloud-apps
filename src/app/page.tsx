import React from 'react'
import Header  from "@/components/header/headers"
import Hero from '@/components/home/Hero'
import WebHostingPlan from '@/components/home/Plans'
const page = () => {
  return (
    <section className='container justify-center text-white'>
      <Hero/>
      <div className='grid lg:grid-cols-3 place-content-center gap-3 container place-items-center '>
      <WebHostingPlan/>
      <WebHostingPlan/>
      <WebHostingPlan/>
      </div>
    </section>
  )
}

export default page
