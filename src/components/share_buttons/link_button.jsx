import { LinkIcon } from '../../assets/icons'
import { buildShareButtonComponent } from './base'
import { toQuery, copyToClipboard } from '../../helpers/sharing_helper'

export const linkAction = ({ shareUrl, utmParams }) => {
  copyToClipboard(`${shareUrl}${toQuery(utmParams || {})}`)
}

export const LinkButton = buildShareButtonComponent({
  action: linkAction,
  ariaLabel: 'ShareLink',
  color: '#4E414B',
  icon: LinkIcon,
})
