import React from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <div className='flex'>
        <div className=' ms-10 w-[735px]' >
            <div className='  w-[600px] font-bold mt-64 mb-6'>
            <h1 className='text-6xl animate-pulse'>Learn new skills online with ease</h1>
            </div>
            <div className=' w-[500px]  text-[20px]'>
            <p className='animate-pulse'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
            </div>
            <Button className='bg-black text-white hover:bg-white hover:text-black  hover:border-solid hover:border-black hover:border-2 border-solid border-black border-2 mt-16 me-4'>Start learning now</Button>
            <Button className='bg-white text-black  hover:bg-black hover:text-white hover:border-solid hover:border-black hover:border-2 border-solid border-black border-2'>Explore Courses</Button>
           
        </div>
        <div className=''>
            <img className='w-[600px] animate-pulse' src="/images/pic_2.png" alt="" />
        </div>
      </div>
      <div className=' h-40 flex bg-[#F7F7F7] '>
          <div>
            <p className=' w-[340px]  font-bold text-[24px] mx-1 my-12'>Trusted by 2000+ companies worldwide.</p>
          </div>
          <div className='flex h-[75px] my-12 ms-[157px] gap-2'>
           <img  src="/images/pic.one.png" alt="logo image" height={100} width={120} />
           <img  src="/images/pic.two.png" alt="logo image"height={100} width={120} />
           <img src="/images/pic.three.png" alt="logo image" height={100} width={120}/>
           <img src="/images/pic.four.png" alt="logo image" height={100} width={150}/>
           <img src="/images/pic.five.png" alt="logo image" height={100} width={120}/>
           <img src="/images/pic.six.png" alt="logo image" height={100} width={120}/>
          </div>
      </div>
    </div>
    
  )
}

export default Hero