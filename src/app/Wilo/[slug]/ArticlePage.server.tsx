import { articles } from "@/Data/Articles";
import ArticlePageClient from "./ArticlePageClient";
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePageServer({ params }: PageProps) {
  const { slug } = await params;

  // Fetch the article based on the slug
  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  // Pass the data to the Client Component
  return <ArticlePageClient article={{ ...article, publishDate: article.publishDate.toISOString() }} />;
}