"use client";
import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { articles } from "@/Data/Articles";
import Button from "@/components/ui/Button";
import AnimatedTitle from "@/components/ui/TitleReveal";
import { formatDate } from "@/utils/date";
import Article from "@/components/Article";
import Image from "next/image";
import { 
    ArrowLeft, 
    ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import Share from "@/components/Share"; 

interface Props {
  params: { slug: string };
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const ArticlePage: React.FC<Props> = ({ params }) => {
  const { slug } = params;
  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter(a => a.category === article.category && a.slug !== article.slug);

  return (
    <>
      <Header />
      <div className="container mt-16 mx-auto flex flex-col xl:flex-row gap-8 xl:gap-24">
        <motion.div 
          className="max-h-[80px]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <Button
            Icon={ArrowLeft}
            darkIconColor="#ffffff"
            altText="Back"
            isFixedSize={false}
            text="Back"
          />
        </motion.div>
        
        <div className="flex-1">
          <motion.div 
            className="flex flex-col gap-3"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div 
              className="flex gap-4 justify-end mb-6"
              variants={fadeUp}
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-4 rounded-full flex items-center justify-center bg-[#E6E5DF] hover:bg-[#D1D0CB] transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 group-hover:text-black transition-colors duration-300 text-[#646464]" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-4 rounded-full flex items-center justify-center bg-[#E6E5DF] hover:bg-[#D1D0CB] transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5 group-hover:text-black transition-colors duration-300 text-[#646464]" />
              </motion.button>
            </motion.div>

            <div className="xl:mr-[170px]">
              <AnimatedTitle 
                text={formatDate(new Date(article.publishDate))} 
                className="font-medium text-sm text-neutral-800"
              />
              
              <AnimatedTitle 
                text={article.author}
                className="font-semibold text-lg mt-5"
              />
              
              <AnimatedTitle 
                text={article.title}
                className="font-semibold text-2xl md:text-4xl mt-2"
              />

              <motion.div
                variants={scaleIn}
                className="mt-6"
              >
                <Image 
                  src={article.imageUrl} 
                  alt="article image"
                  width={792} 
                  height={162} 
                  className="rounded-lg w-full h-auto md:h-[162px] object-cover"
                />
              </motion.div>

              <motion.div 
                variants={fadeUp}
                className="mt-8"
              >
                {article.content.map((section, index) => (
                  <motion.div 
                    key={index} 
                    className="flex flex-col gap-4"
                    variants={fadeUp}
                  >
                    {section.title && (
                      <h2 className="text-xl md:text-2xl font-bold pb-4">{section.title}</h2>
                    )}
                    <p className="text-base md:text-lg leading-relaxed font-medium text-neutral-800 mb-6">
                      {section.body}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Use the Share component here */}
            <Share url={window.location.href} />

            {relatedArticles.length > 0 && (
              <motion.div 
                variants={fadeUp}
                className="mt-[75px]"
              >
                <h2 className="text-2xl md:text-[34px] font-semibold text-[#222] mb-8">More articles</h2>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-[115px]">
                  {relatedArticles.map((relatedArticle) => (
                    <Article
                      key={relatedArticle.slug}
                      title={relatedArticle.title}
                      imageUrl={relatedArticle.imageUrl}
                      description={relatedArticle.description}
                      publishDate={new Date(relatedArticle.publishDate)}
                      category={relatedArticle.category}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticlePage;