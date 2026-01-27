'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type Drink = {
  name: string;
  image: string;
  description: string;
};

interface InfiniteDrinksGalleryProps {
  drinks?: Drink[];
  scrollSpeed?: number; // Pixels per second
}

export default function InfiniteDrinksGallery({
  drinks = [],
  scrollSpeed = 50,
}: InfiniteDrinksGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);
  const lastTimestampRef = useRef<number | null>(null);
  const singleSetWidthRef = useRef(0); // Cache the measured width

  /**
   * INFINITE SCROLL STRATEGY:
   *
   * We duplicate the drinks array THREE times to create a seamless loop.
   * This ensures the viewport is always filled with content, even on wide screens.
   *
   * Example with 3 items: [A, B, C, A, B, C, A, B, C]
   * - User sees items scrolling: A → B → C → A → B → C → A → B → C...
   * - When we reach the second set's start, we reset position to the first set
   * - Since they're identical, the reset is invisible to the user
   *
   * KEY TO SEAMLESSNESS: We measure the ACTUAL rendered width, not calculate it.
   */
  const duplicatedDrinks = [...drinks, ...drinks, ...drinks];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || drinks.length === 0) return;

    /**
     * MEASURE ACTUAL CONTENT WIDTH
     *
     * We measure the actual scrollWidth of the scroller after rendering.
     * This accounts for responsive sizing, browser rendering, and actual layout.
     * We divide by 3 to get the width of one set of drinks.
     */
    const measureWidth = () => {
      if (scroller) {
        // scrollWidth gives us the total width of all content
        // Divide by 3 since we tripled the drinks array
        singleSetWidthRef.current = scroller.scrollWidth / 3;
      }
    };

    // Measure initially after render
    measureWidth();

    // Re-measure on resize to handle responsive changes
    const resizeObserver = new ResizeObserver(measureWidth);
    resizeObserver.observe(scroller);

    /**
     * SMOOTH SCROLLING LOGIC:
     *
     * We use requestAnimationFrame for smooth, 60fps animation.
     * This is better than CSS animations because:
     * 1. We can programmatically pause on hover
     * 2. We can seamlessly reset the scroll position
     * 3. We have precise control over timing
     */
    const animate = (timestamp: number) => {
      // Initialize timestamp on first frame
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      // Calculate time elapsed since last frame (in seconds)
      const deltaTime = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      // Only scroll if not hovering over an item
      if (hoveredIndex === null) {
        // Update scroll position based on speed and time elapsed
        scrollPositionRef.current += scrollSpeed * deltaTime;

        /**
         * SEAMLESS LOOP RESET:
         *
         * Use the MEASURED width (not calculated) for precise reset.
         * When we've scrolled past one complete set, reset to 0.
         * Since we have triplicates, this reset is invisible.
         */
        if (scrollPositionRef.current >= singleSetWidthRef.current) {
          scrollPositionRef.current -= singleSetWidthRef.current;
        }

        // Apply the scroll transform
        scroller.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }

      // Continue animation loop
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup: stop animation when component unmounts
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [drinks.length, scrollSpeed, hoveredIndex]); // Re-run when these values change

  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Decorative background elements */}
      {/* <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-1/4 h-64 w-64 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-10 h-64 w-64 rounded-full bg-red-500 blur-3xl"></div>
      </div> */}

      {/* Main scrolling container */}
      <div
        ref={scrollerRef}
        className="relative flex gap-8"
        style={{
          /**
           * PERFORMANCE OPTIMIZATION:
           *
           * will-change tells the browser to optimize this element for transforms.
           * This enables GPU acceleration for smoother animations.
           */
          willChange: 'transform',
        }}
      >
        {duplicatedDrinks.map((drink, index) => (
          <div
            key={`${drink.name}-${index}`}
            className="group relative flex-shrink-0 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Drink card container */}
            <div className="relative flex flex-col items-center">
              {/* Image container with overlay */}
              <div className="relative h-64 w-64 overflow-hidden rounded-2xl bg-white transition-all duration-300 group-hover:shadow-2xl md:h-80 md:w-80">
                {/* Drink image */}
                <Image
                  src={drink.image}
                  alt={drink.name}
                  width={500}
                  height={500}
                  sizes="(max-width: 768px) 256px, 320px"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={50}
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* 
                  DESCRIPTION OVERLAY:
                  
                  Appears at the bottom of the image when hovering.
                  Uses backdrop-blur for a modern glass-morphism effect.
                */}
                {hoveredIndex === index && (
                  <>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                    {/* Text content */}
                    <div className="absolute right-0 bottom-0 left-0 translate-y-4 transform p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="font-nunito text-md leading-relaxed text-white/95">
                        {drink.description}
                      </p>
                    </div>
                  </>
                )}

                {/* Decorative corner accent */}
                <div className="absolute top-3 right-3 h-2 w-2 rotate-45 bg-[#BE8F59] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>

              {/* Drink name below image */}
              <div className="mt-4 text-center">
                <h3 className="font-nunito text-lg tracking-widest text-gray-800 transition-colors duration-300 group-hover:text-[#BE8F59] md:text-xl">
                  {drink.name}
                </h3>
                {/* Underline accent that grows on hover */}
                <div className="mx-auto mt-2 h-0.5 w-0 bg-[#BE8F59] transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fade edges for polished infinite scroll effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-amber-50 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-pink-50 to-transparent"></div>
    </div>
  );
}
