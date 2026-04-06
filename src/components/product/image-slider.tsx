'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
  images: string[];
};
export const ImageSlider = ({ images }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="max-w-sm mx-auto md:mx-0">
      <div className="border border-gray-200 bg-white p-14">
        <Image
          src={images[currentImage]}
          alt="Product image"
          width={380}
          height={380}
          className="max-w-full"
        />
      </div>
      <div className="grid grid-cols-4 gap-6 mt-8">
        {images.map((image, index) => (
          <div
            key={index}
            className={`p-2 bg-white cursor-pointer border ${index === currentImage ? 'border-blue-500' : 'border-transparent'}`}
          >
            <Image
              src={image}
              alt=''
              width={120}
              height={120}
              onClick={() => setCurrentImage(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
