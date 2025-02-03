"use client";

import React, { useState, useEffect } from 'react';
import CaseStudy from '@/components/CaseStudy';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import {  CASE_STUDIES, ITEMS_PER_PAGE } from '@/Data/CaseStudiesData';

const CATEGORIES = [
  { id: 'all', label: 'All', color: 'bg-white text-black' },
  { id: 'strategy', label: 'Strategy', color: 'bg-[#274424] text-white' },
  { id: 'media', label: 'Media', color: 'bg-[#f2bd41] text-[#e0643a]' },
  { id: 'design', label: 'Design', color: 'bg-[#ecc6c7] text-[#1d4520]' },
  { id: 'tech', label: 'Tech/Web', color: 'bg-[#2c5dcd] text-[#a6d4f9]' },
  { id: 'content', label: 'Edition/Content', color: 'bg-[#e0643a] text-white' },
  { id: 'social', label: 'Social Media/SEO', color: 'bg-[#afd3f5] text-[#125ed4]' },
  { id: 'outsourcing', label: 'Outsourcing', color: 'bg-[#f1efe6] text-black' },
];
function References() {
  
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [headerHidden, setHeaderHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHeaderHidden(true);
      } else {
        setHeaderHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const filteredStudies = CASE_STUDIES.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || study.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="min-h-screen container relative px-10 mt-16">
        <div 
          className={`hidden xl:flex items-center gap-4 mt-[30px] mb-[65px] bg-[#222222] rounded-[30px] px-[11px] h-[65px] transition-all duration-1000 z-30 ${
            headerHidden ? 'sticky top-[30px]' : 'sticky top-[110px]'
          }`}
        >
          <div className="flex items-center justify-between bg-[#313131] h-[46px] w-[335px] rounded-[27px]">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none font-medium text-[14px] text-white placeholder-white pl-[18px]"
            />
            <div className="w-[35px] h-[35px] flex items-center justify-center bg-[#222222] rounded-full mr-[6px]">
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
          
          <div className="flex-1">
            <ul className="flex items-center gap-[15px]">
              {CATEGORIES.map((category) => (
                <li
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`font-medium text-[14px] px-[15px] rounded-[27px] cursor-pointer transition-all duration-500 flex items-center justify-center ${
                    selectedCategory === category.id 
                      ? 'h-[52px] rounded-[9px] transform scale-105' 
                      : 'h-[40px]'
                  } ${category.color}`}
                >
                  {category.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {filteredStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 relative z-[10]">
          {filteredStudies.slice(0, visibleItems).map((study, index) => (
  <CaseStudy
    key={index}
    imageUrl={study.imageUrl}
    title={study.title}
    description={study.description}
    expertise={study.expertise}
    slug={study.slug}  
  />
))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 px-4">
            <div className="bg-[#222222] rounded-full p-6 mb-6">
              <svg
                className="w-12 h-12 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="21" y1="11" x2="13" y2="11" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">No results found</h3>
            <p className="text-muted-foreground text-center max-w-[500px] mb-8">
              {searchTerm 
                ? `We couldn't find any results for "${searchTerm}"`
                : `No projects found in the ${selectedCategory === 'all' ? 'selected category' : CATEGORIES.find(c => c.id === selectedCategory)?.label}`}
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-[#222222] text-white rounded-full hover:bg-[#333333] transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default References;