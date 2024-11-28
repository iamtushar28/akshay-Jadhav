import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-primary pt-20 px-5 sm:px-10'>
      <hr className='max-w-7xl mx-auto opacity-20 ' />
      <nav className='flex justify-between items-center max-w-7xl mx-auto h-[92px]'>
        <div className='text-xs sm:text-sm flex items-center tracking-[0.42px]'>
          <span className='mr-[6px] mt-2 text-2xl'>&copy;</span>2024
        </div>
        <ul className='flex gap-4'>
        Akshay Jadhav
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
