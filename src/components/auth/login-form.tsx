'use client';
import { login } from '@/actions/login';
import { setAuthCookie } from '@/actions/set-auth-cookie';
import { useAuthStore } from '@/store/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useTransition } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.email({ error: 'E-mail inválido' }),
  password: z
    .string()
    .min(6, { error: 'A senha deve conter no mínimo 6 caracteres' }),
});

type LoginFormInputs = z.infer<typeof schema>;

export const LoginForm = () => {
  const [pending, startTransition] = useTransition();
  const authStore = useAuthStore();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border border-gray-200 p-4 rounded-md"
    >
      <h2 className="text-xl font-bold mt-2 mb-4">Login</h2>

      <div className="mb-4">
        <label className="mb-1" htmlFor="email">
          E-mail
        </label>

        <input
          autoFocus
          type="email"
          id="email"
          {...register('email')}
          className="w-full border border-gray-200 rounded px-3 py-2"
          disabled={pending}
        />
        {errors.email && (
          <div className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label className="mb-1" htmlFor="password">
          Senha
        </label>
        <input
          type="password"
          id="password"
          {...register('password')}
          className="w-full border border-gray-200 rounded px-3 py-2"
          disabled={pending}
        />
        {errors.password && (
          <div className="text-red-500 text-sm mt-1">
            {errors.password.message}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded cursor-pointer hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={pending}
      >
        {pending ? 'Entrando...' : 'Entrar'}
      </button>

      {errors.root?.serverError && (
        <div className="text-red-500 text-sm mt-1 text-center">
          {errors.root.serverError.message}
        </div>
      )}

      <div className="text-center mt-3">
        <Link
          href="/register"
          className="text-gray-500 text-sm hover:text-blue-700 transition-colors hover:underline"
        >
          Criar uma conta
        </Link>
      </div>
    </form>
  );
};
