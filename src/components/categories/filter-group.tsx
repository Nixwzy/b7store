'use client';
import Image from 'next/image';
import { FilterGroupItem } from './filter-group-item';
import { useState } from 'react';

export const FilterGroup = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div className="flex-1 font-bold text-xl">Group Name</div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="size-8 flex justify-center items-center cursor-pointer"
        >
          <Image
            src={'/assets/ui/arrow-up-s-line.png'}
            alt=""
            width={24}
            height={24}
            className={`transform ${isOpen ? 'rotate-180' : 'rotate-270'} transition-transform`}
          />
        </div>
      </div>
      <div
        className={`overflow-y-hidden ${isOpen ? 'max-h-96' : 'max-h-0'} transition-all`}
      >
        <FilterGroupItem id={1} label={'Item 1'} />
        <FilterGroupItem id={2} label={'Item 2'} />
        <FilterGroupItem id={3} label={'Item 3'} />
      </div>
    </div>
  );
};
