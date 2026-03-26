'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

type Testimonial = {
  text: string;
  customerImage: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    text: "I've been here about four times already, and it's hands-down my favorite bubble tea spot in San Francisco. The Honey Boba topping is an absolute must--seriously, don't skip it! Their pearls are perfectly chewy and, in my opinion, the best in town ...",
    customerImage: '/banners/customer-reik.png',
  },
  {
    text: "Urban Ritual is probably one of the best boba shops in the area! I've never had a bad drink there...",
    customerImage: '/banners/customer-nathan.png',
  },
  {
    text: 'My favorite boba in SF! All their drinks are so unique and well balanced.',
    customerImage: '/banners/customer-jenny.png',
  },
  {
    text: "Really enjoy their drinks and variety! I ordered the toffee matcha latte with macadamia nut milk (yum)! Macadamia milk isn't a typical milk substitution offered at many places so I'm glad this is an option here ...",
    customerImage: '/banners/customer-judy.png',
  },
];

const COUNT = TESTIMONIALS.length;
const TRIPLED = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

// Slide width as percentage of viewport
const SLIDE_WIDTH_MOBILE = 75;
const SLIDE_WIDTH_DESKTOP = 60;
const LG_BREAKPOINT = 1024;

export default function HomeTestimonials() {
  // Start in the middle set so there are items on both sides
  const [currentIndex, setCurrentIndex] = useState(COUNT);
  const [slideWidth, setSlideWidth] = useState(SLIDE_WIDTH_MOBILE);
  const isResettingRef = useRef(false);
  const isPausedRef = useRef(false);
  const touchStartXRef = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Responsive slide width
  useEffect(() => {
    const update = () => {
      setSlideWidth(window.innerWidth >= LG_BREAKPOINT ? SLIDE_WIDTH_DESKTOP : SLIDE_WIDTH_MOBILE);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const goToSlide = useCallback((realIndex: number) => {
    // Jump to the corresponding slide in the middle set
    setCurrentIndex(COUNT + realIndex);
  }, []);

  // After transition ends, silently reposition to the middle set if needed
  const handleTransitionEnd = useCallback(() => {
    if (currentIndex >= COUNT * 2) {
      isResettingRef.current = true;
      setCurrentIndex((prev) => prev - COUNT);
    } else if (currentIndex < COUNT) {
      isResettingRef.current = true;
      setCurrentIndex((prev) => prev + COUNT);
    }
  }, [currentIndex]);

  // When resetting, remove transition then restore it next frame
  useEffect(() => {
    if (isResettingRef.current && trackRef.current) {
      const track = trackRef.current;
      track.style.transition = 'none';
      // Force reflow to apply the no-transition change
      void track.offsetHeight;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          track.style.transition = 'transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          isResettingRef.current = false;
        });
      });
    }
  }, [currentIndex]);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPausedRef.current) {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Pause auto-advance when tab is hidden; reset position on return
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        isPausedRef.current = true;
      } else {
        // Clamp index back to middle set instantly (no animation)
        setCurrentIndex((prev) => {
          const real = ((prev % COUNT) + COUNT) % COUNT;
          return COUNT + real;
        });
        if (trackRef.current) {
          trackRef.current.style.transition = 'none';
          void trackRef.current.offsetHeight;
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (trackRef.current) {
                trackRef.current.style.transition =
                  'transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
              }
            });
          });
        }
        isPausedRef.current = false;
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    isPausedRef.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (Math.abs(deltaX) > 50) {
      deltaX > 0 ? goPrev() : goNext();
    }
    isPausedRef.current = false;
  };

  // Center the active slide
  const centerOffset = (100 - slideWidth) / 2;
  const trackTranslateX = centerOffset - currentIndex * slideWidth;
  const realIndex = ((currentIndex % COUNT) + COUNT) % COUNT;

  return (
    <section className="py-10 lg:py-20" role="region" aria-label="Customer testimonials">
      {/* Heading — constrained width */}
      <div className="mx-auto max-w-[1160px] px-6 lg:px-0">
        <h2 className="font-urbanist text-center text-2xl font-normal tracking-wide lg:text-[51px]">
          What our customers are saying ...
        </h2>
      </div>

      {/* Slider viewport — full width */}
      <div
        className="relative mt-8 overflow-hidden pb-8 lg:mt-12 lg:pb-12"
        onMouseEnter={() => (isPausedRef.current = true)}
        onMouseLeave={() => (isPausedRef.current = false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slide track */}
        <div
          ref={trackRef}
          className="flex items-center"
          style={{
            transform: `translateX(${trackTranslateX}%)`,
            transition: isResettingRef.current
              ? 'none'
              : 'transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {TRIPLED.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-6 lg:px-8"
              style={{ width: `${slideWidth}%` }}
              aria-roledescription="slide"
              aria-label={`Testimonial ${(index % COUNT) + 1} of ${COUNT}`}
            >
              {/* Card */}
              <div className="relative overflow-visible rounded-3xl bg-black px-6 pt-6 pr-6 pb-10 lg:px-10 lg:pt-8 lg:pr-40 lg:pb-14">
                {/* Decorative quote */}
                <span className="font-petit block text-4xl leading-none text-[#BE8F59] lg:text-5xl">
                  &ldquo;
                </span>

                {/* Testimonial text */}
                <blockquote className="font-urbanist mt-2 text-base leading-relaxed font-medium text-white lg:mt-3 lg:text-xl">
                  {testimonial.text}
                </blockquote>

                {/* Customer badge — overlapping bottom-right */}
                <div className="absolute -right-4 -bottom-4 lg:-right-8 lg:-bottom-8">
                  <Image
                    src={testimonial.customerImage}
                    alt="Customer review"
                    width={400}
                    height={158}
                    sizes="(max-width: 1024px) 130px, 160px"
                    className="w-[130px] rounded-xl lg:w-[160px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edge gradients — fade prev/next items */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent lg:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent lg:w-32" />

        {/* Arrow buttons — hidden on mobile (swipe), visible on desktop */}
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-[calc(20%-51px)] z-20 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gray-200 shadow-sm transition-all duration-200 hover:scale-110 hover:bg-gray-300 hover:shadow-md lg:flex"
          aria-label="Previous testimonial"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#333"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={goNext}
          className="absolute top-1/2 right-[calc(20%-51px)] z-20 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gray-200 shadow-sm transition-all duration-200 hover:scale-110 hover:bg-gray-300 hover:shadow-md lg:flex"
          aria-label="Next testimonial"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#333"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="mt-4 flex justify-center gap-1.5">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === realIndex ? 'w-6 bg-[#BE8F59]' : 'w-1.5 bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
