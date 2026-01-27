'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname(); // gives current path, e.g., "/blog"

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white text-xl font-medium tracking-wide shadow-md">
      <Link
        href="/"
        className={`font-urbanist py-4 pl-20 ${pathname === '/' ? 'text-[#BE8F59]' : ''}`}
      >
        <Image
          src={'/logos/urban-ritual-logo.png'}
          alt="Home"
          width={330}
          height={330 / (186 / 1254)}
          className="h-auto"
        />
      </Link>
      <div className="flex space-x-6 py-4 pr-20">
        <Link
          href="/menu"
          className={`font-urbanist ${pathname === '/menu' ? 'text-[#BE8F59]' : ''}`}
        >
          MENU
        </Link>
        <Link
          href="/story"
          className={`font-urbanist ${pathname === '/story' ? 'text-[#BE8F59]' : ''}`}
        >
          STORY
        </Link>
        <Link
          href="/locations"
          className={`font-urbanist ${pathname === '/locations' ? 'text-[#BE8F59]' : ''}`}
        >
          LOCATIONS
        </Link>
        <Link
          href="/catering"
          className={`font-urbanist ${pathname === '/catering' ? 'text-[#BE8F59]' : ''}`}
        >
          CATERING
        </Link>
        <Link
          href="/contact"
          className={`font-urbanist ${pathname === '/contact' ? 'text-[#BE8F59]' : ''}`}
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
