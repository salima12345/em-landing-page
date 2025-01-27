"use client"

import React from "react"
import Header from "@/components/layout/header"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import AnimatedTitle from "@/components/ui/TitleReveal"
import { teamGroups } from "@/Data/TeamData"
import type { TeamMember } from "@/Data/TeamData"
import Footer from "@/components/layout/footer"

function Bio() {
  const router = useRouter()
  const { slug } = useParams()

  const member: TeamMember | undefined = teamGroups
    .flatMap((group) => group.members)
    .find((member) => member.slug === slug)

  if (!member) {
    return (
      <div className="container mt-10">
        <Header />
        <div className="text-center mt-20">
          <p className="text-lg font-semibold">Member not found</p>
          <button onClick={() => router.push("/Team")} className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md">
            Go Back to Team
          </button>
        </div>
      </div>
    )
  }

  const handleTalentClick = () => {
    router.push("/Team")
  }

  return (
    <>
    <Header />

    <div className="flex flex-col my-16">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <div className="flex justify-end gap-8">
          <div className="sticky top-44 h-max">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1 mb-10">
              <span
                onClick={handleTalentClick}
                className="text-[14px] font-medium cursor-pointer"
              >
                Talent
              </span>
              <Image
                src="/images/icons/arrowRight.svg"
                alt="Arrow Right"
                width={19}
                height={19}
                className="transition-all duration-300"
              />
              <span className="text-[14px] font-medium">{member.name}</span>
            </div>

            {/* Left side content */}
            <div className="flex justify-between gap-8 ml-16 mt-10 w-[670px]">
              <div className="flex flex-col mt-8 w-[290px]">
                <AnimatedTitle
                  text={member.name}
                  className="font-semibold text-[36px] leading-[38px] text-[#222] mb-3"
                />
                <AnimatedTitle
                  text={member.jobTitle}
                  className="font-semibold text-[26px] text-[#222]"
                />
                <div className="flex items-center gap-5 mt-5">
                  <Image
                    src="https://www.eliott-markus.com/wp-content/themes/em-wp/images/bio-icons/linkedin.svg"
                    alt="linkedin"
                    width={17}
                    height={17}
                    className="transition-all duration-300"
                  />
                  <Image
                    src="https://www.eliott-markus.com/wp-content/themes/em-wp/images/bio-icons/mail.svg"
                    alt="mail"
                    width={17}
                    height={17}
                    className="transition-all duration-300"
                  />
                </div>
              </div>

              <div className="mt-8 w-[348px] h-[513px] overflow-hidden rounded-[10px]">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt="member image"
                  width={348}
                  height={513}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div className="flex flex-col w-[398px] gap-5 mt-24">
            <div className="flex flex-col">
              <h3 className="font-semibold text-[26px] leading-[38px] text-[#222]">
                « {member.quote} »
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {member.description &&
                member.description.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-base leading-[26px] text-[#222]">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />

    </>
  )
}

export default Bio