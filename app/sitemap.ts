import {MetadataRoute} from 'next';
import {getBlogs} from '@/sanity/lib/fetchBlogs';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs();

  const blogsEntries = blogs.map(blog => ({
    url: `https://maqalka.vercel.app/blogs/${blog.slug.current}`,
  }));

  return [
    {
      url: 'https://maqalka.vercel.app/',
    },
    {
      url: 'https://maqalka.vercel.app/about',
    },
    {
      url: 'https://maqalka.vercel.app/contact',
    },
    ...blogsEntries,
  ];
}
