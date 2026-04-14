'use server';

import { setServerAuthToken } from '@/libs/cookies/auth-cookies';

export const setAuthCookie = async (token: string) => {
  await setServerAuthToken(token);
};
