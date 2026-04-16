// schemas/checkout-address.ts
import { z } from 'zod';

export const checkoutAddressSchema = z.object({
  zipCode: z
    .string()
    .min(8, { error: 'O CEP deve conter no mínimo 8 caracteres.' }),
  street: z.string().min(1, { error: 'Preencha este campo.' }),
  number: z.string().min(1, { message: 'Preencha este campo.' }).max(10),
  city: z.string().min(1, { error: 'Preencha este campo.' }),
  state: z.string().length(2, { message: 'Use a sigla do estado (ex: RJ).' }),
  country: z.string().min(1, { error: 'Preencha este campo.' }),
  complement: z.string().optional(),
});
