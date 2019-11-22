const toQuery = (object) => {
  const searchParams = Object.keys(object).map(k => {
    return object[k] ? (encodeURIComponent(k) + '=' + encodeURIComponent(object[k])) : null
  }).filter(e => e).join('&')
  return searchParams ? `?${searchParams}` : ''
}

export const encodedShareURL = (url, utmParams) =>
  encodeURIComponent(url + toQuery(utmParams || {}))

export const openPopup = (url) =>
  window.open(url, 'sharer', 'toolbar=no,width=1042,height=436')
