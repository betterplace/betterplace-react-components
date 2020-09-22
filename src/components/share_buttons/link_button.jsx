import { LinkIcon } from '../../assets/icons'
import { buildShareButtonComponent } from './base'
import { toQuery, copyToClipboard } from '../../helpers/sharing_helper'

export const linkAction = ({ shareUrl, utmParams }) => {
  copyToClipboard(`${shareUrl}${toQuery(utmParams || {})}`)
}

export const LinkButton = buildShareButtonComponent({
  action: linkAction,
  ariaLabel: 'ShareLink',
  buttonLabel: 'Link',
  className: 'share-button--share-link',
  icon: LinkIcon,
})
