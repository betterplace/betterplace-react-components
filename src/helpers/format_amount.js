function formatAmount({cents}) {
  return new Intl.NumberFormat(
    (I18n && I18n.locale) ||             // use same locale as set for i18n-js
    (navigator && navigator.language) || // fall back to browser locale
    'de-DE',                             // fall back to German
    {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }
  ).format(cents / 100)
}

export { formatAmount }
