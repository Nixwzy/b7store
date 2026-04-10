'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
  text: string;
};
export const ProductDescription = ({ text }: Props) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white border border-gray-200 px-7 mt-20">
      <div className={`flex justify-between items-center py-7 ${isExpanded ? 'border-b' : 'border-0'} border-gray-200`}>
        <div className="text-2xl font-bold">Informações do Produto</div>
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className={`cursor-pointer size-14 border border-gray-200 flex justify-center items-center`}
        >
          <Image
            src={'/assets/ui/arrow-up-s-line.png'}
            alt=""
            width={24}
            height={24}
            className={`transition-all ${isExpanded ? 'rotate-180' : 'rotate-270'} transition-transform duration-300`}
          />
        </div>
      </div>

      {isExpanded && <div className="text-gray-500 my-12 text-sm">{text}</div>}
    </div>
  );
};

// TODO: Transform the like and share buttons into reusable components, and add the functionality for liking and sharing.
