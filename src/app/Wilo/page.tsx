"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Article from '@/components/Artical';
import Header from '@/components/layout/header';

interface ArticleData {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  publishDate: Date;
  category: string;
}

const CATEGORIES = [
  { name: 'ALL' },
  { name: 'Design' },
  { name: 'Tech' },
  { name: 'Digital' },
  { name: 'SEO' },
  { name: 'Expert Opinion' },
  { name: 'Management' },
  { name: 'Professions' },
  { name: 'Skills' },
  { name: 'Strategy' },
];

const generateArticles = (count: number = 30): ArticleData[] => {
  const topics = [
    {
      title: 'The Future of Web Development',
      category: 'Tech',
      description: 'Explore the latest trends and innovations shaping the future of web development.',
      imageUrl: 'https://picsum.photos/seed/tech/400/300'
    },
    {
      title: 'Design Systems in Modern Applications',
      category: 'Design',
      description: 'Learn how design systems are revolutionizing the way we build and maintain modern applications.',
      imageUrl: 'https://picsum.photos/seed/design/400/300'
    },
    {
      title: 'AI in Software Engineering',
      category: 'Tech',
      description: 'Exploring the impact of artificial intelligence on software development practices.',
      imageUrl: 'https://picsum.photos/seed/ai/400/300'
    },
    {
      title: 'UX Design Principles',
      category: 'Design',
      description: 'Fundamental principles of user experience design that create intuitive interfaces.',
      imageUrl: 'https://picsum.photos/seed/ux/400/300'
    }
  ];

  return Array.from({ length: count }, (_, index) => {
    const topic = topics[index % topics.length];
    return {
      ...topic,
      id: `article-${index}`,
      publishDate: new Date(Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000)
    };
  });
};

const ArticleGrid: React.FC = () => {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [activeCategory, setActiveCategory] = useState('ALL');

  useEffect(() => {
    setArticles(generateArticles());
  }, []);

  const filteredArticles = activeCategory === 'ALL'
    ? articles
    : articles.filter(article => article.category === activeCategory);

  return (
    <>
      <Header/>
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
        ? 'bg-[#222222] text-[#E6E5DF]'
        : 'bg-[#E6E5DF] hover:bg-[#E6E5DF]/80'
    }`}
    style={{ width: `max(${category.name.length * 10}px, ${category.name.length * 8}px + 32px)` }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {category.name}
  </motion.li>
))}
            </ul>
          </div>
          
          <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
              {filteredArticles.map(article => (
                <Article key={article.id} {...article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleGrid;