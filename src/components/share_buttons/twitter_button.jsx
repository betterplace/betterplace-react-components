import { encodedShareURL, openPopup } from '../../helpers/sharing_helper'
import { TwitterIcon } from '../../assets/icons'
import { buildShareButtonComponent } from './base'

export const twitterShareAction = ({shareUrl, utmParams}) =>
  openPopup(`https://twitter.com/intent/tweet?url=${encodedShareURL(shareUrl, utmParams)}&via=betterplace_org`)

export const TwitterButton = buildShareButtonComponent({
  action:    twitterShareAction,
  ariaLabel: 'Twitter',
  color:     '#48AAE5',
  icon:      TwitterIcon,
})
