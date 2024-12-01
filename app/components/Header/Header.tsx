import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link';
function Header() {
    return (
      <div>
        <nav className='bg-[#F7F7F7] flex justify-center items-center h-16'>
          <div className='me-32'>
            <img src='/images/Ddsgnr Library.png' alt='logo'/>
          </div>

          <div>
            <ul className='flex space-x-12 text-[20px] font-semibold'>
              <li><Link href={"/"}>Home</Link></li>
              <li><Link href={"/"}>Courses</Link></li>
              <li><Link href={"/"}>Services</Link></li>
              <li><Link href={"/"}>Achievement</Link></li>
              <li><Link href={"/"}>About Us</Link></li>
              <li><Link href={"/"}>Testimonial</Link></li>
            </ul>
          </div>
          <div className='ms-14 m-2'>
          <Button className=' bg-white text-black hover:bg-black hover:text-white border-solid border-black  hover:border-2'> log in</Button>
          <Button className='bg-black text-white hover:bg-white hover:text-black hover:border-solid hover:border-black hover:border-2 ' >Sign Up</Button>
          </div>
        </nav>
      </div>
    )
  }
  
  export default Header;