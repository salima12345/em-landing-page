import client from '@/lib/apollo-client';
import { GET_MADE_IN_BY_SLUG, GET_ALL_MADE_IN } from '@/lib/graphql/queries/MadeInQueries';
import MadeInPageClient from './MadeInPageClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { data } = await client.query({ query: GET_ALL_MADE_IN });
  return data.allMadeInEM.nodes.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function MadeInPageServer({ params }: PageProps) {
  const { slug } = await params;

  try {
    const { data } = await client.query({
      query: GET_MADE_IN_BY_SLUG,
      variables: { slug },
    });

    const wpData = data.madeInEMBy;
    
    if (!wpData) {
      return <p>Page not found</p>;
    }

    const pageContent = {
      subtitle: wpData.madeInEmFields?.subtitle || '',
      title: wpData.title,
      imageSrc: wpData.featuredImage?.node?.sourceUrl || '/images/default-madein.jpg',
      imageAlt: wpData.title,
      description: wpData.content ? [wpData.content] : [''],
      services: wpData.madeInEmFields?.services?.map((s: any) => ({ title: s.service })) || [],
    };

    return <MadeInPageClient content={pageContent} />;
  } catch (error) {
    console.error('Error fetching MadeIn content:', error);
    return <p>Error loading page</p>;
  }
}