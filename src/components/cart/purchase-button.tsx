'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';
import { useCartStore } from '@/store/cart';
import { clearCartCookie } from '@/actions/clear-cart-cookie';
import { finishCart } from '@/actions/finish-cart';

export const PurchaseButton = () => {
  const { token, hydrated } = useAuthStore();
  const { cart, shipping, clearCart } = useCartStore();
  const router = useRouter();

  if (!hydrated) return null;

  const handlePurchase = async () => {
    if (!token || !shipping.selectedAddressId) return;

    const sessionUrl = await finishCart(
      token,
      shipping.selectedAddressId,
      cart,
    );

    if (sessionUrl) {
      await clearCartCookie();
      clearCart();
      router.push(sessionUrl);
    } else {
      alert(
        'Ocorreu um erro ao finalizar a compra. Por favor, tente novamente.',
      );
    }
  };

  if (!token) {
    return (
      <Link
        href="/login"
        className="block w-full text-center px-6 py-5 bg-blue-600 text-white border-0 rounded-sm cursor-pointer hover:bg-blue-700 transition-colors duration-300"
      >
        Faça login para finalizar
      </Link>
    );
  }

  return (
    <button
      disabled={!shipping.selectedAddressId}
      onClick={handlePurchase}
      className="w-full text-center px-6 py-5 bg-blue-600 text-white border-0 rounded-sm cursor-pointer hover:bg-blue-700 transition-colors duration-300 disabled:opacity-20 disabled:cursor-not-allowed disabled:transition-none"
    >
      Finalizar compra
    </button>
  );
};
