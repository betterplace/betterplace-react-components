export type FormatAmountOptions = { cents: number; locale?: string; showCents?: boolean }
export const formatAmount = ({ cents, locale, showCents = false }: FormatAmountOptions): string =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: showCents ? 2 : 0,
    maximumFractionDigits: showCents ? 2 : 0,
  }).format(cents / 100)
