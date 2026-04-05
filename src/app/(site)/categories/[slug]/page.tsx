import { ProductListFilter } from '@/components/categories/product-list-filter';
import { capitalize } from '@/libs/utils';
import Link from 'next/link';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const filters = await searchParams;

  return (
    <div>
      <div className="text-gray-500 text-sm mb-4">
        <Link href="/">Home</Link> &gt; <span>{capitalize(slug)}</span>
      </div>

      <ProductListFilter />
    </div>
  );
}
