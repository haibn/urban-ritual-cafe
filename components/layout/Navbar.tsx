'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LogoLink from '../ui/LogoLink';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: '/menu', label: 'MENU' },
    { href: '/story', label: 'STORY' },
    { href: '/locations', label: 'LOCATIONS' },
    { href: '/catering', label: 'CATERING' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-10 text-xl font-medium tracking-wide shadow-md lg:px-20">
      <LogoLink className={`font-urbanist py-4 ${pathname === '/' ? 'text-[#BE8F59]' : ''}`}>
        <Image
          src={'/logos/urban-ritual-logo.png'}
          alt="Home"
          width={330}
          height={330 * (186 / 1254)}
          className="h-auto max-w-[180px] lg:max-w-none"
        />
      </LogoLink>

      {/* Desktop links */}
      <div className="hidden space-x-6 py-4 lg:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-urbanist transition-colors duration-200 hover:text-[#BE8F59] ${pathname === link.href ? 'text-[#BE8F59]' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger button */}
      <button
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <span
          className={`h-[2px] w-6 bg-black transition-all duration-300 ${isMenuOpen ? 'translate-y-[8px] rotate-45' : ''}`}
        />
        <span
          className={`h-[2px] w-6 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`h-[2px] w-6 bg-black transition-all duration-300 ${isMenuOpen ? '-translate-y-[8px] -rotate-45' : ''}`}
        />
      </button>

      {/* Mobile fullscreen overlay menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white transition-all duration-500 ease-in-out lg:hidden ${isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <div className="flex flex-col items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-urbanist text-2xl font-medium tracking-[0.2em] transition-colors duration-200 hover:text-[#BE8F59] ${pathname === link.href ? 'text-[#BE8F59]' : 'text-black'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
