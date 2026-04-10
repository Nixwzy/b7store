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
      <div className="relative aspect-3/1">
        {list.map((banner, index) => (
          <Link
            key={banner.img}
            href={banner.link}
            style={{ opacity: currentImg === index ? 1 : 0 }}
            className="absolute inset-0 transition-opacity duration-700"
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

      <div className="mt-4 flex justify-center gap-2">
        {list.map((_, index) => (
          <button
            key={index}
            aria-label={`Ir para o banner ${index + 1}`}
            className="size-4 bg-blue-600 rounded-full cursor-pointer"
            style={{ opacity: currentImg === index ? 1 : 0.3 }}
            onClick={() => handleBannerClick(index)}
          />
        ))}
      </div>
    </div>
  );
};