import ArticlePageClient from './ArticlePageClient';
import { GET_ARTICLE_BY_SLUG, GET_ARTICLES_BY_IDS } from '@/lib/graphql/queries/WilloQueries';
import client from '@/lib/apollo-client';

const hashSlug = (slug: string) => {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0; 
  }
  return Math.abs(hash);
};

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ArticlePageServer({ params }: PageProps) {
  const { slug } = await params;

  // Récupérer l'article correspondant au slug
  const { data } = await client.query({
    query: GET_ARTICLE_BY_SLUG,
    variables: { slug },
  });

  const article = data.allWilo.nodes[0];

  if (!article) {
    return <div>Article not found</div>;
  }

  // Récupérer les IDs des articles similaires
  const relatedArticleIds = article.singleBlog.articlesSemilaires.nodes.map((node: { id: string }) => node.id);

  // Récupérer les articles similaires par leurs IDs
  const { data: relatedArticlesData } = await client.query({
    query: GET_ARTICLES_BY_IDS,
    variables: { ids: relatedArticleIds },
  });

  const relatedArticles = relatedArticlesData?.allWilo?.nodes || [];

  // Générer un nombre aléatoire basé sur le slug
  const fallbackImageNumber = (hashSlug(slug) % 23) + 1;
  const fallbackImageUrl = `/images/wilo/wilo-${fallbackImageNumber}.png`;

  // Formater les données pour correspondre à l'interface Article
  const formattedArticle = {
    slug: article.slug,
    title: article.title,
    author: article.singleBlog.auteur,
    publishDate: article.singleBlog.dateDePublication,
    imageUrl: article.featuredImage?.node?.sourceUrl || fallbackImageUrl,
    content: article.content ? [{ body: article.content }] : [], 
    category: article.categories.nodes[0]?.name || 'Uncategorized',
  };

  // Passer les données au composant client
  return <ArticlePageClient article={formattedArticle} relatedArticles={relatedArticles} />;
}