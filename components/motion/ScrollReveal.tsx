'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  distance?: number;
  duration?: number;
  stagger?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  distance = 30,
  duration = 0.8,
  stagger = 0,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animateEls = stagger > 0 ? el.querySelectorAll('[data-animate]') : null;
    const visible =
      animateEls && animateEls.length > 0
        ? Array.from(animateEls).filter((child) => child.getClientRects().length > 0)
        : null;
    const targets = visible && visible.length > 0 ? visible : el;

    const fromValues: gsap.TweenVars = { autoAlpha: 0 };
    const toValues: gsap.TweenVars = {
      autoAlpha: 1,
      duration,
      ease: 'power3.out',
      delay,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    };

    if (stagger > 0 && visible && visible.length > 0) {
      toValues.stagger = stagger;
    }

    if (direction === 'up') {
      fromValues.y = distance;
      toValues.y = 0;
    } else if (direction === 'left') {
      fromValues.x = distance;
      toValues.x = 0;
    } else if (direction === 'right') {
      fromValues.x = -distance;
      toValues.x = 0;
    }

    const ctx = gsap.context(() => {
      if (stagger > 0 && visible && visible.length > 0) {
        gsap.set(el, { autoAlpha: 1 });
      }
      gsap.fromTo(targets, fromValues, toValues);
    }, el);

    let alive = true;
    document.fonts.ready.then(() => { if (alive) ScrollTrigger.refresh(); });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      alive = false;
      ctx.revert();
      window.removeEventListener('load', onLoad);
    };
  }, [direction, delay, distance, duration, stagger]);

  return (
    <div ref={ref} style={{ opacity: 0 }} className={className}>
      {children}
    </div>
  );
}
