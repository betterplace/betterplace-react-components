export const formatAmount = ({cents, locale, showCents = false}) =>
  new Intl.NumberFormat(
    locale,
    {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: showCents ? 2 : 0,
      maximumFractionDigits: showCents ? 2 : 0
    }
  ).format(cents / 100)
