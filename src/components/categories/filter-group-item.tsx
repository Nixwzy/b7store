type Props = {
  id: number;
  label: string;
};

export const FilterGroupItem = ({id, label}: Props) => {
  return (
    <div className="flex gap-4 items-center mt-4">
      <input id={`item-${id}`} className="size-6 cursor-pointer" type="checkbox" />
      <label
        htmlFor={`item-${id}`}
        className="text-lg text-gray-500 cursor-pointer hover:text-blue-500"
      >
        {label}
      </label>
    </div>
  );
};
