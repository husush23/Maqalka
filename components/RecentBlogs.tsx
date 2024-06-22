import Link from 'next/link';
import { getBlogs } from '@/sanity/lib/fetchBlogs';

const RecentBlogs = async () => {
  // const blogs = [
  //   {
  //     id: 1,
  //     title: 'Exploring the Mysteries of the Universe',
  //     excerpt:
  //       'Discover the secrets of the cosmos and what lies beyond our galaxy...',
  //     image: '/blogs/blog1.jpg',
  //   },
  //   {
  //     id: 2,
  //     title: 'The Future of Artificial Intelligence',
  //     excerpt:
  //       'A deep dive into AI and how it will shape our world in the coming years...',
  //     image: '/blogs/blog2.jpg',
  //   },
  //   {
  //     id: 3,
  //     title: 'A Guide to Sustainable Living',
  //     excerpt:
  //       'Learn how to live a sustainable lifestyle with these simple tips...',
  //     image: '/blogs/blog3.jpg',
  //   },
  // ];

  const blogs = await getBlogs()
  const recentBlogs = blogs.slice(0,3)

  return (
    <section className='py-8 sm:py-16 bg-primary'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-2xl sm:text-3xl font-bold text-secondary mb-6'>
          Recent Blogs
        </h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {recentBlogs.map(blog => (
            <div
              key={blog._id}
              className='bg-accent rounded-lg shadow-md overflow-hidden text-secondary'
            >
              <img
                src={blog.mainImage.asset.url}
                alt={blog.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h3 className='text-lg font-semibold mb-2'>{blog.title}</h3>
                <p className='text-gray-700 text-sm mb-4'>{blog.excerpt}</p>
                <Link href={`/blog/${blog.slug.current}`} className='hover:underline'>
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
