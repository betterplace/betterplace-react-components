import { encodedShareURL, openPopup } from '../../helpers/sharing_helper'
import { FacebookIcon } from '../../assets/icons'
import { buildShareButtonComponent } from './base'

export const facebookShareAction = ({shareUrl, utmParams}) =>
  openPopup(`https://www.facebook.com/sharer/sharer.php?u=${encodedShareURL(shareUrl, utmParams)}`)

export const FacebookButton = buildShareButtonComponent({
  action:    facebookShareAction,
  ariaLabel: 'Facebook',
  className: 'share-button--facebook',
  icon:      FacebookIcon,
})
