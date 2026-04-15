'use client';

import { clearCartCookie } from '@/actions/clear-cart-cookie';
import { finishCart } from '@/actions/finish-cart';
import { useAuthStore } from '@/store/auth';
import { useCartStore } from '@/store/cart';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/navigation';

export const PurchaseButton = () => {
  const { token, hydrated } = useAuthStore((state) => state);
  const cartStore = useCartStore((state) => state);
  const router = useRouter();

  const handlePurchase = async () => {
    if (!token || !cartStore.shipping.selectedAddressId) return;

    const sessionUrl = await finishCart(
      token,
      cartStore.shipping.selectedAddressId,
      cartStore.cart,
    );
    if (sessionUrl) {
      await clearCartCookie();
      cartStore.clearCart();
      router.push(sessionUrl);
    } else {
      alert(
        'Ocorreu um erro ao finalizar a compra. Por favor, tente novamente.',
      );
    }
  };

  if (!hydrated) return null;

  if (!token) {
    return (
      <Link
        className="block w-full text-center px-6 py-5 bg-blue-600 text-white border-0 rounded-sm cursor-pointer hover:bg-blue-700 transition-colors duration-300"
        href="/login"
      >
        Faça login para finalizar
      </Link>
    );
  }

  return (
    <button
      disabled={!cartStore.shipping.selectedAddressId ? true : false}
      onClick={handlePurchase}
      className="w-full text-center px-6 py-5 bg-blue-600 text-white border-0 rounded-sm cursor-pointer hover:bg-blue-700 transition-colors duration-300 disabled:opacity-20 disabled:cursor-not-allowed disabled:transition-none"
    >
      Finalizar compra
    </button>
  );
};
