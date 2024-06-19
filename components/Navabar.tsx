import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-12 p-4 gap-6'>
      <div className='flex gap-8 items-start justify-between'>
        {/* Logo */}
        <img src='/logo.svg' />
        <ul className='flex items-center space-x-4 px-10 justify-center pt-2'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/'>Article</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </div>
      {/* Socials */}
      <ul className='flex items-start gap-3'>
        <li>
          <Link href='/twitter'>
            <FontAwesomeIcon icon={faXTwitter} className='w-4' />
          </Link>
        </li>
        <li>
          <Link href='/youtube'>
            <FontAwesomeIcon icon={faYoutube} className='w-4' />
          </Link>
        </li>
        <li>
          <Link href='/youtube'>
            <FontAwesomeIcon icon={faFacebook} className='w-4' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
