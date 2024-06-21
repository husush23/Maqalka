import Hero from '@/components/Hero';
import Navbar from '@/components/Navabar';
import RecentBlogs from '@/components/RecentBlogs';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='text-secondary'>
        <Hero />
        <RecentBlogs />
      </main>
    </>
  );
}
