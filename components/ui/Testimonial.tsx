import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface TestimonialProps {
  text: string;
  customerImage: string | StaticImageData;
  bgColor: string;
  textColor: string;
  width: string;
  height: string;
}

/**
 * Testimonial Component
 *
 * A reusable testimonial card with an overlapping customer image positioned
 * at the bottom-right corner. The image partially extends outside the card
 * boundary for visual depth.
 *
 * Layout decisions:
 * - Card uses relative positioning as the anchor for absolute positioned image
 * - Right padding increased to prevent text collision with the overlapping image
 * - Image uses intrinsic dimensions (no distortion) with max-width constraint
 * - Negative bottom/right values create the intentional overlap effect
 */
export default function Testimonial({
  text,
  customerImage,
  bgColor,
  textColor,
  width,
  height,
}: TestimonialProps) {
  return (
    <div
      className={`relative mx-auto overflow-visible rounded-4xl shadow-2xl ${width} ${height}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Testimonial text with padding to avoid collision with image */}
      <div className="flex h-full flex-col justify-center px-12 py-12 pr-12">
        <blockquote className="text-xl leading-relaxed font-medium" style={{ color: textColor }}>
          &ldquo;{text}&rdquo;
        </blockquote>
      </div>

      {/* Customer image - bottom-right corner, partially outside card */}
      <div className="absolute -right-8 -bottom-8">
        <div className="relative">
          {/* Intrinsic sizing - image maintains natural aspect ratio */}
          <Image
            src={customerImage}
            alt="Customer testimonial"
            width={200}
            height={79}
            sizes="200px"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
