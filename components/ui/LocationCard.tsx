import Image from 'next/image';
import Button from './Button';

export interface LocationCardProps {
  locationName: string;
  address: string;
  phone: string;
  bgColor: string;
  textColor: string;
  imageSrc: string;
  width?: string;
  height?: string;
  buttonText?: string;
}

/**
 * LocationCard Component
 *
 * A horizontally oriented card displaying location information with:
 * - Location name, address, and phone with icons
 * - CTA button ("VISIT US NOW!")
 * - Overlapping location photo at top-right
 *
 * Design features:
 * - Relative positioning for overlapping image effect
 * - Flexible layout that adapts to content
 * - Clean, modern aesthetic with subtle icons
 */
export default function LocationCard({
  locationName,
  address,
  phone,
  bgColor,
  textColor,
  imageSrc,
  width, // Default: 1160px (72.5rem)
  height,
  buttonText,
}: LocationCardProps) {
  return (
    <div className="relative h-auto w-full" style={{ maxWidth: width }}>
      {/* Overlapping location image - desktop only */}
      <div className="absolute -top-8 -right-10 z-10 hidden lg:block">
        <div className="relative h-37 w-52 overflow-hidden rounded-xl">
          <Image src={imageSrc} alt={locationName} fill className="object-cover" sizes="192px" />
        </div>
      </div>

      {/* Mobile inline location image */}
      <div className="relative z-0 mb-[-15px] h-[180px] w-full overflow-hidden rounded-t-3xl lg:hidden">
        <Image
          src={imageSrc}
          alt={locationName}
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* Main card container */}
      <div
        className={`relative z-10 rounded-b-3xl px-6 py-6 shadow-lg lg:z-auto lg:rounded-4xl lg:px-8 lg:py-8 lg:pt-10 ${height ? 'h-auto lg:h-[13.5rem]' : 'h-auto'}`}
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        <div className="flex flex-col items-start gap-4 lg:h-full lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          {/* Left side - Location information */}
          <div className="flex-1 space-y-3 pl-2 lg:space-y-4 lg:pl-10">
            {/* Location name */}
            <h3 className="font-nunito text-xl font-bold lg:text-2xl">{locationName}</h3>

            {/* Address and phone with icons */}
            <div className="space-y-2 pl-1 lg:pl-2">
              {/* Address line */}
              <div className="flex items-start gap-3">
                <Image
                  src={'/logos/location_icon.png'}
                  alt="San Francisco"
                  width={20}
                  height={20}
                  sizes="20px"
                />
                <p className="font-nunito text-medium text-base leading-relaxed lg:text-lg">
                  {address}
                </p>
              </div>

              {/* Phone line */}
              <div className="font-nunito flex items-center gap-3">
                <Image
                  src={'/logos/phone_icon.png'}
                  alt="San Francisco"
                  width={20}
                  height={20}
                  sizes="20px"
                />
                <p className="text-medium text-base lg:text-lg">{phone}</p>
              </div>
            </div>
          </div>

          {/* Right side - CTA button */}
          <div className="flex w-full items-center justify-center lg:w-auto lg:justify-start lg:pr-42">
            <Button
              bgColor="#FF9500"
              color="#FFFFFF"
              bgColorHovered="white"
              colorHovered="black"
              text={buttonText || 'VISIT US NOW!'}
              path="/locations"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
