"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import Expertise from "./Expertise";
import MadeIn from "./MadeIn";
import LanguageSelectorMobile from "./LanguagesSelectorMobile";


export default function Nav() {
 


  return (
    <div className=" flex items-center justify-between ">
      <Link href="/" className="[@media(min-width:1250px)]:pl-20">
        <Image src="/images/Logo.svg" alt="logo" width={100} height={100} />
      </Link>
      <div className="flex items-center gap-3 hidden xl:flex">
        <Expertise />
        <MadeIn />
      </div>
      <div className="rounded-[26px] bg-grayLight w-[218px] h-[56px] flex items-center justify-center cursor-pointer hidden xl:flex">
        <p className="tracking-[0.4rem] leading-[60px] uppercase">Ecosystem</p>
      </div>
      <div className="flex items-center gap-3">
        <LanguageSelectorMobile/>
        <button className="rounded-full flex items-center justify-center w-[54px] h-[54px] bg-grayDark text-foreground">
          <RxHamburgerMenu />
        </button>
      </div>
    </div>
  );
}
