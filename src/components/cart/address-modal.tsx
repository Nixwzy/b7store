// components/cart/address-modal.tsx

import { checkoutAddressSchema } from '@/schemas/checkout-address';
import { Address } from '@/types/address';
import { on } from 'events';
import {
  ChangeEvent,
  FormEvent,
  startTransition,
  useState,
  useTransition,
} from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  onSave?: (address: Address) => Promise<void>;
};

export const AddressModal = ({ open, onClose, onSave }: Props) => {
  const emptyAddress: Address = {
    zipCode: '',
    street: '',
    number: '',
    city: '',
    state: '',
    country: '',
    complement: '',
  };
  const [form, setForm] = useState<Address>(emptyAddress);

  const [error, setError] = useState('');
  const [pending, setTransition] = useTransition();

  if (!open) return null;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
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
        setForm(emptyAddress);
      } catch (err: any) {
        setError(err?.message || 'Ocorreu um erro ao salvar o endereço.');
      }
    });
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/90 z-50">
      <button
        disabled={pending}
        className="absolute top-24 right-24 text-4xl text-white hover:text-gray-700 transition-colors duration-300 cursor-pointer"
        onClick={onClose}
      >
        &times;
      </button>
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Adicionar Endereço</h2>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            name="zipCode"
            placeholder="Digite o seu CEP"
            value={form.zipCode}
            onChange={handleChange}
            disabled={pending}
            className="border border-gray-200"
          />
          <input
            type="text"
            name="street"
            placeholder="Digite a sua rua"
            value={form.street}
            onChange={handleChange}
            disabled={pending}
            className="border border-gray-200"
          />
          <input
            type="text"
            name="number"
            placeholder="Número"
            value={form.number}
            onChange={handleChange}
            disabled={pending}
            className="border border-gray-200"
          />
          <input
            type="text"
            name="city"
            placeholder="Digite a sua cidade"
            value={form.city}
            onChange={handleChange}
            disabled={pending}
            className="border border-gray-200"
          />
          <input
            type="text"
            name="state"
            placeholder="Digite o seu estado"
            value={form.state}
            onChange={handleChange}
            disabled={pending}
            className="border border-gray-200"
          />
          <input
            type="text"
            name="country"
            placeholder="Digite o seu país"
            value={form.country}
            onChange={handleChange}
            disabled={pending}
            className="border border-gray-200"
          />
          <input
            type="text"
            name="complement"
            placeholder="Digite o seu complemento"
            value={form.complement}
            onChange={handleChange}
            disabled={pending}
            className="border border-gray-200"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-4 rounded-sm"
            disabled={pending}
          >
            {pending ? 'Salvando...' : 'Salvar Endereço'}
          </button>
        </form>
      </div>
    </div>
  );
};
