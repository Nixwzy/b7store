'use client';

import Link from 'next/link';
import { useRegisterForm } from '@/hooks/use-register-form';

export const RegisterForm = () => {
  const { register, handleSubmit, errors, pending } = useRegisterForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 p-4 rounded-md"
    >
      <h2 className="text-xl font-bold mt-2 mb-4">Criar uma conta</h2>

      <div className="mb-4">
        <label className="mb-1" htmlFor="name">Nome</label>
        <input
          autoFocus
          type="text"
          id="name"
          {...register('name')}
          className="w-full border border-gray-200 rounded px-3 py-2"
          disabled={pending}
        />
        {errors.name && (
          <div className="text-red-500 text-sm mt-1">{errors.name.message}</div>
        )}
      </div>

      <div className="mb-4">
        <label className="mb-1" htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="w-full border border-gray-200 rounded px-3 py-2"
          disabled={pending}
        />
        {errors.email && (
          <div className="text-red-500 text-sm mt-1">{errors.email.message}</div>
        )}
      </div>

      <div className="mb-4">
        <label className="mb-1" htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          {...register('password')}
          className="w-full border border-gray-200 rounded px-3 py-2"
          disabled={pending}
        />
        {errors.password && (
          <div className="text-red-500 text-sm mt-1">{errors.password.message}</div>
        )}
      </div>

      <div className="mb-4">
        <label className="mb-1" htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword')}
          className="w-full border border-gray-200 rounded px-3 py-2"
          disabled={pending}
        />
        {errors.confirmPassword && (
          <div className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</div>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={pending}
      >
        {pending ? 'Cadastrando...' : 'Cadastrar'}
      </button>

      {errors.root?.serverError && (
        <div className="text-red-500 text-sm mt-1 text-center">
          {errors.root.serverError.message}
        </div>
      )}

      <div className="text-center mt-3">
        <Link
          href="/login"
          className="text-gray-500 text-sm hover:text-blue-700 transition-colors hover:underline"
        >
          Já tem uma conta? Faça login
        </Link>
      </div>
    </form>
  );
};