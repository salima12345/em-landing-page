"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { CASE_STUDIES } from "@/Data/CaseStudiesData";
import { useParams } from "next/navigation";
import Share from "@/components/Share";
import Image from "next/image";

function CaseStudyPage() {
  const { slug } = useParams();
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  const lastThreeCaseStudies = CASE_STUDIES.filter((cs) => cs.slug !== slug).slice(-3);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    controls.start({
      opacity: hoverIndex !== null ? 1 : 0,
      transition: { duration: 0.3 },
    });
  }, [hoverIndex, controls]);

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pb-20"
      >
        <div className="max-w-6xl mx-auto  mt-6 md:mt-16 container">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <ul className="flex items-center gap-2 font-medium text-sm md:text-base">
              <li>
                <a href="/references-clients">References</a>
              </li>
              <li className="arrow">→</li>
              <li className="truncate">{caseStudy.title}</li>
            </ul>
          </div>

          {/* Case Study Header */}
          <div className="mt-4 md:mt-6">
            <div className="header-singleReference">
              <motion.h1
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <small>{caseStudy.title}</small>
              </motion.h1>
              <div className="mt-4 md:mt-6">
                <ul className="flex flex-wrap gap-2">
                  {caseStudy.categories.map((category, index) => (
                    <li key={index}>
                      <span className="px-3 md:px-4 py-1.5 md:py-2 bg-[#E6E5DF] rounded-full text-xs md:text-sm font-medium">
                        {category}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Case Study Image */}
            <motion.div
              className="mt-6 md:mt-8 h-64 sm:h-80 lg:h-[623px] rounded-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <img
                src={caseStudy.imageUrl}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Case Study Description */}
            <motion.div
              className="mt-8 md:mt-12 px-0 md:px-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="text-base md:text-lg text-gray-900 leading-relaxed">{caseStudy.description}</p>
            </motion.div>

            {/* Case Study Blogs */}
            {caseStudy.blogs && (
              <div className="gallery-singleReference mt-8 md:mt-12">
                {caseStudy.blogs.map((blog, blogIndex) => (
                  <div key={blogIndex} className="blog-post mb-8 md:mb-12">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900">{blog.title}</h2>
                    <p className="text-base md:text-lg text-gray-900 mt-3 md:mt-4">{blog.summary}</p>
                    <div className="blog-content mt-4 md:mt-6">
                      {blog.content.map((contentBlock, blockIndex) => (
                        <motion.div
                          key={blockIndex}
                          className="content-block mb-6 md:mb-8"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.8 + blockIndex * 0.2, duration: 0.5 }}
                        >
                          {contentBlock.type === "text" && (
                            <p className="text-base md:text-lg text-gray-900 leading-relaxed">
                              {contentBlock.content}
                            </p>
                          )}
                          {contentBlock.type === "image" && (
                            <div className="image overflow-hidden rounded-lg w-full">
                              <img
                                src={contentBlock.content}
                                alt={contentBlock.description}
                                className="w-full h-48 sm:h-64 md:h-80 object-cover"
                              />
                            </div>
                          )}
                          {contentBlock.type === "video" && (
                            <div className="video h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden">
                              <video
                                autoPlay
                                muted
                                loop
                                controls
                                className="w-full h-full object-cover"
                              >
                                <source src={contentBlock.content} type="video/mp4" />
                              </video>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Share Component */}
            <Share url={window.location.href} />
          </div>
        </div>

        {/* See More Section */}
        <div className="max-w-6xl container mt-12 md:mt-20 ">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">See More</h2>
          <div className="flex flex-col">
            {lastThreeCaseStudies.map((cs, index) => (
              <div
                key={cs.slug}
                className={`relative py-6 md:py-10 border-b-[0.5px] ${
                  index === 0 ? "border-y-[0.5px]" : "border-b-[0.5px]"
                } border-grayDark hover:border-black cursor-pointer group`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <h4 className="text-lg sm:text-xl md:text-[21px] xl:text-[26px] text-grayDark font-semibold opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {cs.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Hover Image Container - Hidden on mobile */}
        <motion.div
          className="fixed w-[385px] h-[280px] pointer-events-none z-30 overflow-hidden hidden lg:block"
          style={{
            top: cursorPos.y,
            left: cursorPos.x,
            transform: "translate(-20%, -65%)",
          }}
          initial={{ opacity: 0 }}
          animate={controls}
        >
          {hoverIndex !== null && (
            <Image
              src={lastThreeCaseStudies[hoverIndex].imageUrl}
              alt={lastThreeCaseStudies[hoverIndex].title}
              width={385}
              height={280}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
}

export default CaseStudyPage;