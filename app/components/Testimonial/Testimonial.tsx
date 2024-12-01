import React from 'react'
import { IoMdStar } from "react-icons/io";

const Testimonial = () => {
    return (
        <div>
            <div className='bg-[#F7F7F7]'>
                <div >
                    <p className='font-bold text-[48px] ms-9 mb-4'>Customer testimonials</p>
                    <p className='text-[18px] ms-10 mb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                </div>
                <div className='flex justify-center gap-4'>
                    <div className=' w-[416px] h-[294px] border-black border-2 '>
                        <div className='flex  w-28 mt-6 ms-6'>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                        <div className=' w-[299px] h-[135px] mt-6 ms-6'>
                            <p className='text-[18px] leading-[27px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                        </div>
                        <div className='flex  w-64 ms-6 mt-1'>
                            <img src="/images/pic.o.png" alt="" />
                            <div className='ms-2 mt-2'>
                               
                                <div>
                                <p className='font-semibold text-[16px]'>James Nduku</p>
                                <p className='text-[16px]'>Software Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-[416px] h-[294px] border-black border-2 '>
                    <div className='flex  w-28 mt-6 ms-6'>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                        <div className=' w-[299px] h-[135px] mt-6 ms-6'>
                            <p className='text-[18px] leading-[27px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                        </div>
                        <div className='flex  w-64 ms-6 mt-1'>
                            <img src="/images/pic.n.png" alt="image" />
                            <div className='ms-2 mt-2 flex'>
                               
                               <div>
                               <p className='font-semibold text-[16px]'>Erick Kipkemboi</p>
                               <p className='text-[16px]'>Scrum Master</p>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-[416px] h-[294px] border-black border-2 mb-20'>
                    <div className='flex  w-28 mt-6 ms-6 '>
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                        <div className=' w-[299px] h-[135px] mt-6 ms-6'>
                            <p className='text-[18px] leading-[27px]'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                        </div>
                        <div className='flex  w-64 ms-6 mt-1'>
                            <img src="/images/pic.e.png" alt="" />
                            <div className='ms-2 mt-2'>
                                
                                <div>
                                <p className='font-semibold text-[16px]'>Stephen Kerubo</p>
                                <p className='text-[16px]'>UI/UX Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonial