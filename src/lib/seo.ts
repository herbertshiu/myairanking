export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  keywords?: string[];
  noindex?: boolean;
}

type InsightEntry =
  | import('astro:content').CollectionEntry<'insights'>
  | import('astro:content').CollectionEntry<'insightsZh'>;

export function buildArticleSEO(post: InsightEntry) {
  return {
    title: post.data.title,
    description: post.data.description,
    type: 'article' as const,
    publishedTime: post.data.pubDate.toISOString(),
    modifiedTime: (post.data.updatedDate ?? post.data.pubDate).toISOString(),
    author: post.data.author,
    tags: post.data.tags,
    keywords: post.data.keywords,
    image: post.data.image,
  };
}
