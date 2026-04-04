import { Banners } from "@/components/home/banners";
import { data } from "@/data";
import Image from "next/image";

export default function Page () {
  return (
    <div>
      <Banners list={data.banners} />
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
          <div className="w-32 border-r border-gray-200 flex justify-center items-center">
            <Image
            src={'/assets/ui/truck-line.png'}
            alt=""
            width={40}
            height={30}
            />
          </div>
          <div className="flex-1">
            conteudo
          </div>
        </div>

         <div className="flex-1">
          item 2
        </div>

         <div className="flex-1">
          item 3
        </div>

      </div>
    </div>
  )
}