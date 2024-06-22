import Hero from '@/components/Hero';
import RecentBlogs from '@/components/RecentBlogs';

export default function Home() {
  return (
      <main className='text-secondary'>
        <Hero />
        <RecentBlogs />
      </main>
  );
}
