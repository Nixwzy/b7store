export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

type FormatPriceOptions = {
  locale?: string;
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  useCurrencyStyle?: boolean;
};

export const formatPrice = (
  value: number,
  {
    locale = 'pt-BR',
    currency = 'BRL',
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
    useCurrencyStyle = true,
  }: FormatPriceOptions = {}
) => {
  if (useCurrencyStyle) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits,
      maximumFractionDigits,
    }).format(value);
  }

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(value);
};
