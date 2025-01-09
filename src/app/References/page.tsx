"use client";

import React, { useState, useEffect } from 'react';
import CaseStudy from '@/components/CaseStudy';
import Footer from '@/components/layout/footer';

const ITEMS_PER_PAGE = 6;

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

const caseStudies = [
  {
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced features and seamless user experience",
    expertise: [
      { name: "Web Development" },
      { name: "UI/UX Design" },
      { name: "SEO" }
    ],
    categories: ['tech', 'design'],
    href: "/case-study/e-commerce"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop",
    title: "Corporate Website",
    description: "Enterprise-level website with focus on performance and accessibility",
    expertise: [
      { name: "Web Design" },
      { name: "Content Strategy" }
    ],
    categories: ['design', 'content'],
    href: "/case-study/corporate"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2340&auto=format&fit=crop",
    title: "Social Media Campaign",
    description: "Comprehensive social media strategy with measurable results",
    expertise: [],
    categories: ['social', 'media'],
    href: "/case-study/social-media"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop",
    title: "Digital Marketing Suite",
    description: "Integrated marketing solution for growing businesses",
    expertise: [
      { name: "Digital Marketing" },
      { name: "Social Media" },
      { name: "Content Creation" }
    ],
    categories: ['strategy', 'social'],
    href: "/case-study/marketing"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2340&auto=format&fit=crop",
    title: "Tech Startup Platform",
    description: "Innovative platform for connecting startups with investors",
    expertise: [
      { name: "Web Development" },
      { name: "UI/UX Design" }
    ],
    categories: ['tech', 'strategy'],
    href: "/case-study/startup"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2340&auto=format&fit=crop",
    title: "Healthcare Analytics",
    description: "Advanced analytics dashboard for healthcare providers",
    expertise: [
      { name: "Data Visualization" },
      { name: "Web Development" }
    ],
    categories: ['tech'],
    href: "/case-study/healthcare"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2340&auto=format&fit=crop",
    title: "Educational Platform",
    description: "Online learning platform with interactive features",
    expertise: [],
    categories: ['tech', 'content'],
    href: "/case-study/education"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2340&auto=format&fit=crop",
    title: "Real Estate App",
    description: "Property management and listing application",
    expertise: [
      { name: "Mobile Development" },
      { name: "UI/UX Design" }
    ],
    categories: ['tech', 'design'],
    href: "/case-study/real-estate"
  }
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

  const filteredStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || study.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });
  return (
    <>
    <div className="min-h-screen container relative px-10">
      <div 
        className={` hidden xl:flex items-center gap-4 mt-[30px] mb-[65px] bg-[#222222] rounded-[30px] px-[11px] h-[65px] transition-all duration-1000 z-[999]  ${
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
          <div className=" w-[35px] h-[35px] flex items-center justify-center bg-[#222222] rounded-full mr-[6px]">
            <svg
              className="w-4 h-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        
        <div className=" flex-1">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 relative z-[10]">
        {filteredStudies.slice(0, visibleItems).map((study, index) => (
          <CaseStudy
            key={index}
            imageUrl={study.imageUrl}
            title={study.title}
            description={study.description}
            expertise={study.expertise || []}
            href={study.href}
          />
        ))}
      </div>

    </div>
          <Footer />
          </>

  );
}

export default References;