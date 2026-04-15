import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email({ error: 'E-mail inválido.' }),
  password: z
    .string()
    .min(6, { error: 'A senha deve conter no mínimo 6 caracteres.' }),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;