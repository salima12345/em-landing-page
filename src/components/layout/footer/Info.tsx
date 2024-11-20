'use client'

import Link from 'next/link'
import Address from './Address'
import Newsletter from './Newsletter'

export default function Info() {
  return (
    <div className="py-8 border-t border-[#454545]  ">
      <div className="flex flex-col lg:flex-row lg:flex-wrap items-start justify-between gap-8">
        <div className="flex flex-col gap-2 w-full lg:w-auto">
          <Link href="/" className="font-semibold">
            Agency
          </Link>
          <Link href="/" className="font-semibold">
            References <span className="text-[#E0643A] text-[20px]">*</span>
          </Link>
          <Link href="/" className="font-semibold">
            Team
          </Link>
          <Link href="/" className="font-semibold">
            Wilo Insights
          </Link>
        </div>
        <div className="flex-shrink-0 w-full lg:w-auto">
          <Address />
        </div>
        <div className="flex flex-col gap-2 w-full lg:w-auto">
          <p className="font-semibold">Follow us</p>
          <div className="flex items-center">
            <div className="flex flex-col gap-2 pr-16 ">
              <Link href="/">LinkedIn</Link>
              <Link href="/">Twitter</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/">Facebook</Link>
              <Link href="/">Instagram</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full lg:w-auto">
          <p className="font-semibold">Newsletter</p>
          <Newsletter />
        </div>
      </div>
    </div>
  )
}