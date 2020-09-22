import { InstagramIcon } from '../../assets/icons'
import { buildShareButtonComponent } from './base'
import { copyToClipboard } from '../../helpers/sharing_helper'

export const instagramAction = ({ shareUrl }) => {
  copyToClipboard(shareUrl)
}

export const InstagramButton = buildShareButtonComponent({
  action:    instagramAction,
  ariaLabel: 'Instagram',
  className: 'share-button--instagram',
  icon:      InstagramIcon,
})
