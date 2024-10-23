"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import Nav from "../Navigation/Nav";
import LanguageSelector from "./LanguageSelectorDesktop";
import LanguageSelectorMobile from "./LanguagesSelectorMobile";

export default function Header() {
  return (
    <>
   <section>
   <div className="container flex items-center justify-between w-full">
        <Link href="/" className="[@media(min-width:1250px)]:pl-20">
          <Image src="/images/Logo.svg" alt="logo" width={100} height={100} />
        </Link>
        <Nav />
        <div className="flex items-center gap-3">
          <LanguageSelectorMobile />
          <button className="rounded-full flex items-center justify-center w-[54px] h-[54px] bg-grayDark text-foreground">
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
      <div className="container flex justify-end  transform -translate-y-10">
        <LanguageSelector />
      </div>
   </section>
    </>
  );
}