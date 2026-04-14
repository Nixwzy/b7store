import { CartListItem } from '@/types/cart-list-item';
import { formatPrice } from '@/libs/utils';
import Image from 'next/image';
import { useCartItemActions } from '@/hooks/use-cart-item-actions';

type Props = {
  item: CartListItem;
};

export const CartProductItem = ({ item }: Props) => {
  const { handleIncrease, handleDecrease, handleRemove } =
    useCartItemActions(item);
  const formattedPrice = formatPrice(item.product.price);

  return (
    <div className="flex p-6 items-center gap-4 md:gap-8 border-0 md:border-b border-gray-200">
      <div className="border border-gray-200 p-1">
        <Image
          src={item.product.image}
          alt={item.product.label}
          width={96}
          height={96}
          className="size-24 md:size-16"
        />
      </div>
      <div className="flex-1 flex flex-col md:flex-row justify-between md:items-center">
        <div>
          <div className="mb-2 text-sm font-semibold">{item.product.label}</div>
          <div className="hidden md:block text-xs text-gray-500 mt-2">
            CÓD: {item.product.id}
          </div>
        </div>
        {/* quantity interaction area */}
        <div>
          <div className="w-30 flex text-gray-500 border border-gray-200 rounded-sm text-center">
            <div
              onClick={handleDecrease}
              className="cursor-pointer text-2xl size-10 flex justify-center items-center hover:bg-gray-200 transition"
            >
              -
            </div>
            <div className="text-lg size-10 border-x border-gray-200 flex justify-center items-center">
              {item.quantity}
            </div>
            <div
              onClick={handleIncrease}
              className="cursor-pointer text-2xl size-10 flex justify-center items-center hover:bg-gray-200 transition"
            >
              +
            </div>
          </div>
        </div>
      </div>
      <div className="w-24 md:w-40 flex flex-col md:flex-row justify-between items-end md:items-center">
        <div className="text-lg text-blue-600 font-semibold">
          {formattedPrice}
        </div>
        <div
          onClick={handleRemove}
          className="cursor-pointer size-12 border border-gray-200 flex justify-center items-center rounded-sm hover:bg-red-400 transition-colors duration-500"
        >
          <Image
            src={'/assets/ui/trash.png'}
            alt="Remove item"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};
