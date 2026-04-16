import { Address } from '@/types/address';
import { useAddressForm } from './use-address-form';

type Props = {
  open: boolean;
  onClose: () => void;
  onSave?: (address: Address) => Promise<void>;
};

export const AddressModal = ({ open, onClose, onSave }: Props) => {
  const { form, error, pending, handleChange, handleSubmit } = useAddressForm(
    onSave,
    onClose,
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/90 z-50 p-4">
      <button
        disabled={pending}
        className="absolute top-8 right-8 text-4xl text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
        onClick={onClose}
      >
        &times;
      </button>
      <div className="bg-white p-8 rounded-sm w-full max-w-md shadow-xl">
        <h2 className="text-center text-2xl font-bold mb-6 text-blue-700">Adicionar Endereço</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="zipCode"
            placeholder="Digite o seu CEP"
            value={form.zipCode}
            onChange={handleChange}
            disabled={pending}
            className="text-sm w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="text"
            name="street"
            placeholder="Digite a sua rua"
            value={form.street}
            onChange={handleChange}
            disabled={pending}
            className="text-sm w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <div className="flex gap-4">
            <input
              type="text"
              name="number"
              placeholder="Número"
              value={form.number}
              onChange={handleChange}
              disabled={pending}
              className="text-sm w-1/3 px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              name="complement"
              placeholder="Complemento"
              value={form.complement}
              onChange={handleChange}
              disabled={pending}
              className="text-sm flex-1 px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <input
            type="text"
            name="city"
            placeholder="Digite a sua cidade"
            value={form.city}
            onChange={handleChange}
            disabled={pending}
            className="text-sm w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <div className="flex gap-4">
            <input
              type="text"
              name="state"
              placeholder="Estado (UF)"
              value={form.state}
              onChange={handleChange}
              disabled={pending}
              className="text-sm w-1/3 px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              name="country"
              placeholder="País"
              value={form.country}
              onChange={handleChange}
              disabled={pending}
              className="text-sm flex-1 px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          {error && <span className="text-red-500 text-sm font-medium">{error}</span>}
          <button
            type="submit"
            className="cursor-pointer mt-2 bg-blue-600 text-white font-semibold py-4 rounded-sm hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={pending}
          >
            {pending ? 'Salvando...' : 'Salvar Endereço'}
          </button>
        </form>
      </div>
    </div>
  );
};