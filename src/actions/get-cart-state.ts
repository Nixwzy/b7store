'use server';

import { getServerCart } from '@/libs/cookies/cart-cookies';

export const getCartState = async () => {
  const cart = await getServerCart();
  return { cart };
};
