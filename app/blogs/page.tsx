import Link from 'next/link';

const Blogs = () => {
  // Simulating a fetch from a server with random data
  const blogs = [
    {
      id: 1,
      title: 'Exploring the Mysteries of the Universe',
      excerpt:
        'Discover the secrets of the cosmos and what lies beyond our galaxy...',
      image: '/blogs/blog1.jpg',
    },
    {
      id: 2,
      title: 'The Future of Artificial Intelligence',
      excerpt:
        'A deep dive into AI and how it will shape our world in the coming years...',
      image: '/blogs/blog2.jpg',
    },
    {
      id: 3,
      title: 'A Guide to Sustainable Living',
      excerpt:
        'Learn how to live a sustainable lifestyle with these simple tips...',
      image: '/blogs/blog3.jpg',
    },
    {
      id: 4,
      title: 'Understanding Quantum Computing',
      excerpt:
        'An introduction to the world of quantum computers and their potential...',
      image: '/blogs/blog4.jpg',
    },
    {
      id: 5,
      title: 'The Impact of Climate Change',
      excerpt:
        'Analyzing the effects of climate change and what we can do to mitigate it...',
      image: '/blogs/blog5.jpg',
    },
  ];

  return (
    <section className='py-8 sm:py-16 bg-primary'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-2xl sm:text-3xl font-bold text-secondary mb-6'>
          Recent Blogs
        </h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {blogs.map(blog => (
            <div
              key={blog.id}
              className='bg-accent rounded-lg shadow-md overflow-hidden'
            >
              <img
                src={blog.image}
                alt={blog.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h3 className='text-lg font-semibold  mb-2'>{blog.title}</h3>
                <p className='text-gray-700 text-sm mb-4'>{blog.excerpt}</p>
                <Link
                  href={`/blog/${blog.id}`}
                  className=' text-red-400 hover:underline'
                >
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

export default Blogs;
