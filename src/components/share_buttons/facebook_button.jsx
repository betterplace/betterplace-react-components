import { encodedShareURL, openPopup } from '../../helpers/sharing_helper'
import { FacebookIcon } from '../../assets/icons'
import { buildShareButtonComponent } from './base'

export const facebookShareAction = ({shareUrl, utmParams}) =>
  openPopup(`https://www.facebook.com/sharer/sharer.php?u=${encodedShareURL(shareUrl, utmParams)}`)

export const FacebookButton = buildShareButtonComponent({
  action:    facebookShareAction,
  ariaLabel: 'Facebook',
  color:     '#3F65A6',
  icon:      FacebookIcon,
})

