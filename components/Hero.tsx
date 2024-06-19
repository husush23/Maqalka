import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 py-16'>
      <div className='max-w-4xl text-center'>
        <h1 className='text-4xl text-left font-bold mb-4'>
          A mysterious <span className='text-[#f63d68]'>Maqalka</span> blog, you
          can explore recent articles. A simple way to connect the expert
        </h1>
        <p className='text-lg text-gray-700 leading-relaxed text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde beatae
          veniam a nisi? Cumque tenetur quaerat esse perferendis ipsa obcaecati,
          voluptates magnam iste molestias fugit vel provident reiciendis, nulla
          similique voluptatum soluta consectetur recusandae ex incidunt quasi!
          Natus assumenda suscipit animi a obcaecati iusto cumque, quisquam
          voluptates ea corporis et?
        </p>
        <div className='flex gap-4 py-8'>
          <Link
            href='/'
            className='flex items-center bg-accent rounded-md px-2'
          >
            <Image
              src='/spotify.svg'
              height={50}
              width={50}
              alt='spotify logo'
              className='py-2'
            />
            <div className='flex flex-col text-left p-2'>
              <span className='text-xs'>Listen on</span>
              <span className='text-base'>Spotify</span>
            </div>
          </Link>
          <Link
            href='/'
            className='flex items-center px-2 bg-accent rounded-md'
          >
            <Image
              src='/apple-podcast.svg'
              height={50}
              width={50}
              alt='apple posdcast logo'
              className='py-2'
            />
            <div className='flex flex-col text-left p-2'>
              <span className='text-xs'>Listen on</span>
              <span className='text-base'>Apple podcasts</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
