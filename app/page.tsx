import Hero from '@/components/Hero';
import Navbar from '@/components/Navabar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='text-secondary'>
        <Hero />
      </main>
    </>
  );
}
