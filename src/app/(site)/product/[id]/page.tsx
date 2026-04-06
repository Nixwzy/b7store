import { ImageSlider } from '@/components/product/image-slider';
import { ProductDescription } from '@/components/product/product-description';
import { ProductDetails } from '@/components/product/product-details';
import { data } from '@/data';
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
          <Link href="/">Home</Link> &gt;{' '}
          <Link href="/categories/camisas">Camisas</Link> &gt;{' '}
          <span>{capitalize(data.product.label)}</span>
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-32">
          <ImageSlider images={data.product.images} />
          <ProductDetails product={data.product} />
        </div>

          <ProductDescription text={data.product.description} />

          <div className="">
            <h3>Você também pode gostar:</h3>
            mock
          </div>

      </div>
    </div>
  );
}
