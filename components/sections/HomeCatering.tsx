import Image from 'next/image';
import Button from '../ui/Button';

export default function HomeCatering() {
  return (
    <section className="relative w-full overflow-hidden bg-[#4B4B4B]">
      {/* Top catering image - overlaps above the gray bg */}
      <div className="relative mx-auto max-w-[1200px] px-6 pt-8 md:px-10 lg:px-16">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-start md:gap-12">
          {/* Left: circular catering image */}
          <div className="relative mx-auto h-[280px] w-[280px] shrink-0 overflow-hidden rounded-[50px] shadow-lg md:mx-0 md:h-[425px] md:w-[425px]">
            <Image
              src="/pictures/catering-wedding.png"
              alt="Urban Ritual Catering"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 280px, 425px"
            />
          </div>

          {/* Right: title + description */}
          <div className="flex flex-1 flex-col items-end text-right">
            <h2 className="font-urbanist text-4xl font-normal tracking-wide text-white uppercase md:text-[61px] md:leading-tight">
              Catering
            </h2>
            <p className="font-nunito mt-4 max-w-[700px] text-lg leading-relaxed text-white md:text-[27px] md:leading-[1.5] md:tracking-[-0.27px]">
              Bring the best boba in San Francisco to your next event! Urban Ritual offers catering
              for parties, offices, and celebrations
            </p>
          </div>
        </div>
      </div>

      {/* How it works + second image */}
      <div className="relative mx-auto max-w-[1200px] px-6 pt-10 pb-12 md:px-10 md:pt-16 md:pb-16 lg:px-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
          {/* Left: How it works */}
          <div className="flex-1">
            <p className="font-nunito text-xl leading-relaxed text-white md:text-[27px] md:tracking-[-0.27px]">
              How it works:
            </p>
            <ol className="font-nunito mt-4 list-decimal space-y-1 pl-8 text-base leading-relaxed text-white md:text-[21px] md:leading-[1.5] md:tracking-[-0.21px]">
              <li>Check out our catering menu.</li>
              <li>Fill out our catering request form.</li>
              <li>Send the completed form to hello@urbanritualcafe.com.</li>
              <li>Please note: we cannot confirm large requests without a completed form.</li>
            </ol>

            <div className="mt-8">
              <Button
                bgColor="#FF9500"
                color="#FFFFFF"
                bgColorHovered="#1E1E1E"
                colorHovered="#FFFFFF"
                text="Learn More"
                path="/catering"
              />
            </div>
          </div>

          {/* Right: circular catering image */}
          <div className="relative mx-auto h-[300px] w-[300px] shrink-0 overflow-hidden rounded-[50px] shadow-lg md:mx-0 md:h-[488px] md:w-[488px]">
            <Image
              src="/pictures/catering.png"
              alt="Catering setup"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 300px, 488px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
