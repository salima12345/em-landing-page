import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Copyright() {
  return (
    <div className='container py-6 flex items-center justify-between '>
     <p>© Copyright 2005–2024 Eliott & Markus. All Rights Reserved.</p>
     <div className='flex items-center gap-3'>
       <Link href="/">Terms & Conditions</Link>
       <Link href="/">Legal Notice</Link>
     </div>
     <Link href="https://mirovia.com/">
     <Image src="/images/Mirovia.svg" alt="" width={100} height={90} className='w-[100px]' />

     </Link>
  
     
    
    </div>
  )
}

export default Copyright