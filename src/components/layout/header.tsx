'use client';
import Image from 'next/image';
import { HeaderIcon } from './header-icon';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="bg-black text-white p-4 text-center">
        <strong>FRETE GRÁTIS</strong> em todo o site para compras acima de R$
        199,00!
      </div>
      <div className="p-6 w-full max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <Link href={'/'}>
            <div className="w-32">
              <Image
                src="/assets/ui/logo-black.png"
                alt="Logo"
                width={120}
                height={40}
              />
            </div>
          </Link>

          <div className="flex gap-4">
            {/* TODO: Implement order history link */}
            <Link href={'/orders'}>
              <HeaderIcon src="/assets/ui/user-line.png" alt="User Icon" />
            </Link>
            <Link href={'/cart'}>
              <HeaderIcon
                src="/assets/ui/shopping-bag-4-line.png"
                alt="Cart Icon"
              />
            </Link>
            {/* Menu only in mobile */}
            <div className="md:hidden">
              <HeaderIcon src="/assets/ui/menu-line.png" alt="Menu Icon" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
