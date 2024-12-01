import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { IoMdStar } from "react-icons/io";




const Courses = () => {
    return (
        <div>
            <div className='text-center mb-10'>
                <h5 className='font-bold text-[56px] mb-5'>Courses</h5>
                <p className='text-[18px] mb-10'>Your Ultimate Guide to learning</p>
                <Button className='bg-white text-black hover:bg-black hover:text-white  '>Popular</Button>
                <Button className='bg-white text-black hover:bg-black hover:text-white ms-3  '>Recommended</Button>
                <Button className='bg-white text-black hover:bg-black hover:text-white ms-3 '>Best  Price</Button>

            </div >
            <div className='flex justify-between'>
                <div className='w-[416px] h-[532px]'>
                    <Card className='rounded-none bg-[#F7F7F7]'>
                        <CardHeader className='p-0 m-0'>
                            <img src="/images/pic.seven.png" alt="img" />
                        </CardHeader>
                        <CardContent>
                            <div className='flex justify-between  mt-3'>
                                <p className='font-semibold text-[14px]'>Design</p>
                                <p className='ms-72 mt-1'> <IoMdStar /></p>
                                <p>5.0</p>
                            </div>
                            <div>
                                <p className='font-bold text-[24px]'>UX/UI Design 201</p>
                                <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            </div>



                        </CardContent>
                        <CardFooter>
                            <Button className='bg-[#F7F7F7] border-black border-2 text-black hover:text-white hover:bg-black'>Enroll Now</Button>
                            <p className='font-medium text-[16px] ms-10'>$400</p>
                        </CardFooter>
                    </Card>
                </div >
                <div className='w-[416px] h-[532px]'>
                    <Card className='rounded-none bg-[#F7F7F7]'>
                        <CardHeader className='p-0 m-0'>
                            <img  src="/images/pic.eight.png" alt="img" />
                        </CardHeader>
                        <CardContent>
                            <div className='flex justify-between mt-3'>
                                <p className='font-semibold text-[14px]'>Programmimg</p>
                                <p className='ms-60 mt-1'> <IoMdStar /></p>
                                <p>5.0</p>
                            </div>
                            <div>
                                <p className='font-bold text-[24px]'>Introduction to Python</p>
                                <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            </div>



                        </CardContent>
                        <CardFooter>
                            <Button className='bg-[#F7F7F7] border-black border-2 text-black hover:text-white hover:bg-black'>Enroll Now</Button>
                            <p className='font-medium text-[16px] ms-10'>$400</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className='w-[416px] h-[532px]'>
                    <Card className='rounded-none bg-[#F7F7F7]'>
                        <CardHeader className='p-0 m-0'>
                            <img src="/images/pic.nine.png" alt="img" />
                        </CardHeader>
                        <CardContent>
                            <div className='flex justify-between mt-3 '>
                                <p className='font-semibold text-[14px]'>Business</p>
                                <p className='ms-[272px] mt-1'> <IoMdStar /></p>
                                <p >5.0</p>
                            </div>
                            <div>
                                <p className='font-bold text-[24px]'>Data Analysis for Beginners</p>
                                <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            </div>



                        </CardContent>
                        <CardFooter>
                            <Button className='bg-[#F7F7F7] border-black border-2 text-black hover:text-white hover:bg-black'>Enroll Now</Button>
                            <p className='font-medium text-[16px] ms-10'>$400</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='w-[416px] h-[532px]'>
                    <Card className='rounded-none bg-[#F7F7F7]'>
                        <CardHeader className='p-0 m-0'>
                            <img src="/images/pic.ten.png" alt="img" />
                        </CardHeader>
                        <CardContent>
                            <div className='flex justify-between mt-3'>
                                <p className='font-semibold text-[14px]'>Art</p>
                                <p className='ms-[308px] mt-1'> <IoMdStar /></p>
                                <p>5.0</p>
                            </div>
                            <div>
                                <p className='font-bold text-[24px]'>Art Specialization</p>
                                <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            </div>



                        </CardContent>
                        <CardFooter>
                            <Button className='bg-[#F7F7F7] border-black border-2 text-black hover:text-white hover:bg-black'>Enroll Now</Button>
                            <p className='font-medium text-[16px] ms-10'>$400</p>
                        </CardFooter>
                    </Card>
                </div >
                <div className='w-[416px] h-[532px]'>
                    <Card className='rounded-none bg-[#F7F7F7]'>
                        <CardHeader className='p-0 m-0'>
                            <img src="/images/pic.eleven.png" alt="img" />
                        </CardHeader>
                        <CardContent>
                            <div className='flex justify-between mt-3'>
                                <p className='font-semibold text-[14px]'>Law</p>
                                <p className='ms-[308px] mt-1'> <IoMdStar /></p>
                                <p>5.0</p>
                            </div>
                            <div>
                                <p className='font-bold text-[24px]'>Rule of Law</p>
                                <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            </div>



                        </CardContent>
                        <CardFooter>
                            <Button className='bg-[#F7F7F7] border-black border-2 text-black hover:text-white hover:bg-black'>Enroll Now</Button>
                            <p className='font-medium text-[16px] ms-10'>$400</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className='w-[416px] h-[532px]'>
                    <Card className='rounded-none bg-[#F7F7F7]'>
                        <CardHeader className='p-0 m-0'>
                            <img src="/images/pic.12.png" alt="img" />
                        </CardHeader>
                        <CardContent>
                            <div className='flex justify-between mt-3'>
                                <p className='font-semibold text-[14px]'>Tech</p>
                                <p className='ms-[308px] mt-1'> <IoMdStar /></p>
                                <p>5.0</p>
                            </div>
                            <div>
                                <p className='font-bold text-[24px]'>Introduction to webflow</p>
                                <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                            </div>



                        </CardContent>
                        <CardFooter>
                            <Button className='bg-[#F7F7F7] border-black border-2 text-black hover:text-white hover:bg-black'>Enroll Now</Button>
                            <p className='font-medium text-[16px] ms-10'>$400</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div className='flex justify-center mt-10 mb-20'>
                <Button className='bg-white border-black border-2 text-black hover:text-white hover:bg-black'>View All Courses</Button>
            </div>
           
        </div>
    )
}

export default Courses