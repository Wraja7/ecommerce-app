import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div >

      <div className='text-2xl text-center pt-8 border-t'> 
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>STYLENZA was created with a vision to redefine the online shopping experience through innovation, elegance, and trust. What began as a simple idea has grown into a thoughtfully designed platform where customers can seamlessly discover, explore, and shop a diverse range of products—anytime, anywhere.</p>
            <p>From the very beginning, we’ve been dedicated to curating high-quality collections that reflect both style and substance. Spanning fashion, beauty, electronics, and home essentials, every product is carefully sourced from trusted brands and partners to ensure exceptional quality and lasting value.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>At STYLENZA, our mission is to empower customers with choice, convenience, and confidence. We are committed to delivering a seamless and elevated shopping experience—one that goes beyond expectations, from discovery and purchase to delivery and ongoing support.</p>
        </div>
      </div>
      
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Every product is carefully curated and thoroughly vetted to meet our highest standards of quality and reliability.</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Our intuitive platform and seamless checkout experience make shopping simple, fast, and stress-free.</p>
        </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our expert support team is always here to assist you at every step, ensuring a smooth and satisfying experience from start to finish.</p>
        </div>
        
      </div>

      <NewsletterBox/>
       
    </div>
  )
}

export default About