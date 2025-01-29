interface ContentBlock {
  type: 'image' | 'video' | 'text';
  content: string;
  description?: string;
  layout?: 'full' | 'left' | 'right';
}

interface BlogPost {
  title: string;
  date: string;
  author: string;
  summary: string;
  content: ContentBlock[];
}

interface CaseStudy {
  imageUrl: string;
  title: string;
  description: string;
  expertise: { name: string }[];
  slug: string;
  categories: string[];
  blogs?: BlogPost[];
}

export const CATEGORIES = [
  { id: 'all', label: 'All', color: 'bg-white text-black' },
  { id: 'strategy', label: 'Strategy', color: 'bg-[#274424] text-white' },
  { id: 'media', label: 'Media', color: 'bg-[#f2bd41] text-[#e0643a]' },
  { id: 'design', label: 'Design', color: 'bg-[#ecc6c7] text-[#1d4520]' },
  { id: 'tech', label: 'Tech/Web', color: 'bg-[#2c5dcd] text-[#a6d4f9]' },
  { id: 'content', label: 'Edition/Content', color: 'bg-[#e0643a] text-white' },
  { id: 'social', label: 'Social Media/SEO', color: 'bg-[#afd3f5] text-[#125ed4]' },
  { id: 'outsourcing', label: 'Outsourcing', color: 'bg-[#f1efe6] text-black' },
];

export const ITEMS_PER_PAGE = 6;

