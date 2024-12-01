import React from 'react'
import { Button } from "@/components/ui/button"

const Services = () => {
  return (
    <div>
      <div className=' '>
        <div className='text-left  w-[740px] ms-72 mt-24 mb-20'>
          <p className='font-bold text-[48px] mb-4'>Explore Courses By Category</p>
          <p className='text-[18px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        </div>
       </div>
       <div className=''>
        <div className='flex justify-between shadow-md'>
        <div className='bg-[#F7F7F7] w-[430px] h-[132px] flex'>
          <div className='mt-4 ms-5'>
            <img src="/images/Frame 1.png" alt="image" />
          </div>
          <div className='ms-7 mt-10 '>
            <p className='font-semibold text-[20px] '>Design & Development</p>
            <p>50+ Courses Available</p>
          </div>
        </div>
        <div className='bg-[#F7F7F7] w-[430px] h-[132px] flex '>
        <div className='mt-4 ms-5'>
            <img src="/images/Frame 2.png" alt="image" />
          </div>
          <div className='ms-7 mt-10'>
            <p className='font-semibold text-[20px]'>Marketing</p>
            <p>50+ Courses Available</p>
          </div>
        </div>
        <div className='bg-[#F7F7F7] w-[430px] h-[132px] flex'>
        <div className='mt-4 ms-5'>
            <img src="/images/Frame 3.png" alt="image" />
          </div>
          <div className='ms-7 mt-10'>
            <p className='font-semibold text-[20px]'>Development</p>
            <p>50+ Courses Available</p>
          </div>
        </div>
        </div>
        <div className='flex justify-between mt-16 shadow-md'>
        <div className='bg-[#F7F7F7] w-[430px] h-[132px] flex'>
        <div className='mt-4 ms-5'>
            <img src="/images/Frame 4.png" alt="image" />
          </div>
          <div className='ms-7 mt-10'>
            <p className='font-semibold text-[20px]'>Communication</p>
            <p>50+ Courses Available</p>
          </div>
        </div>
        <div className='bg-[#F7F7F7] w-[430px] h-[132px] flex'>
        <div className='mt-4 ms-5'>
            <img src="/images/Frame 5.png" alt="image" />
          </div>
          <div className='ms-7 mt-10'>
            <p className='font-semibold text-[20px]'>Digital Marketing</p>
            <p>50+ Courses Available</p>
          </div>
        </div>
        <div className='bg-[#F7F7F7] w-[430px] h-[132px] flex'>
        <div className='mt-4 ms-5'>
            <img src="/images/Frame 6.png" alt="image" />
          </div>
          <div className='ms-7 mt-10'>
            <p className='font-semibold text-[20px]'> SelfDevelopment</p>
            <p>50+ Courses Available</p>
          </div>
        </div>
        </div>
        <div className='flex justify-between mt-16 shadow-md'>
        <div className='bg-[#F7F7F7] w-[430px] h-[132px] flex'>
        <div className='mt-4 ms-5'>
            <img src="/images/Frame 7.png" alt="image" />
          </div>
          <div className='ms-7 mt-10'>
            <p className='font-semibold text-[20px]'>Business</p>
            <p>50+ Courses Available</p>
          </div>
        </div>
        <div className='bg-[#F7F7F7] w-[430px] h-[132px] flex'>
        <div className='mt-4 ms-5'>
            <img src="/images/Frame 8.png" alt="image" />
          </div>
          <div className='ms-7 mt-10'>
            <p className='font-semibold text-[20px]'>Finance</p>
            <p>50+ Courses Available</p>
          </div>
        </div>
        <div className='bg-[#F7F7F7] w-[430px] h-[132px] flex'>
        <div className='mt-4 ms-5'>
            <img src="/images/Frame 9.png" alt="image" />
          </div>
          <div className='ms-7 mt-10'>
            <p className='font-semibold text-[20px]'>Consulting</p>
            <p>50+ Courses Available</p>
          </div>
        </div>
        </div>
          <div className='ms-[615px] mt-16'>
            <Button className='bg-white text-black hover:bg-black hover:text-white border-solid border-black border-2' >View All Courses</Button>
          </div>
        </div>

    </div>
  )
}

export default Services