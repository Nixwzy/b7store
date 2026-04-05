
import { capitalize } from '@/libs/utils';
import Link from 'next/link';

type Props = {
  params: Promise<{ id: string }>;
};
export default async function Page({ params }: Props) {
  const { id } = await params;

  // TODO: fetch product by id
  return (
    <div className="">
      <div>
        <div className="text-gray-500 text-sm mb-4">
          <Link href="/">Home</Link> &gt; <Link href="/categories/camisas">Camisas</Link> &gt; <span>{capitalize('Nome do Produto')}</span>
        </div>
        <div>Product Page {id}</div>
      </div>
    </div>
  );
}
