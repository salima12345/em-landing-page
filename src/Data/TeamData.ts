export interface TeamMember {
    name: string;
    image: string;
    jobTitle: string;
    hasBiography?: boolean;
    description?: string;
  }
  
  export interface TeamGroup {
    name: string;
    members: TeamMember[];
  }
  
  export const teamGroups: TeamGroup[] = [
    {
      name: "Strategy",
      members: [
        {
          name: "Gwénaëlle Henri",
          image: "https://www.eliott-markus.com/wp-content/uploads/2023/11/Capture-decran-2023-11-10-a-19.24.14.png",
          jobTitle: "President & Founder",
          hasBiography: true
        },
        {
          name: "Ilias Meslohi",
          image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Ilias_Meslohi-scaled.jpg",
          jobTitle: "Head of Strategy",
          hasBiography: true
        },
        {
            name: "Chama Loufa",
            image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Chama_Loufa-scaled.jpg",
            jobTitle: "Brand Consultant"
          },
          {
            name: "Sara Elkinani",
            image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Sara_Elkinani-scaled.jpg",
            jobTitle: "Brand Consultant",
            hasBiography: true
          },
          {
            name: "Hind Sody",
            image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/EM_SITE_HIND_CASA.jpg",
            jobTitle: "Junior Brand Consultant"
          },
          {
            name: "Florence Jouffroy",
            image: "https://www.eliott-markus.com/wp-content/uploads/2023/11/EM_SITE_Florence-Jouffroy.png",
            jobTitle: "Senior Advisor",
            hasBiography: true
          }
        // Autres membres...
      ]
    },
    {
      name: "Design",
      members: [
        {
            name: "Houssam Chhih",
            image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Houssam_Chhih-scaled.jpg.webp",
            jobTitle: "Head of Design",
            hasBiography: true
          },
          {
            name: "Mehdi Belhajjam",
            image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Mehdi_Belhajjam.jpg",
            jobTitle: "Art Director",
          },
         
            {
              name: "Yassine Abdeljalil",
              image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Yassine_Abdeljalil-scaled.jpg",
              jobTitle: "Senior Web Designer ",
            },
            {
              name: "Marwane El Ouakil",
              image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/MARWANE_EL_OUAKIL.jpg",
              jobTitle: "Graphic Designer & Videographer"
            },
            {
              name: "Khouloud Hajri",
              image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Khouloud_Hajri_EM.jpg",
              jobTitle: "Graphic Designer",
            },
            {
                name: "Zineb Masbah",
                image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Zineb_Masbah-scaled.jpg",
                jobTitle: "Junior Web Designer"
              },
        
      ]
    }
  ];