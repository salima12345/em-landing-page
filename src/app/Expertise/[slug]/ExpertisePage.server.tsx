import { GET_EXPERTISE_BY_SLUG } from '@/lib/graphql/queries/ExpertiseQuery';
import { GET_TALENTS_BY_IDS } from '@/lib/graphql/queries/TalentsQueries';
import client from '@/lib/apollo-client';
import { PAGE_CONTENT } from '@/Data/expertiseData';
import { CASE_STUDIES } from '@/Data/CaseStudiesData';
import ExpertisePageClient from './ExpertisePageClient';

interface Talent {
  id: string;
  title: string;
  singleTalent?: {
    status?: string;
    hasBio?: boolean;
    linkedin?: string;
    mail?: string;
    quote?: string;
  };
  featuredImage?: {
    node?: {
      sourceUrl?: string;
    };
  };
  slug: string;
}

const EXPERTISE_COLOR_SCHEMES: { [key: number]: { heroTextColor: string; servicesBgColor: string; servicesTextColor: string } } = {
  67: { heroTextColor: '#1D4520', servicesBgColor: '#1D4520', servicesTextColor: '#FFFFFF' },
  74: { heroTextColor: '#1D4520', servicesBgColor: '#ECC6C7', servicesTextColor: '#1D4520' },
  75: { heroTextColor: '#E0643A', servicesBgColor: '#F2BD41', servicesTextColor: '#1D4520' },
  76: { heroTextColor: '#125ed4', servicesBgColor: '#A6D4F9', servicesTextColor: '#125ed4' },
  77: { heroTextColor: '#125ed4', servicesBgColor: '#125ed4', servicesTextColor: '#FFFFFF' },
  78: { heroTextColor: '#125ed4', servicesBgColor: '#E6E5DF', servicesTextColor: '#125ed4' },
  73: { heroTextColor: '#E0643A', servicesBgColor: '#E0643A', servicesTextColor: '#FFFFFF' }
};

const DEFAULT_COLOR_SCHEME = {
  heroTextColor: '#000000',
  servicesBgColor: '#E6E5DF',
  servicesTextColor: '#125ed4'
};

const getColorScheme = (expertiseId: number) => {
  return EXPERTISE_COLOR_SCHEMES[expertiseId] || DEFAULT_COLOR_SCHEME;
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ExpertisePageServer({ params }: PageProps) {
  const { slug } = await params;

  try {
    // Fetch expertise data
    const { data: expertiseData } = await client.query({
      query: GET_EXPERTISE_BY_SLUG,
      variables: { slug }
    });

    console.log('Expertise Data:', expertiseData);

    const wpExpertise = expertiseData?.expertises?.nodes?.[0];
    console.log('WP Expertise:', wpExpertise);

    let pageContent;

    if (wpExpertise) {
      const colorScheme = getColorScheme(wpExpertise.expertiseId);
      pageContent = {
        title: wpExpertise.title,
        description: wpExpertise.singleExpertises?.subtitle || '',
        servicesDescription: wpExpertise.content || '',
        services: wpExpertise.singleExpertises?.services?.map((s: any) => s.service) || [],
        ...colorScheme,
        imageSrc: wpExpertise.featuredImage?.node?.sourceUrl || '/images/default-expertise.jpg'
      };
    } else {
      console.warn('Using static data for expertise:', slug);
      pageContent = PAGE_CONTENT[slug];
    }

    if (!pageContent) {
      return <p>Page not found</p>;
    }

    // Fetch team members dynamically
    interface TeamNode {
      id: string;
    }

    interface SingleExpertises {
      team?: {
        nodes?: TeamNode[];
      };
    }

    const teamIds: string[] = (wpExpertise?.singleExpertises as SingleExpertises)?.team?.nodes?.map((node: TeamNode) => node.id) || [];
    console.log('Team IDs:', teamIds);

    const { data: talentsData } = await client.query<{ talents: { nodes: Talent[] } }>({
      query: GET_TALENTS_BY_IDS,
      variables: { ids: teamIds }
    });

    console.log('Talents Data:', talentsData);

    const members = talentsData?.talents?.nodes?.map(talent => ({
      id: talent.id,
      name: talent.title,
      jobTitle: talent.singleTalent?.status || '',
      image: talent.featuredImage?.node?.sourceUrl || '/images/default-avatar.jpg',
      slug: talent.slug,
      hasBio: talent.singleTalent?.hasBio || false,
      linkedin: talent.singleTalent?.linkedin || '',
      mail: talent.singleTalent?.mail || '',
      quote: talent.singleTalent?.quote || ''
    })) || [];

    console.log('Members:', members);

    // Fetch case studies
    const caseStudiesForSlug = CASE_STUDIES.filter(study => 
      study.expertise.some(e => e.name === slug)
    );

    console.log('Case Studies for Slug:', caseStudiesForSlug);

    return (
      <ExpertisePageClient
        pageContent={pageContent}
        members={members}
        caseStudiesForSlug={caseStudiesForSlug}
      />
    );
  } catch (error) {
    console.error('Error fetching expertise:', error);
    return <p>Error loading page</p>;
  }
}