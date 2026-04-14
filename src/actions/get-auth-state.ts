'use server';

import { getServerAuthToken } from '@/libs/cookies/auth-cookies';

export const getAuthState = async () => {
  const token = await getServerAuthToken();
  return { token };
};
