import { encodedShareURL, openPopup } from '../../helpers/sharing_helper'
import { FacebookMessengerIcon } from '../../assets/icons'
import { buildShareButtonComponent } from './base'

export const facebookMessengerShareAction = ({facebookAppId, shareUrl, utmParams}) =>
  window.innerWidth > 767 ?
    openPopup(`http://www.facebook.com/dialog/send?app_id=${facebookAppId}&link=${encodedShareURL(shareUrl, utmParams)}&redirect_uri=${encodeURIComponent(shareUrl)}`) :
    window.open(`fb-messenger://share?link=${encodedShareURL(shareUrl, utmParams)}${encodeURIComponent(`&app_id=${facebookAppId}`)}`)

export const FacebookMessengerButton = buildShareButtonComponent({
  action: facebookMessengerShareAction,
  color:  '#0084FF',
  icon:   FacebookMessengerIcon,
})
