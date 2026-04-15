'use server';

type LoginData = {
  email: string;
  password: string;
};

type LoginResponse = {
  error: string | null;
  token?: string;
};

export const login = async ({
  email,
  password,
}: LoginData): Promise<LoginResponse> => {
  // todo: login requisition
  // fake token for testing
  return { error: null, token: '123' };
};
