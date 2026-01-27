'use client';

import { useState, useEffect, useRef } from 'react';

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

  /**
   * INFINITE SCROLL STRATEGY:
   *
   * We duplicate the drinks array twice to create a seamless loop.
   * When the scroll position reaches the end of the first set,
   * we instantly reset it back to the beginning without any visual jump.
   *
   * Example with 3 items: [A, B, C, A, B, C]
   * - User sees items scrolling: A → B → C → A → B → C...
   * - When we reach the second A, we reset position to the first A
   * - Since they're identical, the reset is invisible to the user
   */
  const duplicatedDrinks = [...drinks, ...drinks];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || drinks.length === 0) return;

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
         * Calculate the width of one complete set of drinks.
         * When we've scrolled past this width, reset to 0.
         * Since we have duplicates, this reset is invisible.
         */
        const firstChild = scroller.firstElementChild as HTMLElement;
        if (firstChild) {
          // Get total width of all items in the first set
          const itemWidth = firstChild.offsetWidth;
          const gap = 32; // 8 * 4 = 32px (gap-8 in Tailwind)
          const singleSetWidth = (itemWidth + gap) * drinks.length;

          // Reset position when we've scrolled one complete set
          if (scrollPositionRef.current >= singleSetWidth) {
            scrollPositionRef.current -= singleSetWidth;
          }
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
    };
  }, [drinks.length, scrollSpeed, hoveredIndex]); // Re-run when these values change

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 py-12">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-1/4 h-64 w-64 rounded-full bg-orange-200 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-10 h-64 w-64 rounded-full bg-pink-200 blur-3xl"></div>
      </div>

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
              <div className="relative h-64 w-48 overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:shadow-2xl md:h-80 md:w-60">
                {/* Drink image */}
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                {/* 
                  DESCRIPTION OVERLAY:
                  
                  Appears at the bottom of the image when hovering.
                  Uses backdrop-blur for a modern glass-morphism effect.
                */}
                {hoveredIndex === index && (
                  <div className="absolute right-0 bottom-0 left-0 transform bg-white/95 p-4 backdrop-blur-sm transition-all duration-300">
                    <p className="font-['Merriweather'] text-xs leading-relaxed text-gray-700 md:text-sm">
                      {drink.description}
                    </p>
                  </div>
                )}

                {/* Decorative corner accent */}
                <div className="absolute top-3 right-3 h-2 w-2 rotate-45 bg-orange-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>

              {/* Drink name below image */}
              <div className="mt-4 text-center">
                <h3 className="font-['Archivo_Black'] text-lg tracking-wide text-gray-800 transition-colors duration-300 group-hover:text-orange-600 md:text-xl">
                  {drink.name}
                </h3>
                {/* Underline accent that grows on hover */}
                <div className="mx-auto mt-2 h-0.5 w-0 bg-orange-400 transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fade edges for polished infinite scroll effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-amber-50 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-pink-50 to-transparent"></div>

      {/* Google Fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Merriweather:wght@300;400&display=swap');
      `}</style>
    </div>
  );
}
