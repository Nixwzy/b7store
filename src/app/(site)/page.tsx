import { Banners } from '@/components/home/banners';
import { data } from '@/data';
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <Banners list={data.banners} />
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-12">

        {/* item 1 */}
        <div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
          <div className="w-32 border-r border-gray-200 flex justify-center items-center">
            <Image
              src={'/assets/ui/truck-line.png'}
              alt=""
              width={40}
              height={30}
            />
          </div>
          <div className="flex-1 pl-8">
            <div className="font-bold text-xl">Frete Grátis</div>
            <div className="text-gray-500">Acima de R$ 199,00</div>
          </div>
        </div>

        {/* item 2 */}
        <div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
          <div className="w-32 border-r border-gray-200 flex justify-center items-center">
            <Image
              src={'/assets/ui/discount-percent-line.png'}
              alt=""
              width={40}
              height={30}
            />
          </div>
          <div className="flex-1 pl-8">
            <div className="font-bold text-xl">Ofertas Imbatíveis</div>
            <div className="text-gray-500">Receba descontos exclusivos</div>
          </div>
        </div>
        {/* item 3 */}
        <div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
          <div className="w-32 border-r border-gray-200 flex justify-center items-center">
            <Image
              src={'/assets/ui/arrow-left-right-line.png'}
              alt=""
              width={40}
              height={30}
            />
          </div>
          <div className="flex-1 pl-8">
            <div className="font-bold text-xl">Troca Fácil</div>
            <div className="text-gray-500">Devolução em até 30 dias</div>
          </div>
        </div>
      </div>
    </div>
  );
}
