'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

type Drink = {
  name: string;
  image: string;
  description: string;
};

interface InfiniteDrinksGalleryProps {
  drinks?: Drink[];
  scrollSpeed?: number;
}

/* ─── Shared drink card ─── */
function DrinkCard({
  drink,
  isActive,
  onActivate,
  useHover,
}: {
  drink: Drink;
  isActive: boolean;
  onActivate: () => void;
  useHover: boolean;
}) {
  return (
    <div
      className={`group relative flex-shrink-0 cursor-pointer ${useHover ? '' : 'select-none'}`}
      onMouseEnter={useHover ? onActivate : undefined}
      onMouseLeave={useHover ? () => onActivate() : undefined}
      onClick={!useHover ? onActivate : undefined}
    >
      <div className="relative flex flex-col items-center">
        <div className="relative h-64 w-64 overflow-hidden rounded-2xl bg-white transition-all duration-300 md:h-80 md:w-80">
          <Image
            src={drink.image}
            alt={drink.name}
            width={500}
            height={500}
            sizes="(max-width: 768px) 256px, 320px"
            className={`h-full w-full object-cover transition-transform duration-500 ${isActive ? 'scale-110' : ''} ${useHover ? 'group-hover:scale-110' : ''}`}
            quality={50}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'} ${useHover ? 'group-hover:opacity-100' : ''}`}
          />
          {isActive && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 transition-opacity duration-500" />
              <div className="absolute right-0 bottom-0 left-0 p-6 opacity-100 transition-all duration-500">
                <p className="font-nunito text-md leading-relaxed text-white/95">
                  {drink.description}
                </p>
              </div>
            </>
          )}
          <div
            className={`absolute top-3 right-3 h-2 w-2 rotate-45 bg-[#BE8F59] transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'} ${useHover ? 'group-hover:opacity-100' : ''}`}
          />
        </div>
        <div className="mt-4 text-center">
          <h3
            className={`font-nunito text-lg tracking-widest transition-colors duration-300 md:text-xl ${isActive ? 'text-[#BE8F59]' : 'text-gray-800'} ${useHover ? 'group-hover:text-[#BE8F59]' : ''}`}
          >
            {drink.name}
          </h3>
          <div
            className={`mx-auto mt-2 h-0.5 bg-[#BE8F59] transition-all duration-300 ${isActive ? 'w-full' : 'w-0'} ${useHover ? 'group-hover:w-full' : ''}`}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile touch slider (scroll-snap based) ─── */
function MobileSlider({ drinks }: { drinks: Drink[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  // Track current index from scroll position
  const handleScroll = useCallback(() => {
    const container = sliderRef.current;
    if (!container || isScrollingRef.current) return;

    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;

    const containerCenter = container.scrollLeft + container.offsetWidth / 2;
    let closestIndex = 0;
    let closestDist = Infinity;

    children.forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(containerCenter - childCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = i;
      }
    });

    setCurrentIndex(closestIndex);
  }, []);

  // Scroll to specific index
  const scrollToIndex = useCallback(
    (index: number) => {
      const container = sliderRef.current;
      if (!container) return;
      const clamped = Math.max(0, Math.min(index, drinks.length - 1));
      const child = container.children[clamped] as HTMLElement;
      if (!child) return;

      isScrollingRef.current = true;
      child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setCurrentIndex(clamped);
      setTappedIndex(null);

      // Allow scroll tracking again after animation
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 400);
    },
    [drinks.length]
  );

  const handleTap = (index: number) => {
    setTappedIndex(tappedIndex === index ? null : index);
  };

  return (
    <div className="relative w-full py-8">
      {/* Scroll container with snap */}
      <div
        ref={sliderRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-[calc(50%-140px)] md:px-[calc(50%-168px)]"
        style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        onScroll={handleScroll}
      >
        <style>{`.flex.snap-x::-webkit-scrollbar { display: none; }`}</style>
        {drinks.map((drink, index) => (
          <div key={`mobile-${drink.name}-${index}`} className="flex-shrink-0 snap-center">
            <DrinkCard
              drink={drink}
              isActive={tappedIndex === index}
              onActivate={() => handleTap(index)}
              useHover={false}
            />
          </div>
        ))}
      </div>

      {/* Arrow buttons */}
      <button
        onClick={() => scrollToIndex(currentIndex - 1)}
        disabled={currentIndex === 0}
        className="absolute left-3 top-[calc(50%-20px)] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-opacity disabled:opacity-0"
        aria-label="Previous drink"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={() => scrollToIndex(currentIndex + 1)}
        disabled={currentIndex === drinks.length - 1}
        className="absolute right-3 top-[calc(50%-20px)] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-opacity disabled:opacity-0"
        aria-label="Next drink"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="mt-6 flex justify-center gap-1.5">
        {drinks.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-[#BE8F59]' : 'w-1.5 bg-gray-300'
            }`}
            aria-label={`Go to drink ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Desktop infinite carousel ─── */
function DesktopCarousel({ drinks, scrollSpeed }: { drinks: Drink[]; scrollSpeed: number }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);
  const lastTimestampRef = useRef<number | null>(null);
  const singleSetWidthRef = useRef(0);

  const duplicatedDrinks = [...drinks, ...drinks, ...drinks];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || drinks.length === 0) return;

    const measureWidth = () => {
      if (scroller) {
        singleSetWidthRef.current = scroller.scrollWidth / 3;
      }
    };

    measureWidth();
    const resizeObserver = new ResizeObserver(measureWidth);
    resizeObserver.observe(scroller);

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }
      const deltaTime = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      if (hoveredIndex === null) {
        scrollPositionRef.current += scrollSpeed * deltaTime;
        if (scrollPositionRef.current >= singleSetWidthRef.current) {
          scrollPositionRef.current -= singleSetWidthRef.current;
        }
        scroller.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
    };
  }, [drinks.length, scrollSpeed, hoveredIndex]);

  return (
    <div className="relative w-[99vw] overflow-hidden py-12">
      <div ref={scrollerRef} className="relative flex gap-8" style={{ willChange: 'transform' }}>
        {duplicatedDrinks.map((drink, index) => (
          <DrinkCard
            key={`desktop-${drink.name}-${index}`}
            drink={drink}
            isActive={hoveredIndex === index}
            onActivate={() => setHoveredIndex(hoveredIndex === index ? null : index)}
            useHover={true}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-amber-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-amber-50 to-transparent" />
    </div>
  );
}

/* ─── Main: mobile slider below lg, desktop carousel at lg+ ─── */
export default function InfiniteDrinksGallery({
  drinks = [],
  scrollSpeed = 50,
}: InfiniteDrinksGalleryProps) {
  return (
    <>
      <div className="w-full lg:hidden">
        <MobileSlider drinks={drinks} />
      </div>
      <div className="hidden lg:block">
        <DesktopCarousel drinks={drinks} scrollSpeed={scrollSpeed} />
      </div>
    </>
  );
}
