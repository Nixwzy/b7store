import { Banners } from '@/components/home/banners';
import { data } from '@/data';
import Image from 'next/image';
import { Suspense } from 'react';
import { ProductListSkeleton } from '@/components/home/product-list-skeleton';
import { ProductSection } from '@/components/home/product-section';

export default function Page() {
  return (
    <div>
      <Banners list={data.banners} />
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-12">
        {/* benefits array in @/data */}
        {data.benefits.map((item) => (
          <div
            key={item.title}
            className="flex flex-1 py-6 border border-gray-200 rounded-sm"
          >
            <div className="w-32 border-r border-gray-200 flex justify-center items-center">
              <Image
                src={item.icon}
                alt=""
                width={40}
                height={40}
                style={{ width: 40, height: 'auto' }}
              />
            </div>
            <div className="flex-1 pl-8">
              <div className="font-bold text-xl">{item.title}</div>
              <div className="text-gray-500">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductSection
          title="Produtos mais vistos"
          subtitle="Estes produtos na mira dos nossos clientes!"
        />
      </Suspense>

      <Suspense fallback={<ProductListSkeleton />}>
        <ProductSection
          title="Produtos mais vendidos"
          subtitle="Estes são os produtos mais populares da nossa loja!"
        />
      </Suspense>
    </div>
  );
}
