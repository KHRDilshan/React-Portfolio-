import React from 'react'
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center' >
        <p className='text-emerald-400 font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='text-3xl md:text-7xl sm:text-6xl  font-bold md:py-4'>Grow with data</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl font-bold py-2'>Fast, flexible financing for </p>
            <ReactTyped
            className='md:text-5xl sm:text-4xl font-bold md:pl-4 pl-2' 
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
             />
        </div>
        <p className='md:text-2xl text-xl font-semibold text-gray-500 '>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-emerald-500 w-[200px] rounded-md font-medium my-6 mx-auto text-black py-3 '>Get Started</button>
      </div>
    </div>
  )
}

export default Hero
