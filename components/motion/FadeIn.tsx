'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  stagger?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  distance = 30,
  stagger = 0,
  className,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // When stagger is set, animate visible [data-animate] children individually
    let targets: HTMLDivElement | Element[] = el;
    if (stagger > 0) {
      const all = el.querySelectorAll('[data-animate]');
      const visible = Array.from(all).filter(
        (child) => child.getClientRects().length > 0
      );
      if (visible.length > 0) targets = visible;
    }

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      duration,
      ease: 'power2.out',
      delay,
    };

    if (stagger > 0 && Array.isArray(targets)) fromVars.stagger = stagger;

    if (direction === 'up') fromVars.y = distance;
    else if (direction === 'down') fromVars.y = -distance;
    else if (direction === 'left') fromVars.x = distance;
    else if (direction === 'right') fromVars.x = -distance;

    const ctx = gsap.context(() => {
      gsap.from(targets, fromVars);
    }, el);

    return () => ctx.revert();
  }, [delay, duration, direction, distance, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
