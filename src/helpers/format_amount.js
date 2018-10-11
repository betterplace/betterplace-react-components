function formatAmount({cents, locale, showCents}) {
  return new Intl.NumberFormat(
    locale,
    {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: showCents ? 2 : 0,
      maximumFractionDigits: showCents ? 2 : 0
    }
  ).format(cents / 100)
}

export { formatAmount }
