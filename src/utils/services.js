import { getSanityContent } from './cms';

export const getArticles = () => getSanityContent({
  query: '*[_type == "article"] { title, date, reference, "imageUrl": image.asset->url, slug, author, publishedAt } | order(publishedAt desc)',
}).then((data) => data || []);