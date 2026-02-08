import Image from 'next/image';
// import { MapPin, Phone } from 'lucide-react';
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
}: LocationCardProps) {
  return (
    <div className={`relative w-full ${height ? '' : 'h-auto'}`} style={{ maxWidth: width }}>
      {/* Overlapping location image - positioned at top-right */}
      <div className="absolute -top-8 -right-10 z-10">
        <div className="relative h-37 w-52 overflow-hidden rounded-xl">
          <Image src={imageSrc} alt={locationName} fill className="object-cover" sizes="192px" />
        </div>
      </div>

      {/* Main card container */}
      <div
        className={`rounded-4xl px-8 py-8 pt-10 shadow-lg ${height ? '' : 'h-auto'}`}
        style={{
          backgroundColor: bgColor,
          color: textColor,
          ...(height && { height }),
        }}
      >
        <div className="flex h-full items-center justify-between gap-8">
          {/* Left side - Location information */}
          <div className="flex-1 space-y-4 pl-10">
            {/* Location name */}
            <h3 className="font-nunito text-2xl font-bold">{locationName}</h3>

            {/* Address and phone with icons */}
            <div className="space-y-2 pl-2">
              {/* Address line */}
              <div className="flex items-start gap-3">
                <Image
                  src={'/logos/location_icon.png'}
                  alt="San Francisco"
                  width={20}
                  height={20}
                  sizes="20px"
                />
                <p className="font-nunito text-medium text-lg leading-relaxed">{address}</p>
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
                <p className="text-medium text-lg">{phone}</p>
              </div>
            </div>
          </div>

          {/* Right side - CTA button */}
          <div className="flex items-center pr-42">
            <Button
              bgColor="#FF9500"
              color="#FFFFFF"
              bgColorHovered="white"
              colorHovered="black"
              text="VISIT US NOW!"
              path="/locations"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
