'use client';
import { useAuthStore } from '@/store/auth';
import Link from 'next/link';
import { FormEvent, ChangeEvent, useState, useTransition } from 'react';
import { z } from 'zod';

// TODO: Eliminar código deprecado (React.FormEvent, parâmetros do zod)
// TODO: Mover código de validação para um hook separado (useLoginForm) e usar o zod resolver do react-hook-form

const schema = z.object({
  email: z.email({ message: 'E-mail inválido' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve conter no mínimo 6 caracteres' }),
});

type ErrorStructure = {
  email?: string;
  password?: string;
  form?: string;
};

export const LoginForm = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<ErrorStructure>({});
  const [pending, startTransition] = useTransition();
  const authStore = useAuthStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
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
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded px-3 py-2"
          disabled={pending}
        />
        {errors.email && (
          <div className="text-red-500 text-sm mt-1">{errors.email}</div>
        )}
      </div>
      <div className="mb-4">
        <label className="mb-1" htmlFor="password">
          Senha
        </label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded px-3 py-2"
          disabled={pending}
        />
        {errors.password && (
          <div className="text-red-500 text-sm mt-1">{errors.password}</div>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded cursor-pointer hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={pending}
      >
        {pending ? 'Entrando...' : 'Entrar'}
      </button>
      {errors.form && (
        <div className="text-red-500 text-sm mt-1">{errors.form}</div>
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