export const CASE_STUDIES: CaseStudy[] = [
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
    slug: "e-commerce-platform",
    blogs: [
      {
        title: "Building a Scalable E-commerce Platform",
        date: "2024-01-15",
        author: "Sarah Johnson",
        summary: "A deep dive into the technical challenges and solutions",
        content: [
          {
            type: "text",
            content: "When we embarked on this e-commerce project, we knew scalability would be our biggest challenge. The client needed a platform that could handle millions of products and concurrent users while maintaining sub-second response times.",
          },
          {
            type: "image",
            content: "/images/ecommerce-architecture.jpg",
            description: "High-level architecture diagram of the platform",
            layout: "full"
          },
          {
            type: "text",
            content: "Our solution leveraged microservices architecture with event-driven communication between components. This allowed us to scale individual services independently based on load.",
          },
          {
            type: "video",
            content: "/videos/demo-walkthrough.mp4",
            description: "Platform features demonstration"
          }
        ]
      },
      {
        title: "Optimizing User Experience",
        date: "2024-01-20",
        author: "David Lee",
        summary: "How we achieved a 95+ Performance Score",
        content: [
          {
            type: "text",
            content: "Performance was critical for our e-commerce platform's success. We implemented advanced caching strategies and optimized our build process to ensure lightning-fast page loads.",
          },
          {
            type: "image",
            content: "/images/performance-metrics.jpg",
            description: "Performance improvements over time",
            layout: "right"
          },
          {
            type: "text",
            content: "Through careful optimization and monitoring, we achieved consistent sub-second page loads across all major markets."
          }
        ]
      }
    ]
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
    slug: "corporate-website-redesign",
    blogs: [
      {
        title: "Accessibility First Design",
        date: "2024-01-20",
        author: "Michael Chen",
        summary: "How we achieved WCAG AAA compliance",
        content: [
          {
            type: "text",
            content: "Accessibility was a core requirement from day one. Our team worked closely with accessibility experts and users with different abilities to ensure the website was truly inclusive.",
          },
          {
            type: "image",
            content: "/images/accessibility-audit.jpg",
            description: "Accessibility audit results",
            layout: "right"
          },
          {
            type: "text",
            content: "The implementation included advanced ARIA labels, keyboard navigation, and screen reader optimizations."
          }
        ]
      },
      {
        title: "Content Strategy Evolution",
        date: "2024-01-25",
        author: "Emma Wilson",
        summary: "Developing a content-first approach",
        content: [
          {
            type: "text",
            content: "Our content strategy focused on creating clear, engaging content that effectively communicated the company's mission and values.",
          },
          {
            type: "image",
            content: "/images/content-matrix.jpg",
            description: "Content strategy framework",
            layout: "full"
          }
        ]
      }
    ]
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2340&auto=format&fit=crop",
    title: "Social Media Campaign",
    description: "Comprehensive social media strategy with measurable results",
    expertise: [],
    categories: ['social', 'media'],
    slug: "viral-social-campaign",
    blogs: [
      {
        title: "Viral Campaign Analysis",
        date: "2024-02-01",
        author: "Alex Rivera",
        summary: "Breaking down our most successful campaign",
        content: [
          {
            type: "text",
            content: "The campaign's success was built on three key pillars: authentic storytelling, community engagement, and data-driven optimization.",
          },
          {
            type: "image",
            content: "/images/campaign-metrics.jpg",
            description: "Campaign performance dashboard",
            layout: "full"
          },
          {
            type: "video",
            content: "/videos/campaign-highlights.mp4",
            description: "Campaign highlight reel"
          }
        ]
      }
    ]
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
    slug: "digital-marketing-suite",
    blogs: [
      {
        title: "Integrated Marketing Approach",
        date: "2024-02-10",
        author: "David Park",
        summary: "Creating a cohesive digital marketing ecosystem",
        content: [
          {
            type: "text",
            content: "Our integrated approach combined multiple channels into a single, coherent strategy that delivered measurable results.",
          },
          {
            type: "image",
            content: "/images/marketing-funnel.jpg",
            description: "Marketing funnel visualization",
            layout: "right"
          },
          {
            type: "text",
            content: "By aligning all marketing channels, we achieved a 300% increase in qualified leads."
          }
        ]
      }
    ]
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
    slug: "startup-platform",
    blogs: [
      {
        title: "Building the Startup Ecosystem",
        date: "2024-02-15",
        author: "Lisa Chen",
        summary: "Creating a platform that connects founders with investors",
        content: [
          {
            type: "text",
            content: "The platform needed to serve both startups and investors while maintaining a balance of interests and ensuring data privacy.",
          },
          {
            type: "image",
            content: "/images/platform-dashboard.jpg",
            description: "Investor dashboard overview",
            layout: "full"
          },
          {
            type: "text",
            content: "We implemented secure data rooms and granular permission controls to protect sensitive information."
          }
        ]
      }
    ]
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
    slug: "healthcare-analytics",
    blogs: [
      {
        title: "Data-Driven Healthcare Decisions",
        date: "2024-02-20",
        author: "Dr. James Wilson",
        summary: "How analytics is transforming healthcare delivery",
        content: [
          {
            type: "text",
            content: "By combining multiple data sources and applying advanced analytics, we helped healthcare providers make better decisions.",
          },
          {
            type: "video",
            content: "/videos/analytics-demo.mp4",
            description: "Dashboard walkthrough"
          },
          {
            type: "image",
            content: "/images/analytics-impact.jpg",
            description: "Impact metrics",
            layout: "left"
          }
        ]
      }
    ]
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2340&auto=format&fit=crop",
    title: "Educational Platform",
    description: "Online learning platform with interactive features",
    expertise: [],
    categories: ['tech', 'content'],
    slug: "educational-platform",
    blogs: [
      {
        title: "Reimagining Online Education",
        date: "2024-02-25",
        author: "Maria Rodriguez",
        summary: "Creating an engaging virtual learning environment",
        content: [
          {
            type: "text",
            content: "The challenge was to create an online learning experience that was as engaging as traditional classroom learning.",
          },
          {
            type: "image",
            content: "/images/learning-dashboard.jpg",
            description: "Student learning dashboard",
            layout: "full"
          },
          {
            type: "video",
            content: "/videos/interactive-demo.mp4",
            description: "Interactive features showcase"
          }
        ]
      },
      {
        title: "Analytics in Education",
        date: "2024-03-01",
        author: "John Smith",
        summary: "Using data to improve learning outcomes",
        content: [
          {
            type: "text",
            content: "We implemented learning analytics to track student progress and identify areas for improvement.",
          },
          {
            type: "image",
            content: "/images/learning-metrics.jpg",
            description: "Learning analytics dashboard",
            layout: "right"
          }
        ]
      }
    ]
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
    slug: "real-estate-app",
    blogs: [
      {
        title: "Revolutionizing Property Management",
        date: "2024-03-01",
        author: "Tom Anderson",
        summary: "How we simplified property management through technology",
        content: [
          {
            type: "text",
            content: "Our app streamlined property management by automating routine tasks and providing real-time insights.",
          },
          {
            type: "image",
            content: "/images/app-screens.jpg",
            description: "Key app screens",
            layout: "right"
          },
          {
            type: "video",
            content: "/videos/feature-walkthrough.mp4",
            description: "Feature demonstration"
          }
        ]
      },
      {
        title: "UX Research Findings",
        date: "2024-03-05",
        author: "Rachel Kim",
        summary: "Key insights from our user research",
        content: [
          {
            type: "text",
            content: "Extensive user research helped us identify and address the main pain points in property management.",
          },
          {
            type: "image",
            content: "/images/user-research.jpg",
            description: "User research findings",
            layout: "full"
          }
        ]
      }
    ]
  }
];

export type { CaseStudy, BlogPost, ContentBlock };