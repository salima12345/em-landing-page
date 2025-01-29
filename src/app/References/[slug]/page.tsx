"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { CASE_STUDIES } from '@/Data/CaseStudiesData';
import { useParams } from 'next/navigation';

function CaseStudyPage() {
  const { slug } = useParams();
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  return (
    <>
      <Header />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className=" max-w-6xl mx-auto px-4">
          <div className="breadcrumb">
            <ul className="flex items-center gap-2">
              <li><a href="/references-clients" className="text-gray-600 hover:text-gray-900">Références</a></li>
              <li className="arrow">→</li>
              <li>{caseStudy.title}</li>
            </ul>
          </div>

          <div className=" mt-6">
            <div className="header-singleReference">
              <motion.h1
                className="text-2xl font-semibold text-gray-900"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <small>{caseStudy.title}</small>
              </motion.h1>
              <div className=" mt-6">
                <ul className="flex gap-2">
                  {caseStudy.categories.map((category, index) => (
                    <li key={index}>
                      <span className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-900 hover:bg-gray-200">
                        {category}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <motion.div
              className=" mt-8 h-96 rounded-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <img src={caseStudy.imageUrl} alt={caseStudy.title} className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              className="mt-12 px-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="text-lg text-gray-900 leading-relaxed">{caseStudy.description}</p>
            </motion.div>

            {caseStudy.blogs && (
              <div className="gallery-singleReference mt-12">
                {caseStudy.blogs.map((blog, blogIndex) => (
                  <div key={blogIndex} className="blog-post mb-12">
                    <h2 className="text-xl font-semibold text-gray-900">{blog.title}</h2>
                    <p className="text-sm text-gray-600 mt-2">{blog.date} by {blog.author}</p>
                    <p className="text-lg text-gray-900 mt-4">{blog.summary}</p>
                    <div className="blog-content mt-6">
                      {blog.content.map((contentBlock, blockIndex) => (
                        <motion.div
                          key={blockIndex}
                          className="content-block mb-8"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.8 + blockIndex * 0.2, duration: 0.5 }}
                        >
                          {contentBlock.type === 'text' && (
                            <p className="text-lg text-gray-900 leading-relaxed">{contentBlock.content}</p>
                          )}
                          {contentBlock.type === 'image' && (
                            <div className={`image overflow-hidden rounded-lg ${contentBlock.layout === 'full' ? 'w-full' : contentBlock.layout === 'left' ? 'float-left mr-4 w-1/2' : 'float-right ml-4 w-1/2'}`}>
                              <img src={contentBlock.content} alt={contentBlock.description} className="w-full h-full object-cover" />
                            </div>
                          )}
                          {contentBlock.type === 'video' && (
                            <div className="video h-96 rounded-lg overflow-hidden">
                              <video autoPlay muted loop controls className="w-full h-full object-cover">
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

            <div className=" mt-12 pt-6 border-t border-gray-300 flex justify-end items-center gap-4">
              <span className="text-lg text-gray-900">Partager sur</span>
              <ul className="flex gap-4">
                <li>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <div className="icon w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12.985" height="12.985" viewBox="0 0 12.985 12.985">
                        <path d="M2.907,12.986H.214V4.316H2.907ZM1.559,3.134A1.566,1.566,0,1,1,3.118,1.56,1.572,1.572,0,0,1,1.559,3.134Zm11.423,9.852H10.3V8.765c0-1.006-.02-2.3-1.4-2.3-1.4,0-1.614,1.093-1.614,2.223v4.293H4.593V4.316H7.175V5.5h.038A2.829,2.829,0,0,1,9.76,4.1c2.725,0,3.225,1.794,3.225,4.125v4.762Z" />
                      </svg>
                    </div>
                    <small>Linkedin</small>
                  </a>
                </li>
                <li>
                  <a href={`https://twitter.com/share?url=${window.location.href}`} target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <div className="icon w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12.985" height="10.546" viewBox="0 0 12.985 10.546">
                        <path d="M11.65,6.009c.008.115.008.231.008.346a7.52,7.52,0,0,1-7.572,7.572A7.521,7.521,0,0,1,0,12.732a5.506,5.506,0,0,0,.643.033,5.33,5.33,0,0,0,3.3-1.137A2.666,2.666,0,0,1,1.458,9.783a3.356,3.356,0,0,0,.5.041,2.815,2.815,0,0,0,.7-.091A2.662,2.662,0,0,1,.527,7.121V7.088a2.68,2.68,0,0,0,1.2.338A2.665,2.665,0,0,1,.906,3.867,7.565,7.565,0,0,0,6.394,6.652a3,3,0,0,1-.066-.61,2.664,2.664,0,0,1,4.606-1.821,5.24,5.24,0,0,0,1.689-.643,2.654,2.654,0,0,1-1.17,1.467A5.335,5.335,0,0,0,11.65,6.009Z" />
                      </svg>
                    </div>
                    <small>Twitter</small>
                  </a>
                </li>
                <li>
                  <a href={`https://www.facebook.com/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <div className="icon w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="7.847" height="14.652" viewBox="0 0 7.847 14.652">
                        <path d="M8.942,8.242,9.349,5.59H6.805V3.869A1.326,1.326,0,0,1,8.3,2.437H9.457V.179A14.1,14.1,0,0,0,7.4,0,3.237,3.237,0,0,0,3.939,3.569V5.59H1.609V8.242H3.939v6.41H6.805V8.242Z" />
                      </svg>
                    </div>
                    <small>Facebook</small>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
}

export default CaseStudyPage;