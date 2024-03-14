import React from 'react'
import Laptop from '../Assets/laptop.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4 '>
     <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
     <img className='w-[500px] mx-auto my-4' src={Laptop} alt='laptop' />
     <div className='flex flex-col justify-center'>
        <p className='text-emerald-400 font-bold'>DATA ANALYTICS DASHBOARD</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor, quae tempore voluptas illum impedit fugiat veritatis nam! Enim itaque animi impedit quaerat ullam delectus odio ipsa temporibus nulla asperiores!</p>
        <buttto className='text-emerald-500 w-[200px] rounded-md font-medium my-6 mx-auto bg-black py-3 text-center md:mx-0'>Start Trail</buttto>
     </div>
     </div>
    </div>
  )
}

export default Analytics
