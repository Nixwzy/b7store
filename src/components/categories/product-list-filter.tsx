'use client';

import { useState } from 'react';

export const ProductListFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div>
      <div className="flex flex-col gap-6 md:flex-row justify-between items-start md:items-center">
        <div className="text-3xl">
          <strong>placeholder</strong> Produtos
        </div>
        <div className="w-full md:max-w-70 flex flex-row gap-5">
          <select className="h-14 flex-1 flex items-center px-6 bg-white border border-gray-200 rounded-sm text-gray-500">
            <option>Ordenar por</option>
          </select>
          <div
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="h-14 flex-1 flex items-center px-6 bg-white border border-gray-200 rounded-sm text-gray-500 md:hidden"
          >
            Filtrar por
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row gap-8">
        <div
          className={`flex-1 md:max-w-70 ${isFilterOpen ? 'block' : 'hidden'} md:block`}
        >
          Filtro
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3"></div>
      </div>
    </div>
  );
};
