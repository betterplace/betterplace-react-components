function formatAmount({cents, locale}) {
  return new Intl.NumberFormat(
    locale,
    {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }
  ).format(cents / 100)
}

export { formatAmount }
