import { cookies } from 'next/headers';

export const getServerAuthToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get('authToken')?.value || null;
};

export const setServerAuthToken = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set('authToken', token, { httpOnly: true });
};

export const clearServerAuthToken = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('authToken');
};
