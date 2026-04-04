'use client';

import Image from 'next/image';
import { HeaderIcon } from './header-icon';
import Link from 'next/link';
import { useState } from 'react';
import { HeaderSearch } from './header-search';
import { data } from '@/data';
import { HeaderMobileMenu } from './header-mobile-menu';

export function Header() {
  const menu = data.menu; // menu array in @/data
  const [isMenuOpen, setIsMenuOpen] = useState(false); // menu state toggle mobile menu

  return (
    <header className="bg-white border-b border-gray-200">
      {/* top banner */}
      <div className="bg-black text-white p-4 text-center">
        <strong>FRETE GRÁTIS</strong> em todo o site para compras acima de R$
        199,00!
      </div>

      {/* Logo */}
      <div className="p-6 w-full max-w-6xl mx-auto">
        <div className="flex items-center">
          <div className="w-32">
            <Link href={'/'}>
              <Image
                src="/assets/ui/logo-black.png"
                alt="Logo"
                width={120}
                height={40}
              />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="flex-1">
            <div className=" w-full hidden md:flex items-center px-6 gap-6">
              <div className="flex-1">
                <ul className="flex gap-10 font-medium text-gray-500">
                  {menu.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-80">
                <HeaderSearch />
              </div>
            </div>
          </div>

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

            {/* menu icon*/}
            <div
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <HeaderIcon
                src="/assets/ui/menu-line.png"
                alt="Menu Icon"
                selected={isMenuOpen}
                srcSelected="/assets/ui/menu-line-white.png"
              />
            </div>
          </div>
        </div>
      </div>
      {/* mobile menu sections IMPORTED */}
      {isMenuOpen && <HeaderMobileMenu menu={menu} />}
      {/* search section*/}
      <div className="md:hidden p-6">
        <HeaderSearch />
      </div>
    </header>
  );
}
