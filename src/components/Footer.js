import React from 'react'
import img1 from "../images/facebook.png";
import img2 from "../images/instagram.png";
import img3 from "../images/linkedin.png";
import img4 from "../images/x.png";
import img5 from "../images/youtube.png";

const Footer = () => {
  return (
    <div className='bg-slate-100 px-32 pt-12 py-8 dark:bg-[#24292f] dark:text-white'>
      <div className='font-bold text-3xl ml-8'>Foodiez</div>
      <div className='flex flex-row w-full justify-evenly'>
        <div>
          <p className='font-semibold mb-3'>About Foodiez</p>
          <div className='flex flex-col gap-y-2'>
            <p className='cursor-pointer'>Who We Are</p>
            <p className='cursor-pointer'>Blog</p>
            <p className='cursor-pointer'>Work With Us</p>
            <p className='cursor-pointer'>Investor Relations</p>
            <p className='cursor-pointer'>Report Fraud</p>
            <p className='cursor-pointer'>Press Kit</p>
          </div>
        </div>
        <div>
          <p className='font-semibold mb-3'>Company</p>
          <div className='flex flex-col gap-y-2'>
            <p className='cursor-pointer'>Careers</p>
            <p className='cursor-pointer'>Team</p>
          </div>
        </div>
        <div>
          <p  className='font-semibold mb-3'>Contact Us</p>
          <div className='flex flex-col gap-y-2'>
            <p className='cursor-pointer'>Help & Support</p>
            <p className='cursor-pointer'>Partner with us</p>
            <p className='cursor-pointer'>Ride with us</p>
          </div>
        </div>
        <div>
          <p className='font-semibold mb-3 cursor-pointer'>Social Links</p>
          <div className='flex flex-row gap-x-1'>
            <img src={img1} className='w-8 h-8 cursor-pointer'/>
            <img src={img2} className='w-8 h-8 cursor-pointer'/>
            <img src={img3} className='w-8 h-8 cursor-pointer'/>
            <img src={img4} className='w-8 h-8 cursor-pointer'/>
            <img src={img5} className='w-8 h-8 cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
