import { TwitterIcon } from '../../assets/icons'
import { encodedShareURL, openPopup } from '../../helpers/sharing_helper'
import { BaseShareActionArgs, buildShareButtonComponent } from './base'

export const twitterShareAction = ({ shareUrl, utmParams }: BaseShareActionArgs) =>
  openPopup(`https://twitter.com/intent/tweet?url=${encodedShareURL(shareUrl, utmParams)}&via=betterplace_org`)

export const TwitterButton = buildShareButtonComponent({
  action: twitterShareAction,
  ariaLabel: 'Twitter',
  className: 'share-button--twitter',
  icon: TwitterIcon,
})
