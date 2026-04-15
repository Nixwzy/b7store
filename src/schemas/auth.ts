import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email({ error: 'E-mail inválido.' }),
  password: z
    .string()
    .min(6, { error: 'A senha deve conter no mínimo 6 caracteres.' }),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  name: z.string().min(2, { error: 'O nome deve ter no mínimo 2 caracteres.' }),
  email: z.email({ error: 'E-mail inválido' }),
  password: z
    .string()
    .min(6, { error: 'A senha deve conter no mínimo 6 caracteres.' }),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: 'As senhas não coincidem.',
  path: ['confirmPassword'],
});

export type RegisterFormInputs = z.infer<typeof registerSchema>;