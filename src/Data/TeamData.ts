export interface TeamMember {
  name: string; 
  image: string; 
  jobTitle: string; 
  hasBiography?: boolean; 
  description?: string;
  slug?: string; 
  email?: string; 
  linkedIn?: string; 
  quote?: string; 
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
          hasBiography: true,
          slug: "gwenaelle-henri",
          email: "gwenaelle.henri@example.com",
          linkedIn: "https://linkedin.com/in/gwenaelle-henri",
          quote: "Challenging, supporting and revealing brands is our DNA. We believe in the power of innovation, audacity and creativity to push brands to new heights. ",
          description:
            "Gwénaëlle is a passionate marketing and communications professional. With her creativity, strategic expertise and commitment to excellence, she has made a name for herself as a recognized expert.\n\n With an impressive track record, Gwénaëlle has acquired solid expertise in the fields of branding, marketing and organizational communications. Her holistic approach and ability to understand the unique needs of each client enable  her to develop effective and tailored strategies. \n\nGwenaëlle is known for her innovative spirit and ability to creatively meet challenges. She is constantly on the lookout for the latest trends and best practices in marketing and communications, in order to offer clients innovative and high-impact solutions.\n\nShe is also an expert in communications for professional services firms, mastering their specific issues and ethics.\n\nWithin the agency, Gwénaëlle oversees the management of special projects with high strategic value: repositioning, mergers as well as innovative projects."
        
  

        },
        {
          name: "Ilias Meslohi",
          image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Ilias_Meslohi-scaled.jpg",
          jobTitle: "Head of Strategy",
          hasBiography: true,
          slug: "ilyas-Maslohi"

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
      name: "Media",
      members: [
        {
            name: "Christelle Rivière",
            image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Christelle-Riviere.jpg",
            jobTitle: "Media Consultant & Influence Senior",
            hasBiography: true,
            slug:"christelle-rivière"

          },
          {
            name: "Florence Jouffroy",
            image: "https://www.eliott-markus.com/wp-content/uploads/2023/11/EM_SITE_Florence-Jouffroy.png.webp",
            jobTitle: "Senior Advisor",
          },
         
            {
              name: "Pascal Mendak",
              image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Pascal-Mendak.jpg.webp",
              jobTitle: "Senior Advisor ",
            },
            {
              name: "Zarema Kanieva",
              image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Zarema-KANIEVA.jpg.webp",
              jobTitle: "Media Consultant & Influence Senior"
            },
            {
              name: "Maud Savarit",
              image: "https://www.eliott-markus.com/wp-content/uploads/2023/10/EM_SITE_Maud.jpg.webp",
              jobTitle: "Media Consultant & Influence Senior",
            },
           
        
      ]
    },
    {
      name: "Web",
      members: [
        {
            name: "Younes Quorsane",
            image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/EM_SITE_PHOTOS_CASA.jpg.webp",
            jobTitle: "Chief Technical Officer (CTO)",
            hasBiography: true,
            slug:"younes-quorsane"
          },
          {
            name: "Btissame Qorchi",
            image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Btissame_Qorchi-scaled.jpg.webp",
            jobTitle: "Infrastructure & Tech Manager",
            hasBiography: true,
            slug:"btissame-qochi"

          },
         
            {
              name: "Said Mounaim",
              image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Said_Mounaim-scaled.jpg",
              jobTitle: "Full Stack Developer ",
            },
            {
              name: "Imrane labrahimi",
              image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Imarane_Labrahimi-scaled.jpg",
              jobTitle: "Full Stack Developer"
            },
            {
              name: "Najib Tais",
              image:"https://www.eliott-markus.com/wp-content/uploads/2023/05/Najib-Tais.jpg",
              jobTitle: "Front-End Developer",
            },
            {
                name: "Jaouad Achaari",
                image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Jaouad-Achaari.jpg",
                jobTitle: "Front-End Developer"
              },
              {
                name: "Salima El Khalidi",
                image: "",
                jobTitle: "Front-End Developer"
              },
              {
                name: "Mohammed Atef",
                image: "",
                jobTitle: "Full Stack Developer"
              },
              {
                name: "Rim Harrane",
                image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Rim_Harrane-scaled.jpg.webp",
                jobTitle: "Web account manager"
              },
              {
                name: "Hasnaa Bouhadda",
                image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Hasnaa-Bouhadda.jpg",
                jobTitle: "Chef de Projet Junior"
              },
        
      ]
    },
    {
      name: "Design",
      members: [
        {
            name: "Houssam Chhih",
            image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Houssam_Chhih-scaled.jpg.webp",
            jobTitle: "Head of Design",
            hasBiography: true,
            slug:"houssam-chhih"
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
    },
    {
      name: "SocialMedia",
      members: [
        {
          name: "Gwénaëlle Henri",
          image: "https://www.eliott-markus.com/wp-content/uploads/2023/11/Capture-decran-2023-11-10-a-19.24.14.png",
          jobTitle: "President & Founder",
          hasBiography: true,
          slug: "gwenaelle-henri"

        },
        {
          name: "Ilias Meslohi",
          image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Ilias_Meslohi-scaled.jpg",
          jobTitle: "Head of Strategy",
          hasBiography: true,
          slug: "ilyas-Maslohi"

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
          }
        // Autres membres...
      ]
    },
    {
      name: "Content",
      members: [
        {
            name: "Houssam Chhih",
            image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Houssam_Chhih-scaled.jpg.webp",
            jobTitle: "Head of Design",
            hasBiography: true,
            slug: "houssam-chhih"

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
    },
    {
      name: "Outsourcing",
      members: [
        {
          name: "Gwénaëlle Henri",
          image: "https://www.eliott-markus.com/wp-content/uploads/2023/11/Capture-decran-2023-11-10-a-19.24.14.png",
          jobTitle: "President & Founder",
          hasBiography: true,
          slug: "gwenaelle-henri"

        },
        {
          name: "Ilias Meslohi",
          image: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Ilias_Meslohi-scaled.jpg",
          jobTitle: "Head of Strategy",
          hasBiography: true,
          slug: "ilyas-Maslohi"


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
  ];