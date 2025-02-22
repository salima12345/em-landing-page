"use client";

import React, { useState, useRef, useMemo } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import AnimatedTitle from "@/components/ui/TitleReveal";
import TeamReveal from "@/components/TeamReveal";
import Footer from "@/components/layout/footer";
import { useLenis } from "@studio-freight/react-lenis";
import type Lenis from "@studio-freight/lenis/types"; 
import { useQuery } from "@apollo/client";
import { GET_TALENTS_PAGE, GET_TALENTS } from "@/lib/graphql/queries/TalentsQueries";
import { GET_EXPERTISES } from "@/lib/graphql/queries/ExpertiseQuery";

// Définir les types
type Talent = {
  id: string;
  talentId: string;
  slug: string;
  title: string;
  featuredImage?: {
    node?: {
      sourceUrl?: string;
    };
  };
  singleTalent?: {
    hasBio?: boolean;
    linkedin?: string;
    mail?: string;
    quote?: string;
    twitter?: string;
    status?: string;
  };
};

type Expertise = {
  id: string;
  title: string;
  singleExpertises: {
    team: {
      nodes: Array<{ id: string }>;
    };
  };
};

type TalentsPage = {
  template?: {
    talentsPage?: {
      title?: string;
      subtitle?: string;
      description?: string;
    };
  };
};

type TeamMember = {
  id: string;
  image?: string;
  name: string;
  jobTitle: string;
  hasBiography: boolean;
  slug: string;
};

const Team = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const imageRef = useRef(null);
  const teamSectionRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null); // Réintégration de lenisRef
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Réintégration de useLenis
  useLenis((lenis) => {
    lenisRef.current = lenis;
  });

  // Fetch des données
  const { data: talentsPageData } = useQuery<{ pages: { nodes: TalentsPage[] } }>(GET_TALENTS_PAGE);
  const { data: expertisesData } = useQuery<{ expertises: { nodes: Expertise[] } }>(GET_EXPERTISES);
  const { data: talentsData } = useQuery<{ talents: { nodes: Talent[] } }>(GET_TALENTS);

  // Trouver le template de la page Talents
  const talentsPageNode = talentsPageData?.pages?.nodes?.find(
    (node) => node.template?.templateName === "Talents"
  );
  const pageContent = talentsPageNode?.template?.talentsPage || {};

  // Créer une map des talents
  const talentsMap = useMemo(() => {
    return talentsData?.talents?.nodes?.reduce((acc: Record<string, Talent>, talent) => {
      acc[talent.id] = talent;
      return acc;
    }, {}) || {};
  }, [talentsData]);

  // Transformer les expertises en catégories
  const expertisesCategories = useMemo(() => {
    return expertisesData?.expertises?.nodes?.map((expertise) => ({
      name: expertise.title,
      members: expertise.singleExpertises.team.nodes
        .map((node) => talentsMap[node.id])
        .filter(Boolean),
    })) || [];
  }, [expertisesData, talentsMap]);

  // Créer un tableau de catégories avec l'option "ALL"
  const categories = useMemo(
    () => [
      {
        name: "ALL",
        members: talentsData?.talents?.nodes || [],
      },
      ...expertisesCategories,
    ],
    [expertisesCategories, talentsData]
  );

  // Obtenir les membres actifs en fonction de la catégorie sélectionnée
  const activeMembers = useMemo(() => {
    if (activeCategory === "ALL") {
      return [...(categories[0].members || [])].reverse(); // Inverser l'ordre pour "ALL"
    }
    return categories.find((c) => c.name === activeCategory)?.members || [];
  }, [activeCategory, categories]);

  // Transformer les membres en structure TeamMember
  const transformedMembers = useMemo(
    () =>
      activeMembers.map((member) => ({
        id: member.id,
        image: member.featuredImage?.node?.sourceUrl,
        name: member.title,
        jobTitle: member.singleTalent?.status || "",
        hasBiography: member.singleTalent?.hasBio || false,
        slug: member.slug,
      })),
    [activeMembers]
  );

  // Gérer le clic sur une catégorie avec Lenis
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);

    if (lenisRef.current && teamSectionRef.current) {
      const sectionTop = teamSectionRef.current.offsetTop - 120;

      // Utiliser Lenis pour le défilement fluide
      lenisRef.current.scrollTo(sectionTop, {
        duration: 2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  // Gérer les états de chargement et d'erreur
  if (!talentsPageData || !expertisesData || !talentsData) return <p>Loading...</p>;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      <main className="min-h-screen mt-16">
        <section>
          <div className="container mx-auto px-4">
            <AnimatedTitle
              text={pageContent?.title || "Talents"}
              className="font-semibold text-[14px] py-5"
            />
            <div className="overflow-hidden flex flex-col xl:flex-row items-start gap-6 xl:gap-16 w-full">
              <div className="xl:min-w-[560px]">
                <motion.h5
                  style={{ position: "relative" }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }}
                  className="font-semibold text-[34px] xl:text-[46px] leading-tight"
                >
                  {pageContent?.subtitle || "We are eliott & markus"}
                </motion.h5>
              </div>
              <div className="flex-1">
                <motion.p
                  style={{ position: "relative" }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }}
                  className="text-base md:text-lg text-foreground max-w-[600px] font-medium"
                  dangerouslySetInnerHTML={{
                    __html:
                      pageContent?.description ||
                      "eliott & markus is a community of talented people with unique personalities and varied backgrounds. What makes us unique is the way we bring them all together to serve our clients.",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="relative mt-8 mx-4 2xl:mx-16 w-auto h-[255px] xl:h-[344px] overflow-hidden rounded-lg">
            <motion.div
              ref={imageRef}
              variants={{
                hidden: { y: "-100%", opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
              }}
              initial="hidden"
              animate="visible"
              className="h-full w-full"
            >
              <Image
                src="https://www.eliott-markus.com/wp-content/uploads/2023/05/talent-bg-scaled.jpg.webp"
                alt="Eliott & Markus Team"
                width={255}
                height={344}
                className="rounded-lg"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </motion.div>
          </div>

          <div ref={teamSectionRef} className="container mx-auto px-4 mt-16 md:mt-24">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
              <motion.div
                className="w-full md:w-auto md:sticky md:top-28 self-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ul className="flex flex-row md:flex-col flex-wrap gap-3">
                  {categories.map((category, index) => (
                    <motion.li
                      key={category.name}
                      onClick={() => handleCategoryClick(category.name)}
                      className={`w-fit px-4 py-2 rounded-full cursor-pointer text-sm font-medium transition-all duration-300 ${
                        activeCategory === category.name
                          ? "bg-[#222222] text-[#E6E5DF]"
                          : "bg-[#E6E5DF] hover:bg-[#E6E5DF]/80"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {category.name}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="flex-grow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <TeamReveal members={transformedMembers} />
              </motion.div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Team;