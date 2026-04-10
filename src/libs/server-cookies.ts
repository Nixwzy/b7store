import { cookies } from 'next/headers';
import { CartItem } from '@/types/cart-item';

// retrieves the cart items from the 'cart' cookie. if the cookie doesn't exist or is invalid, it returns an empty array.
export const getServerCart = async (): Promise<CartItem[]> => {
  const cookieStore = await cookies();
  const value = cookieStore.get('cart')?.value;
  if (!value) return [];
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
};

// updates the cart cookie with the provided cart items. it should be called whenever the cart is modified on the server side.
export const setServerCart = async (cart: CartItem[]) => {
  const cookieStore = await cookies();
  cookieStore.set('cart', JSON.stringify(cart), { httpOnly: true });
};

// deletes the 'cart' cookie, effectively clearing the cart on the server side. this can be used when the user checks out or wants to empty their cart.
export const clearServerCart = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('cart');
};
