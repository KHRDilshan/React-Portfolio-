import React from 'react'
import Single from '../Assets/single.png'
import Double from '../Assets/double.png'
import Triple from '../Assets/triple.png'

export default function Card() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 '>
                <img className='w-20 mx-auto mt-[-3rem] bg-white'  src={Single} alt='single' />
                <p className='text-2xl font-bold text-center py-8'>Single User</p>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8  '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
                </div>
                <button className='bg-emerald-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6  text-black py-3'>Start Trail</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 bg-gray-100 '>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent'  src={Double} alt='single' />
                <p className='text-2xl font-bold text-center py-8'>Single User</p>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8  '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
                </div>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6  text-emerald-400 py-3'>Start Trail</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  '>
                <img className='w-20 mx-auto mt-[-3rem] bg-white'  src={Triple} alt='single' />
                <p className='text-2xl font-bold text-center py-8'>Single User</p>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8  '>1 Granted User</p>
                    <p className='py-2 border-b mx-8 '>Send up to 2 GB</p>
                </div>
                <button className='bg-emerald-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6  text-black py-3'>Start Trail</button>
            </div>
        </div>
      
    </div>
  )
}