import Link from 'next/link';

const BlogDetails = ({params}) => {
  console.log(params);
  return (
    <section className='py-8 sm:py-16 bg-primary'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-accent rounded-lg shadow-md overflow-hidden'>
          <img
            src='/blogs/blog1.jpg'
            alt='test blog'
            className='w-full h-64 sm:h-96 object-cover'
          />
          <div className='p-6'>
            <h1 className='text-3xl font-bold text-secondary mb-4'>
              This test blog
            </h1>
            <p className='text-gray-300 mb-6'>Today</p>
            <p className='text-gray-100 leading-relaxed mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              quasi earum quod, nobis laborum dolorem, quis quibusdam corporis
              voluptatum assumenda perspiciatis quae deleniti iure tempora
              voluptatem odit officia ea rerum modi? Magnam nostrum minus
              laudantium dolorum, itaque possimus. Optio itaque dolor
              blanditiis, qui reiciendis nihil dolores ullam cum possimus eius.
            </p>
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
