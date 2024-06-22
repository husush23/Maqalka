'use client';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {useState} from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            {/* Logo */}
            <img src='/logo.svg' className='h-8 w-auto' alt='Logo' />
            <div className='hidden md:block'>
              <ul className='ml-10 flex items-baseline space-x-4'>
                <li>
                  <Link href='/' className='text-gray-700 hover:text-gray-900'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='/blogs'
                    className='text-gray-700 hover:text-gray-900'
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='text-gray-700 hover:text-gray-900'
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about'
                    className='text-gray-700 hover:text-gray-900'
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='hidden md:flex items-center'>
            {/* Socials */}
            <ul className='flex space-x-4'>
              <li>
                <Link href='https://twitter.com' aria-label='Twitter'>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className='text-gray-700 w-5 h-5 hover:text-gray-900'
                  />
                </Link>
              </li>
              <li>
                <Link href='https://youtube.com' aria-label='YouTube'>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className='text-gray-700 w-5 h-5 hover:text-gray-900'
                  />
                </Link>
              </li>
              <li>
                <Link href='https://facebook.com' aria-label='Facebook'>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className='text-gray-700 w-5 h-5 hover:text-gray-900'
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none'
              aria-controls='mobile-menu'
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <svg
                className='h-6 w-6'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 24 24'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden' id='mobile-menu'>
          <ul className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <li>
              <Link
                href='/'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/blogs'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              >
                About
              </Link>
            </li>
          </ul>
          {/* Socials */}
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <ul className='flex space-x-4'>
              <li>
                <Link
                  href='https://twitter.com'
                  aria-label='Twitter'
                  className='text-gray-700 hover:text-gray-900'
                >
                  <FontAwesomeIcon icon={faTwitter} className='w-5 h-5' />
                </Link>
              </li>
              <li>
                <Link
                  href='https://youtube.com'
                  aria-label='YouTube'
                  className='text-gray-700 hover:text-gray-900'
                >
                  <FontAwesomeIcon icon={faYoutube} className='w-5 h-5' />
                </Link>
              </li>
              <li>
                <Link
                  href='https://facebook.com'
                  aria-label='Facebook'
                  className='text-gray-700 hover:text-gray-900'
                >
                  <FontAwesomeIcon icon={faFacebook} className='w-5 h-5' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
