import { ChangeEvent, SyntheticEvent, useState, useTransition } from 'react';
import { checkoutAddressSchema } from '@/schemas/checkout-address';
import { Address } from '@/types/address';

const EMPTY_ADDRESS: Address = {
  zipCode: '',
  street: '',
  number: '',
  city: '',
  state: '',
  country: '',
  complement: '',
};

export const useAddressForm = (
  onSave?: (address: Address) => Promise<void>,
  onSuccess?: () => void,
) => {
  const [form, setForm] = useState<Address>(EMPTY_ADDRESS);
  const [error, setError] = useState('');
  const [pending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const result = checkoutAddressSchema.safeParse(form);

    if (!result.success) {
      setError(result.error.issues[0]?.message || 'Preencha todos os campos');
      return;
    }

    setError('');
    startTransition(async () => {
      try {
        await onSave?.(form);
        setForm(EMPTY_ADDRESS);
        if (onSuccess) onSuccess();
      } catch (err: any) {
        setError(err?.message || 'Ocorreu um erro ao salvar o endereço.');
      }
    });
  };

  return { form, error, pending, handleChange, handleSubmit };
};
