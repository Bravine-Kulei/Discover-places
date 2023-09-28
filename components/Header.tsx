import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex justify-between pr-5 px-5 shadow-sm'>
      <div className='flex gap-3 items-center'>
        <Image src='/logo.png' alt='logo' width={50} height={50} />
      </div>
      <ul className='flex items-center gap-8'>
        <li className='text-[18px] hover:text-red-500 cursor-pointer'>Home</li>
        <li className='text-[18px] hover:text-red-500 cursor-pointer'>About Us</li>
        <li className='text-[18px] hover:text-red-500 cursor-pointer'>Contact Us</li>
        
      </ul>
    </div>
  )
}

export default Header
