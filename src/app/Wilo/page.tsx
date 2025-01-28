"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; 
import Article from "@/components/Article";
import Header from "@/components/layout/header";
import { articles } from "@/Data/Articles";

const CATEGORIES = [
  { name: "ALL" },
  { name: "Design" },
  { name: "Tech" },
  { name: "Digital" },
  { name: "SEO" },
  { name: "Expert Opinion" },
  { name: "Management" },
  { name: "Professions" },
  { name: "Skills" },
  { name: "Strategy" },
];

const ArticleGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredArticles =
    activeCategory === "ALL"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 mt-16">
        <div className="flex flex-col md:flex-row gap-24">
          <div className="w-auto md:sticky md:top-28 self-start">
            <ul className="flex flex-row md:flex-col flex-wrap gap-3">
              {CATEGORIES.map((category) => (
                <motion.li
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`inline-block px-4 py-2 rounded-full cursor-pointer text-sm font-medium transition-all duration-300 h-10 text-center ${
                    activeCategory === category.name
                      ? "bg-[#222222] text-[#E6E5DF]"
                      : "bg-[#E6E5DF] hover:bg-[#E6E5DF]/80"
                  }`}
                  style={{
                    width: `max(${category.name.length * 10}px, ${
                      category.name.length * 8
                    }px + 32px)`,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category.name}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <Link key={article.slug} href={`/Wilo/${article.slug}`}>
                  {/* Wrap the article in a link using slug */}
                  <Article {...article} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleGrid;
