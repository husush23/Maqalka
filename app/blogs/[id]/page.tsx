import Link from 'next/link';
import Image from 'next/image';
import {PortableText} from '@portabletext/react';
import {getBlog, getBlogs} from '@/sanity/lib/fetchBlogs';
import {Blog} from '@/sanity/types/blog';

// All params
export const generateStaticParams = async () => {
  const blogs = await getBlogs();
  return blogs.map(blog => ({
    slug: blog.slug.current,
  }));
};

export async function generateMetadata({params}: {params: {id: string}}) {
  const blog = await getBlog(params.id);
  return {
    title: blog.title,
    description: <PortableText value={blog.body} />,
    openGraph: {
      images: [{url: blog.mainImage.asset.url}],
    },
  };
}

const BlogDetails = async ({params}: {params: {id: string}}) => {
  const blog = await getBlog(params.id);

  if (!blog) {
    return <p className='text-secondary'>Blog not found.</p>;
  }

  return (
    <section className='py-8 sm:py-16 bg-primary'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-accent rounded-lg shadow-md overflow-hidden'>
          {blog.mainImage?.asset?.url && (
            <div className='relative w-full h-64 sm:h-96'>
              <Image
                src={blog.mainImage.asset.url}
                alt={blog.mainImage.alt || blog.title}
                layout='fill'
                objectFit='cover'
                sizes='(max-width: 768px) 100vw, 
                      (max-width: 1200px) 50vw, 
                      33vw'
              />
            </div>
          )}
          <div className='p-6'>
            {blog.publishedAt && (
              <p className='text-gray-300 mb-6'>
                Published on: {new Date(blog.publishedAt).toDateString()}
              </p>
            )}
            {blog.author.name && (
              <p className='text-gray-300 mb-6'>
                Published by: {blog.author.name}
              </p>
            )}
            <h1 className='text-3xl font-bold text-secondary mb-4'>
              {blog.title}
            </h1>

            <div className='text-gray-100 leading-relaxed mb-6'>
              <PortableText value={blog.body} />
            </div>
            <Link href='/blogs' className='text-red-400 hover:underline'>
              &larr; Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
