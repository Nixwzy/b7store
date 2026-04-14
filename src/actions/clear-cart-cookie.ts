'use server';

import { clearServerCart } from '@/libs/cookies/cart-cookies';

export const clearCartCookie = async () => {
  await clearServerCart();
};
