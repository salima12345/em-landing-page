import client from '@/lib/apollo-client';
import { GET_REFERENCE_BY_SLUG, GET_REFERENCES} from '@/lib/graphql/queries/ReferenceQueries';
import { GET_EXPERTISES } from '@/lib/graphql/queries/ExpertiseQuery';
import ReferencePageClient from './CaseStudyPageClient';

interface Expertise {
  id: string;
  title: string;
}


interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ReferencePageServer({ params }: PageProps) {
  const { slug } = await params;

  try {
    // Fetch current reference
    const { data: referenceData } = await client.query({
      query: GET_REFERENCE_BY_SLUG,
      variables: { id: slug }
    });

    const reference = referenceData?.reference;
    if (!reference) return <div>Reference not found</div>;

    // Fetch all references for "See More" section
    const { data: allReferencesData } = await client.query({ 
      query: GET_REFERENCES 
    });
    const allReferences = allReferencesData?.references?.nodes || [];

    // Fetch expertises for categories
    const { data: expertisesData } = await client.query({
      query: GET_EXPERTISES
    });
    const expertises = expertisesData?.expertises?.nodes || [];

    // Transform WordPress data to match your interface
    const transformReference = (ref: any) => ({
      slug: ref.slug,
      title: ref.title,
      imageUrl: ref.featuredImage?.node?.sourceUrl || '/default-image.jpg',
      description: ref.content || '',
      companyName: ref.singleReferences?.companyName || '',
      categories: ref.singleReferences?.expertises?.nodes?.map((e: any) => {
        const expertise = expertises.find((exp: Expertise) => exp.id === e.id);
        return {
          id: e.id,
          name: expertise?.title || 'Uncategorized',
        };
      }) || [],
      linkCompanyWebsite: ref.singleReferences?.linkCompanyWebsite || null,
      gallery: ref.singleReferences?.gallery?.map((g: any) => ({
        description: g.description,
        media: g.image?.node?.sourceUrl || g.video?.node?.sourceUrl || '',
        type: g.image ? 'image' : g.video ? 'video' : 'text'
      })) || []
    });

    const currentReference = transformReference(reference);
    const relatedReferences = allReferences
      .filter((r: any) => r.slug !== slug)
      .slice(0, 3)
      .map(transformReference);

    return (
      <ReferencePageClient 
        reference={currentReference} 
        relatedReferences={relatedReferences} 
        expertises={expertises} // Pass expertises to the client component
      />
    );

  } catch (error) {
    console.error('Error fetching reference:', error);
    return <div>Error loading reference</div>;
  }
}