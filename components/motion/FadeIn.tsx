'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';
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

  useLayoutEffect(() => {
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

    const fromValues: gsap.TweenVars = { autoAlpha: 0 };
    const toValues: gsap.TweenVars = {
      autoAlpha: 1,
      duration,
      ease: 'power3.out',
      delay,
    };

    if (stagger > 0 && Array.isArray(targets)) toValues.stagger = stagger;

    if (direction === 'up') {
      fromValues.y = distance;
      toValues.y = 0;
    } else if (direction === 'down') {
      fromValues.y = -distance;
      toValues.y = 0;
    } else if (direction === 'left') {
      fromValues.x = distance;
      toValues.x = 0;
    } else if (direction === 'right') {
      fromValues.x = -distance;
      toValues.x = 0;
    }

    const ctx = gsap.context(() => {
      if (stagger > 0 && Array.isArray(targets)) {
        gsap.set(el, { autoAlpha: 1 });
      }
      gsap.fromTo(targets, fromValues, toValues);
    }, el);

    return () => ctx.revert();
  }, [delay, duration, direction, distance, stagger]);

  return (
    <div ref={ref} style={{ visibility: 'hidden' }} className={className}>
      {children}
    </div>
  );
}
