import { Banners } from '@/components/home/banners';
import { data } from '@/data';
import Image from 'next/image';

const benefits = [
  {
    icon: '/assets/ui/truck-line.png',
    title: 'Frete Grátis',
    description: 'Acima de R$ 199,00',
  },
  {
    icon: '/assets/ui/discount-percent-line.png',
    title: 'Ofertas Imbatíveis',
    description: 'Receba descontos exclusivos',
  },
  {
    icon: '/assets/ui/arrow-left-right-line.png',
    title: 'Troca Fácil',
    description: 'Devolução em até 30 dias',
  },
];

export default function Page() {
  return (
    <div>
      <Banners list={data.banners} />
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-12">
        {benefits.map((item) => (
          <div key={item.title} className="flex flex-1 py-6 border border-gray-200 rounded-sm">
            <div className="w-32 border-r border-gray-200 flex justify-center items-center">
              <Image src={item.icon} alt="" width={40} height={30} />
            </div>
            <div className="flex-1 pl-8">
              <div className="font-bold text-xl">{item.title}</div>
              <div className="text-gray-500">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}