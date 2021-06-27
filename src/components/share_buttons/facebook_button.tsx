import { FacebookIcon } from '../../assets/icons'
import { encodedShareURL, openPopup } from '../../helpers/sharing_helper'
import { BaseShareActionArgs, buildShareButtonComponent } from './base'

export const facebookShareAction = ({ shareUrl, utmParams }: BaseShareActionArgs) =>
  openPopup(`https://www.facebook.com/sharer/sharer.php?u=${encodedShareURL(shareUrl, utmParams)}`)

export const FacebookButton = buildShareButtonComponent({
  action: facebookShareAction,
  ariaLabel: 'Facebook',
  className: 'share-button--facebook',
  icon: FacebookIcon,
})

export type FacebookButtonProps = Parameters<typeof FacebookButton>['0']
