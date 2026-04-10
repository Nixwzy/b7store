import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  selected?: boolean;
  srcSelected?: string;
};

export const HeaderIcon = ({ src, alt, selected, srcSelected }: Props) => {
  const iconSrc = selected && srcSelected ? srcSelected : src;

  return (
    <div
      className={`size-12 border border-gray-200 rounded-sm flex items-center justify-center cursor-pointer ${selected ? 'bg-blue-600' : 'hover:bg-gray-100'}`}
    >
      <Image
        src={iconSrc}
        alt={alt}
        width={24}
        height={24}
        className="size-6"
      />
    </div>
  );
};
