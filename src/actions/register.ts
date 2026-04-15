'use server';

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

type RegisterResponse = {
  error: string | null;
};

export const register = async ({
  name,
  email,
  password,
}: RegisterData): Promise<RegisterResponse> => {
  // todo: register requisition
  return { error: null };
};
