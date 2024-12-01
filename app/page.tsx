import React from 'react'
import Header from './components/Header/Header'
import { Button } from "@/components/ui/button"
import Hero from './components/HeroSection/Hero'
import Image from 'next/image'
import Top from './components/Top/Top'
import Courses from './components/HeroSection/Courses/Courses'
import Achivements from './components/Achivements/Achivements'
import Team from './components/Team/Team'
import Testimonial from './components/Testimonial/Testimonial'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'



const page = () => {
  return (
   
    // <div className='flex flex-col sm:flex-row justify-center items-center h-screen'>
    //   {/* <Header /> */}
    //   {/* <div className='h-[100px] w-[100px] bg-blue-600  flex justify-center items-center'>Box 1</div>
    //   <div className='h-[100px] w-[100px] bg-pink-600 flex justify-center items-center'>Box 2</div> */}
    //   <Button variant="secondary">Button</Button>

    // </div>
    <div>
      <Top />
       <Header />
       <Hero />
       <Services />
       <Achivements />
       <Achivements />
       <Courses />
       <Team />
       <Testimonial />
       <Footer />      
      
    </div>
  )
}

export default page
