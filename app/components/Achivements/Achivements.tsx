import React from 'react'

const Achivements = () => {
    return (
        <div>
            <div className=' text-center  mt-36 w-[1200px] ms-20'>
                <p className='font-bold text-[48px] mb-5'>Our Achivements</p>
                <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
            <div className='flex justify-center mt-8 mb-44'>
                <div className='flex '>
                    <div className='text-center '>
                        <p className='font-bold text-[40px]'>+200</p>
                        <p className='font-[16px]'>Courses</p>
                    </div>
                    <div className='text-center ms-60'>
                        <p className='font-bold text-[40px]'>50K</p>
                        <p className='font-[16px]'>Mentors</p>
                    </div>
                </div>
                <div className='flex '>
                <div className='text-center ms-60'>
                        <p className='font-bold text-[40px]'>370K</p>
                        <p className='font-[16px]'>Students</p>
                    </div>
                    <div className='text-center ms-60'>
                        <p className='font-bold text-[40px]'>100+</p>
                        <p className='font-[16px]'>Recognition</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Achivements