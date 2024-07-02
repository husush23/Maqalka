import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-100 py-8 sm:py-16 px-4'>
      <div className='max-w-4xl text-center'>
        <h1 className='text-2xl sm:text-4xl text-left font-bold mb-4'>
          Madal aqris <span className='text-[#f63d68]'>Maqalka</span> waa madal lagu xaqiijiyo sax ahaanshaha xogaha dhagaheena soo gaaro ee inooga yimaada bulshooyinka.

        </h1>
        <p className='text-base sm:text-lg text-gray-700 leading-relaxed text-left'>
        maqalka waa madal lagu xaqiijiyo sax ahaanshaha xogaha dhagaheena soo gaaro ee inooga yimaada bulsho.

Halkan waxaad ka daalacan kartaa falanqayn qoto dheer oo ku saabsan siyaasadda guud ee dunida,Taariikhda iyo technology-da.

Haddii aad xiisayso arimaha sare halkan waa meesha ku haboon ee aad xogahaas ka heli karto.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 py-8 items-center'>
          <Link
            href='/'
            className='flex items-center bg-accent rounded-md px-2 py-2 sm:py-0'
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
            className='flex items-center px-2 bg-accent rounded-md py-2 sm:py-0'
          >
            <Image
              src='/apple-podcast.svg'
              height={50}
              width={50}
              alt='apple podcast logo'
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
