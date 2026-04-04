'use client';
import Image from 'next/image';
import { FilterGroupItem } from './filter-group-item';
import { useState } from 'react';

type Props = {
  id: string;
  name: string;
};

export const FilterGroup = ({ id, name }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div className="flex-1 font-bold text-xl">{name}</div>
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
        <FilterGroupItem groupId={id} item={{ id: 'node', label: 'NodeJS' }} />
        <FilterGroupItem groupId={id} item={{ id: 'react', label: 'React' }} />
        <FilterGroupItem
          groupId={id}
          item={{ id: 'rn', label: 'React Native' }}
        />
      </div>
    </div>
  );
};
