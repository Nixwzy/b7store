import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';
import { login } from '@/actions/login';
import { setAuthCookie } from '@/actions/set-auth-cookie';
import { useAuthStore } from '@/store/auth';
import { LoginFormInputs, loginSchema } from '@/schemas/auth';

export const useLoginForm = () => {
  const [pending, startTransition] = useTransition();
  const authStore = useAuthStore();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    startTransition(async () => {
      const res = await login(data);

      if (res.error) {
        setError('root.serverError', { message: res.error });
      } else if (res.token) {
        await setAuthCookie(res.token);
        authStore.setToken(res.token);
        redirect('/');
      }
    });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    pending,
  };
};