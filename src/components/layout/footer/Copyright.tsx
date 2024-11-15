import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Copyright() {
  return (
    <div className=' py-4 flex flex-col sm:flex-row items-center justify-between text-sm'>
      <p className='text-center sm:text-left'>© Copyright 2005–2024 Eliott & Markus. All Rights Reserved.</p>
      <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-10 order-3 sm:order-2'>
        <Link href="/" className='hover:underline'>Terms & Conditions</Link>
        <Link href="/" className='hover:underline'>Legal Notice</Link>
      </div>
      <Link href="https://mirovia.com/" className='order-2 sm:order-3'>
        <Image 
          src="/images/Mirovia.svg" 
          alt="Mirovia" 
          width={100} 
          height={90} 
          className='w-[100px]' 
        />
      </Link>
    </div>
  )
}

export default Copyright