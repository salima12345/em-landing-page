import { CASE_STUDIES } from "@/Data/CaseStudiesData";
import CaseStudyPageClient from "./CaseStudyPageClient";

interface PageProps {
    params: Promise<{ slug: string }>;
  }
export default async function CaseStudyPageServer({ params }: PageProps) {
    const { slug} = await params;

  // Fetch the case study based on the slug
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  // Pass the data to the Client Component
  return <CaseStudyPageClient caseStudy={caseStudy} />;
}