import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiBasketballLine } from "react-icons/ri";

const Team = () => {
    return (
        <div >
            <div className=' bg-[#F7F7F7] h-[650px]'>
                <div className='text-center '>
                    <p className='font-bold text-[48px]'>Our team</p>
                    <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className='flex justify-around mt-10'>
                    <div className='  w-[395px] h-[209px] text-center '  >
                        <img className='ms-[154px] mb-3' src="/images/Team.1.png" alt="image" />
                        <div className=''>
                            <p className='font-semibold text-[20px] leading-5 '>James Nduku</p>
                            <p className='text-[18px]'>Marketing Coordinator</p>
                        </div>

                        <div className='flex justify-center mt-12 gap-5'>
                            <FaLinkedin />
                            <FaTwitter />
                            <RiBasketballLine />
                        </div>

                    </div>
                    <div className='  w-[395px] h-[209px] text-center'>
                        <img className='ms-[154px] mb-3' src="/images/Team.2.png" alt="image" />
                        <div className=''>
                            <p className='font-semibold text-[20px] leading-5 '>Joseph Munyambu</p>
                            <p className='text-[18px]'>Nursing Assistant</p>
                        </div>

                        <div className='flex justify-center mt-12 gap-5'>
                            <FaLinkedin />
                            <FaTwitter />
                            <RiBasketballLine />
                        </div>
                    </div>
                    <div className='  w-[395px] h-[209px] text-center'>
                        <img className='ms-[154px] mb-3' src="/images/team.3.png" alt="image" />
                        <div>
                            <p className='font-semibold text-[20px] leading-5 '>Joseph Ngumbau</p>
                            <p className='text-[18px]'>Medical Assistant</p>
                        </div>

                        <div className='flex justify-center mt-12 gap-5'>
                            <FaLinkedin />
                            <FaTwitter />
                            <RiBasketballLine />
                        </div>
                    </div>
                </div>
                <div className='flex justify-around mt-10'>
                    <div className='  w-[395px] h-[209px] text-center '  >
                        <img className='ms-[154px] mb-3' src="/images/Team.4.png" alt="image" />
                        <div className=''>
                            <p className='font-semibold text-[20px] leading-5 '>Erick Kipkemboi</p>
                            <p className='text-[18px]'>Web Designer</p>
                        </div>

                    
                        <div className='flex justify-center mt-12 gap-5'>
                            <FaLinkedin />
                            <FaTwitter />
                            <RiBasketballLine />
                        </div>
                    

                       

                    </div>
                    <div className='  w-[395px] h-[209px] text-center'>
                        <img className='ms-[154px] mb-3' src="/images/Team.5.png" alt="image" />
                        <div className=''>
                            <p className='font-semibold text-[20px] leading-5 '>Stephen Kerubo</p>
                            <p className='text-[18px]'>President of Sales</p>
                        </div>

                        <div className='flex justify-center mt-12 gap-5'>
                            <FaLinkedin />
                            <FaTwitter />
                            <RiBasketballLine />
                        </div>

                       
                    </div>
                    <div className='  w-[395px] h-[209px] text-center'>
                        <img className='ms-[154px] mb-3' src="/images/Team.6.png" alt="image" />
                        <div className=''>
                            <p className='font-semibold text-[20px] leading-5 '>John Leboo</p>
                            <p className='text-[18px]'>Dog Trainer</p>
                        </div>

                        <div className='flex justify-center mt-12 gap-5'>
                            <FaLinkedin />
                            <FaTwitter />
                            <RiBasketballLine />
                        </div>

                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team