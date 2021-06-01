export const toQuery = (object) => {
  const searchParams = Object.keys(object).map(k => {
    return object[k] ? (encodeURIComponent(k) + '=' + encodeURIComponent(object[k])) : null
  }).filter(e => e).join('&')
  return searchParams ? `?${searchParams}` : ''
}

export const encodedShareURL = (url, utmParams) =>
  encodeURIComponent(url + toQuery(utmParams || {}))

export const openPopup = (url) =>
  window.open(url, 'sharer', 'toolbar=no,width=1042,height=436')

export const copyToClipboard = (value) => {
  const tempEl = document.createElement('textarea')
  tempEl.value = value
  document.body.appendChild(tempEl)
  tempEl.select()
  const success = document.execCommand('copy')
  document.body.removeChild(tempEl)

  if (!success) {
    const locale = document.documentElement.lang || 'de'
    const alertMessage = locale === 'de' ? 'Sorry, dein Browser unterstützt diese Funktion nicht.' : "Sorry, your Browser doesn't support this feature."
    alert(alertMessage)
  }

  return success
}

export const isMobileOrTablet = () => {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent)
}
