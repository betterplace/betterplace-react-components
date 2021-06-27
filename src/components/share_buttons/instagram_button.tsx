import { InstagramIcon } from '../../assets/icons'
import { copyToClipboard } from '../../helpers/sharing_helper'
import { BaseShareActionArgs, buildShareButtonComponent } from './base'

export const instagramAction = ({ shareUrl }: BaseShareActionArgs) => {
  copyToClipboard(shareUrl)
}

export const InstagramButton = buildShareButtonComponent({
  action: instagramAction,
  ariaLabel: 'Instagram',
  className: 'share-button--instagram',
  icon: InstagramIcon,
})

export type InstagramButtonProps = Parameters<typeof InstagramButton>['0']
