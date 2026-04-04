'use client';
import { useBannerCarousel } from '@/hooks/use-banner-carousel';
import { Banner } from '@/types/banner';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  list: Banner[];
};

export const Banners = ({ list }: Props) => {
  const { currentImg, handleBannerClick } = useBannerCarousel(list.length);

  return (
    <div>
      {/* banner container: relative + aspect-[3/1] defines the height proportionally.
      All banners are stacked on top of each other using absolute + inset-0.
      Only the active banner (controlled by current state) will be visible via opacity.
      The transition-all enables smooth fade between banners. */}
      <div className="relative aspect-[3/1]">
        {list.map((banner, index) => (
          <Link
            key={index}
            href={banner.link}
            style={{ opacity: currentImg === index ? 1 : 0 }}
            className="absolute inset-0 transition-all"
          >
            <Image
              src={banner.img}
              alt=""
              width={1200}
              height={400}
              className="rounded-md"
            />
          </Link>
        ))}
      </div>
      {/* slide dots */}
      <div className="mt-4 flex justify-center gap-2">
        {list.map((_, index) => (
          <div
            key={index}
            className="size-4 bg-blue-600 rounded-full cursor-pointer"
            style={{ opacity: currentImg === index ? 1 : 0.3 }}
            onClick={() => handleBannerClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
