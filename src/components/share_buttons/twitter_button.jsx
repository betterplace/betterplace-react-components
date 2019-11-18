import { encodedShareURL, openPopup } from '../../helpers/sharing_helper'
import { TwitterIcon } from '../../assets/icons'
import { buildShareButtonComponent } from './base'

export const twitterShareAction = ({shareUrl, utmParams}) =>
  openPopup(`https://twitter.com/share?via=betterplace_org&url=${encodedShareURL(shareUrl, utmParams)}`)

export const TwitterButton = buildShareButtonComponent({
  action: twitterShareAction,
  color:  '#48AAE5',
  icon:   TwitterIcon,
})
