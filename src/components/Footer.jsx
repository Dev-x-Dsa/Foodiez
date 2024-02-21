import React, { useContext } from 'react'
import img1 from "../images/facebook.webp";
import img2 from "../images/instagram.webp";
import img3 from "../images/linkedin.webp";
import img4 from "../images/x.webp";
import img5 from "../images/youtube.webp";
import img6 from "../images/github-mark.webp";
import "./hero.css";
import { MenuContext } from '../ContextAPI/MenuContext';


const Footer = () => {
  return (
    <div className={`bg-[#f6f8fc] footer-pad dark:bg-[#24292f] dark:text-white font-Open`}>
      <div className='font-bold text-3xl footer-text ml-6 text-zinc-700 dark:text-slate-300 mb-3'>Foodiez</div>
      <div className='flex footer w-full'>
        <div className="flex footer-inner">
          <div>
            <p className='font-semibold mb-3 text-zinc-700 dark:text-slate-300 text-xl'>About Foodiez</p>
            <div className='flex flex-col gap-y-2 footer-div'>
              <p className='cursor-pointer'>Who We Are</p>
              <p className='cursor-pointer'>Blog</p>
              <p className='cursor-pointer'>Work With Us</p>
              <p className='cursor-pointer'>Investor Relations</p>
              <p className='cursor-pointer'>Report Fraud</p>
              <p className='cursor-pointer'>Press Kit</p>
            </div>
          </div>
          <div>
            <p className='font-semibold mb-3 text-zinc-700 dark:text-slate-300 text-xl'>Company</p>
            <div className='flex flex-col gap-y-2 footer-div'>
              <p className='cursor-pointer'>Careers</p>
              <p className='cursor-pointer'>Team</p>
              <p className='cursor-pointer'>Values</p>
              <p className='cursor-pointer'>Mission</p>
            </div>
          </div>
        </div>
        <div className='flex footer-inner'>
          <div>
            <p className='font-semibold mb-3 text-zinc-700 dark:text-slate-300 text-xl'>Contact Us</p>
            <div className='flex flex-col gap-y-2 footer-div'>
              <p className='cursor-pointer'>Help & Support</p>
              <p className='cursor-pointer'>Partner with us</p>
              <p className='cursor-pointer'>Register as Restaurant</p>
            </div>
          </div>
          <div>
            <p className='font-semibold mb-3 cursor-pointer text-zinc-700 dark:text-slate-300 text-xl'>Social Links</p>
            <div className='flex flex-row flex-wrap gap-y-2 gap-x-1'>
              <img src={img1} className='w-8 h-8 cursor-pointer dark:invert' alt='facebook link' />
              <img src={img2} className='w-8 h-8 cursor-pointer dark:invert' alt='instagram link' />
              <img src={img3} className='w-8 h-8 cursor-pointer dark:invert' alt='linkedin link' />
              <img src={img4} className='w-8 h-8 cursor-pointer dark:invert' alt='x link' />
              <img src={img5} className='w-8 h-8 cursor-pointer dark:invert' alt='youtube link' />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col align-middle justify-center items-center">
        <div className='font-semibold mb-1 text-zinc-700 dark:text-slate-300 text-xl'>© Foodiez</div>
        <div class="flex flex-col footer-end text-zinc-700 dark:text-slate-300 text-lg px-2 ">
          <div class="pr-2">Created by <a href='https://github.com/Dev-x-Dsa' class="cursor-pointer"> <img src={img6} className='w-5 h-5 dark:invert inline' alt="GitHub Link"></img> <span class="underline decoration-blue-600 hover:decoration-green-400">Dev-x-Dsa</span> </a></div>
          <div className='footer-end-2'> | </div>
          <div class="pl-2">Powered by React ♥</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
