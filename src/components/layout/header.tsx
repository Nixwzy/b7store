'use client';

import Image from 'next/image';
import { HeaderIcon } from './header-icon';
import Link from 'next/link';
import { useState } from 'react';
import { is } from 'zod/locales';

type MenuItem = {
  label: string;
  href: string;
};

export function Header() {
  const menu: MenuItem[] = [
    { label: 'Camisetas', href: 'categories/camisas' },
    { label: 'Acessórios', href: 'categories/acessorios' },
    { label: 'Kits', href: 'categories/kits' },
    { label: 'Eletrônicos', href: 'categories/eletronicos' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false); // menu state toggle mobile menu

  return (
    <header className="bg-white border-b border-gray-200">
      {/* top banner */}
      <div className="bg-black text-white p-4 text-center">
        <strong>FRETE GRÁTIS</strong> em todo o site para compras acima de R$
        199,00!
      </div>

      {/* main content */}
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
          {/* user actions */}
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
            {/* mobile menu */}
            <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <HeaderIcon src="/assets/ui/menu-line.png" 
              alt="Menu Icon"
              selected={isMenuOpen}
              srcSelected="/assets/ui/menu-line-white.png" />
            </div>
          </div>
        </div>
      </div>
      {/* mobile menu sections state={isMenuOpen} */}
      {isMenuOpen && (
        <div className="md:hidden">
          {menu.map((item) => (
            <Link key={item.label} href={item.href}>
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div className="font-medium text-gray-500 text-lg">
                  {item.label}
                </div>

                <Image
                  src="/assets/ui/arrow-up-right.png"
                  alt="Arrow Icon"
                  width={24}
                  height={24}
                />
              </div>
            </Link>
          ))}
        </div>
      )}
      {/* search */}
      <div className="md:hidden p-6">Search</div>
    </header>
  );
}
