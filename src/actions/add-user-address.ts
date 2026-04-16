// actions/add-user-address.ts
'use server';

import { mockData } from '@/data/mock';
import { Address } from '@/types/address';

export const addUserAddress = async (token: string, address: Address) => {
  // todo: implementar chamada para API de adicionar endereço do usuário
  return mockData.addresses;
};
