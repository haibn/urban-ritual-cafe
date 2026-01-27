'use client';

import Link from 'next/link';
import { useState } from 'react';

interface ButtonProps {
  bgColor: string;
  color: string;
  bgColorHovered: string;
  colorHovered: string;
  text: string;
  path: string;
}

export default function Button({
  bgColor,
  color,
  bgColorHovered,
  colorHovered,
  text,
  path,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={path}
      className="font-urbanist inline-block rounded-xl px-6 py-3 text-[20px] font-semibold tracking-wider drop-shadow-2xl transition-colors duration-300"
      style={{
        backgroundColor: isHovered ? `#${bgColorHovered}` : `#${bgColor}`,
        color: isHovered ? `#${colorHovered}` : `#${color}`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </Link>
  );
}
