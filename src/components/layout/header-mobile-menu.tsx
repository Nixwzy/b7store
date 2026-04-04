import Image from 'next/image';
import Link from 'next/link';
import { MenuItem } from '@/types/menu-item';

type Props = {
  menu: MenuItem[];
};

export const HeaderMobileMenu = ({ menu }: Props) => {
  return (
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
  );
};