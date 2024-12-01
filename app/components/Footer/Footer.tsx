import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <div>

<div className=' flex justify-between mt-36'>
     <div className='ms-12'>
      <p className='text-[18px] leading-5 font-semibold'>Subscribe to our newsletter</p>
      <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </div>
    <div className='me-12'>
    <div className='flex gap-4 '>
     <Input type='Email' placeholder='Email' className='w-[210px] h-[38px]'/>
     <Button className='bg-white text-black hover:bg-white hover:text-black  hover:border-solid hover:border-black hover:border-2 border-solid border-black border-2'>Subscribe</Button>

     </div>
     <div>
      <p className="ms-1 mt-1 text-[12px]">By subscribing you agree to with our <span className='hover:underline'>Privacy Policy</span></p>
     </div>

    </div>
    </div>
    <div className='mt-9'>
    <div className='flex   justify-around gap-[52]'>
        <div>
          <img src="/images/Ddsgnr Library.png" alt='image'/>
        </div>
        <div>
          <ul className='text-[14px] leading-9 hover:underline'>
            <li className='font-semibold text-[15px] hover:underline'><a href='/'>Courses</a></li>
            <li className='hover:underline'> <a href='/'></a>Business</li>
            <li className='hover:underline'><a href='/'></a>Development</li>
            <li className='hover:underline'><a href='/'></a>Technology</li>
            <li className='hover:underline'><a href='/'></a>Design</li>
            <li className='hover:underline'><a href='/'></a>Programming</li>
          </ul>
        </div>
        <div>
          <ul className='text-[14px] leading-9 hover:underline'>
            <li className='font-semibold text-[15px]'><a href='/'>Resources</a></li>
            <li className='hover:underline'> <a href='/'></a>Career</li>
            <li className='hover:underline'><a href='/'></a>Resume</li>
            <li className='hover:underline'><a href='/'></a>Learning</li>
            <li className='hover:underline'><a href='/'></a>Interview Preparation</li>
            <li className='hover:underline'><a href='/'></a>Jobs</li>
          </ul>
        </div>
        <div>
          <ul className='text-[14px] leading-9 hover:underline'>
            <li className='font-semibold text-[15px]'><a href='/'>About Us</a></li>
            <li className='hover:underline'> <a href='/'></a>Contact</li>
            <li className='hover:underline'><a href='/'></a>Help/Support</li>
            <li className='hover:underline'><a href='/'></a>FAQ</li>
            <li className='hover:underline'><a href='/'></a>Terms and Conditions</li>
            <li className='hover:underline'><a href='/'></a>Partners</li>
          </ul>
        </div>
      </div>
      <hr className='line-clamp-1'/>
      <div className='flex justify-between mt-10'>
        <div className=''>
          <ul className='flex gap-4'>
            <li className='hover:underline'><a>2023 Ddsgnr. All right reserved.</a></li>
            <li className='hover:underline'><a>Privacy Policy</a></li>
            <li className='hover:underline'><a>Terms of Service</a></li>
            <li className='hover:underline'><a>Cookies Settings</a></li>
          </ul>
        </div>
        <div className='flex gap-3'> 
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
          

        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
