import { LinkIcon } from '../../assets/icons'
import { copyToClipboard, addParamsToUrl } from '../../helpers/sharing_helper'
import { BaseShareActionArgs, buildShareButtonComponent } from './base'

export const linkAction = ({ shareUrl, utmParams }: BaseShareActionArgs) => {
  copyToClipboard(addParamsToUrl(shareUrl, utmParams || {}))
}

export const LinkButton = buildShareButtonComponent({
  action: linkAction,
  ariaLabel: 'ShareLink',
  buttonLabel: 'Link',
  className: 'share-button--share-link',
  icon: LinkIcon,
})

export type LinkButtonProps = Parameters<typeof LinkButton>['0']
