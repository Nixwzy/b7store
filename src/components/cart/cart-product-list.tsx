import { CartListItem } from '@/types/cart-list-item';
import { CartProductItem } from './cart-product-item';

type Props = {
  items: CartListItem[];
};

export const CartProductList = ({ items }: Props) => {
  return (
    <div className='bg-white border border-gray-200'>
      {items.map((item) => (
        <CartProductItem key={item.product.id} item={item} />
      ))}
    </div>
  );
};
