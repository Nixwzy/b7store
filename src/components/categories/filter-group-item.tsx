'use client';
import { useQueryString } from '@/hooks/use-querystring';

type Props = {
  groupId: string;
  item: {
    id: string;
    label: string;
  };
};

export const FilterGroupItem = ({ groupId, item }: Props) => {
  const queryString = useQueryString();
  const toggleFilter = (groupId: string, itemId: string) => {
    const rawValue = queryString.get(groupId);
    let selectedIds = rawValue ? rawValue.split('|') : [];

    if (selectedIds.includes(itemId)) {
      selectedIds = selectedIds.filter((id) => id !== itemId);
    } else {
      selectedIds.push(itemId);
    }
    queryString.set(groupId, selectedIds.join('|'));
  };

  const hasSelected = (groupId: string, itemId: string) => {
    let selectedIds = queryString.get(groupId)?.split('|');
    return selectedIds && selectedIds.includes(itemId) ? true : false;
  };

  return (
    <div className="flex gap-4 items-center mt-4">
      <input
        type="checkbox"
        id={`item-${item.id}`}
        className="size-6 cursor-pointer"
        onChange={() => toggleFilter(groupId, item.id)}
        checked={hasSelected(groupId, item.id)}
      />
      <label
        htmlFor={`item-${item.id}`}
        className="text-lg text-gray-500 cursor-pointer hover:text-blue-500"
      >
        {item.label}
      </label>
    </div>
  );
};
