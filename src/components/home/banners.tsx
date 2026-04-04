'use client';
import { Banner } from '@/types/banner';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  list: Banner[];
};
export const Banners = ({ list }: Props) => {
  return (
    <div>
         {/* banner container: relative + aspect-[3/1] defines the height proportionally.
      All banners are stacked on top of each other using absolute + inset-0.
      Only the active banner (controlled by current state) will be visible via opacity.
      The transition-all enables smooth fade between banners. */}
      <div className="relative aspect-[3/1]">
        {list.map((banner, index) => (
          <Link key={index} href={banner.link} className='absolute inset-0 transition-all'>
            <Image 
            src={banner.img}
            alt =''
            width={1200}
            height={400}
            className='rounded-md'
            />
          </Link>
        ))}
      </div>
      {/* Slide dots: each dot represents a banner.
      Clicking a dot updates the current state, showing the corresponding banner. */}
      <div>
        slide dots
      </div>
    </div>
  );
};
