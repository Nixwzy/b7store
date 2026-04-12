import { getCartState } from '@/actions/get-cart-state';
import { getProductsFromList } from '@/actions/get-products-by-ids';
import { CartContainer } from '@/components/cart/cart-container';
import { CartListItem } from '@/types/cart-list-item';
import { redirect } from 'next/navigation';

export default async function Page() {
  const { cart: initialCart } = await getCartState();

  //   if the cart is empty, we can redirect the user to the home page
  if (initialCart.length === 0) {
    redirect('/');
  }

  const cartLineItems: CartListItem[] = [];
  let totalPrice = 0;

  const productIds = initialCart.map((item) => item.productId);
  const products = await getProductsFromList(productIds);

  for (const cartItem of initialCart) {
    const product = products.find((p) => p.id === cartItem.productId);
    if (product) {
      cartLineItems.push({ product, quantity: cartItem.quantity });
      totalPrice += product.price * cartItem.quantity;
    }
  }

  return <CartContainer items={cartLineItems} totalPrice={totalPrice} />;
}
