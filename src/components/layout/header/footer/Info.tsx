"use client";
import React from "react";
import Link from "next/link";
import Address from "./Address";
import Newsletter from "./Newsletter";
export default function Info() {
  return (
    <div className="py-8 border-t border-[#454545]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
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
        <Address/>

      <div className="flex flex-col gap-2">
           <p className="font-semibold">Follow us </p>
           <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2">
                <Link href="/">LinkedIn</Link>
                <Link href="/">Twiter</Link>
                <Link href="/"></Link>
           </div>
              <div className="flex flex-col gap-2">
                <Link href="/">Facebook</Link>
                <Link href="/">Instagram</Link>
                <Link href="/"></Link>
            </div>
           </div>
          </div>

        <div className="flex flex-col gap-2">
           <p className="font-semibold">Newsletter</p>
           <Newsletter/>
         </div>
        </div>
    </div>
  );
}
