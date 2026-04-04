import { Product } from '@/types/product';
import Image from 'next/image';

type Props = {
  data: Product;
};
export const ProductItem = ({ data }: Props) => {
  return (
    <div className="bg-white border border-gray-200 rounded-sm p-6">
      <div className="">like button</div>
      <div className="">
        <Image
          src={data.image}
          alt={data.label}
          width={200}
          height={200}
          className="max-w-full h-48"
        />
      </div>
    </div>
  );
};
