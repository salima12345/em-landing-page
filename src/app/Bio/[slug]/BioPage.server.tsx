import { teamGroups } from "@/Data/TeamData";
import BioPageClient from "./BioPageClient";


interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function BioPageServer({ params }: PageProps) {
    const { slug} = await params;

  // Fetch the team member based on the slug
  const member = teamGroups
    .flatMap((group) => group.members)
    .find((member) => member.slug === slug);

  if (!member) {
    return <div>Member not found</div>;
  }

  // Pass the data to the Client Component
  return <BioPageClient member={member} />;
}