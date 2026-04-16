// actions/get-user-address.ts
'use server';

import { mockData } from '@/data/mock';

export const getUserAddress = async (token: string) => {
  // TODO: make a request to get user address using the token
  return mockData.addresses;
};
