"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'


const data=[
    {
        id:1,
        title:"Always Fresh & Hot",
        image:"/slide1.png"
    },
    {
        id:2,
        title:"Fast delivery",
        image:"/slide2.png"
    },
    {
        id:3,
        title:"Irestiable offers",
        image:"/slide3.jpg"
    }
]

const Slider = () => {
    const [currentSlide,setCurrentSlide]=useState(0)

    // setting the timer for every 2 seconds
    useEffect(()=>{
        const interval=setInterval(()=>{
            //Condition in order to keep the sliding motion in loop
            setCurrentSlide((prev)=>(prev===data.length-1 ? 0: prev+1));
        },2000);
        return ()=> clearInterval(interval);
    },[])


    return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchisa-50 '>
      {/* Text Container */}
      <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
        <h1 className='text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl'>
            {data[currentSlide].title}
        </h1>
        <button className='bg-red-500 text-white py-4 px-8'>Order Now</button>
      </div>

      {/* Image Container */}
      <div className='w-full h-1/2 relative lg:h-full lg:w-1/2'>
        <Image src={data[currentSlide].image} alt='' fill className='object-cover'/>
      </div>
    </div>
  )
}

export default Slider
