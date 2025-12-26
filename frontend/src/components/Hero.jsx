import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className=' flex flex-col sm:flex-row border border-gray-400'>
        {/* {Hero left side} */}

        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-[#f7f5f2] '>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141] text-gray-600' ></p>
                    <p className='font-medium text-sm md:text-base text-gray-600'>NEW SEASON DROP</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed text-gray-800'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base hover:tracking-wider transition-all duration-300 text-gray-600'>EXPLORE COLLECTION</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141] text-gray-600'></p>
                </div>
            </div>
        </div>
        {/* {Hero Right side} */}
          
        <img className=' w-full sm:w-1/2' src={assets.hero3} alt="" />
        
    </div>
  )
}

export default Hero