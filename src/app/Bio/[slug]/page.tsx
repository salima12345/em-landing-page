"use client"

import React from "react"
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
      <div className="container mt-16">
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
      <div className="flex flex-col my-16">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col xl:flex-row justify-end gap-16">
            <div className="xl:sticky top-44 h-max">
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
                  loading="lazy"
                  className="transition-all duration-300"
                  style={{
                    width: '19px',
                    height: '19px',
                  }}
                />
                <span className="text-[14px] font-medium">{member.name}</span>
              </div>

              {/* Left side content */}
              <div className="flex flex-col md:flex-row justify-between  xl:ml-16 mt-10 xl:w-[730px] ">
                <div className="flex flex-col mt-8 w-full md:w-[299px]">
                  <AnimatedTitle
                    text={member.name}
                    className="font-semibold text-[28px] md:text-[36px] leading-[38px] text-[#222] mb-3"
                  />
                  <AnimatedTitle
                    text={member.jobTitle}
                    className="font-semibold text-[20px] md:text-[26px] text-[#222]"
                  />
                  <div className="flex items-center gap-5 mt-5">
                    <Image
                      src="https://www.eliott-markus.com/wp-content/themes/em-wp/images/bio-icons/linkedin.svg"
                      alt="linkedin"
                      width={17}
                      height={17}
                      className="transition-all duration-300"
                      style={{
                        width: '17px',
                        height: '17px',
                      }}
                      loading="lazy"
                    />
                    <Image
                      src="https://www.eliott-markus.com/wp-content/themes/em-wp/images/bio-icons/mail.svg"
                      alt="mail"
                      width={17}
                      height={17}
                      className="transition-all duration-300 "
                      style={{
                        width: '17px',
                        height: '17px',
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-8 w-full md:w-[400px]  h-[513px] overflow-hidden rounded-[10px]">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt="member image"
                    width={348}
                    height={513}
                    className="w-full h-full object-cover"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right side content */}
            <div className="flex flex-col w-full xl:w-[398px] gap-5 mt-10 xl:mt-24">
              <div className="flex flex-col">
                <h3 className="font-semibold text-[20px] md:text-[26px] leading-[38px] text-[#222]">
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