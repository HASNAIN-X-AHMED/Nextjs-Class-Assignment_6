import React from 'react'

const Top = () => {
  return (
    <div className='flex justify-between py-2'>
      <div  className='flex ms-20 items-center'>
        <div className='me-3'>
            <p className='text-[14px]'>Phone Number: 956 742 455 678</p>
            </div>
        <img src='/images/Line .png'/>
        <div className='ms-3'>
            <a className="text-[14px]"  href='xyz@gmail.com' >Email:info@ddsgnr.com</a>
        </div>
        </div>

        <div className='flex items-center space-x-4 me-24'>
            <a href='/'> <img src='/images/Facebook.png' alt=''/></a>
            <a href='/'> <img src='/images/insta.png' alt=''/></a>
            <a href='/'> <img src='/images/twiter.png' alt=''/></a>
            <a href='/'> <img src='/images/linkedin.png' alt=''/></a>
        </div>

      
    </div>
  )
}

export default Top
