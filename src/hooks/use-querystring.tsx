import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export const useQueryString = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return {
    get: (key: string) => {
      return searchParams.get(key) || '';
    },
    set: (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`${pathname}?${params.toString()}`);
    },
  };
};
