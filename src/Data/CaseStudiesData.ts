interface CaseStudy {
    imageUrl: string;
    title: string;
    description: string;
    expertise: { name: string }[];
    href: string;
  }
  
  interface CaseStudiesData {
    [key: string]: CaseStudy[];
  }
  
  export const CASE_STUDIES: CaseStudiesData = {
    Strategy: [
      {
        imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
        title: "Global Brand Strategy Transformation",
        description: "Complete rebranding and strategic positioning for a leading financial institution",
        expertise: [{ name: "Brand Strategy" }, { name: "Marketing" }],
        href: "/case-studies/brand-strategy-transformation"
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978",
        title: "Digital Marketing Excellence",
        description: "Comprehensive digital strategy implementation for professional services firm",
        expertise: [{ name: "Digital Strategy" }, { name: "Content Strategy" }],
        href: "/case-studies/digital-marketing-excellence"
      }
    ],
    Design: [
      {
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
        title: "Visual Identity System",
        description: "Creating a cohesive brand identity system for a global tech company",
        expertise: [{ name: "Visual Identity" }, { name: "UI Design" }],
        href: "/case-studies/visual-identity-system"
      }
    ],
    Web: [
      {
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        title: "Enterprise Platform Development",
        description: "Building a scalable web platform with advanced CRM integration",
        expertise: [{ name: "Web Development" }, { name: "CRM Integration" }],
        href: "/case-studies/enterprise-platform"
      }
    ]
  };