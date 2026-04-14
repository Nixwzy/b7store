'use server';

import { clearServerAuthToken } from '@/libs/cookies/auth-cookies';

export const clearAuthCookie = async () => {
  await clearServerAuthToken();
};
