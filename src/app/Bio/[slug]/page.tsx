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

  // Find the member with the matching slug
  const member: TeamMember | undefined = teamGroups
    .flatMap((group) => group.members)
    .find((member) => member.slug === slug)

  // Redirect to "Team" page if no member is found
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
    router.push("/Team") // Redirect to the Team page
  }

  return (
    <>
      <Header />
      <div className="container mt-10">
        <div className="flex items-center gap-1">
          <span onClick={handleTalentClick} className="text-[14px] font-medium cursor-pointer">
            Talent
          </span>
          {/* Arrow Icon */}
          <Image
            src="/images/icons/arrowRight.svg"
            alt="Arrow Right"
            width={19}
            height={19}
            className="transition-all duration-300"
          />
          <span className="text-[14px] font-medium">{member.name}</span>
        </div>
        <div className="m-14 flex justify-between ">
          <div className="flex flex-col gap-5 ">
            <AnimatedTitle text={member.name} className="font-semibold md:text-[36px] text-[24px]" />
            <AnimatedTitle text={member.jobTitle} className="font-semibold md:text-[24px] text-[16px]" />
            <div className="flex gap-5 items-center">
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
          <Image
            src={member.image || "/placeholder.svg"}
            alt="member image"
            width={345}
            height={513}
            className="transition-all duration-300 rounded-[5px] h-[513px]"
          />
          <div className="flex flex-col gap-3 max-w-[400px] ">
            <h3 className="font-semibold text-[26px]">« {member.quote} »</h3>
            {member.description &&
              member.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Bio

