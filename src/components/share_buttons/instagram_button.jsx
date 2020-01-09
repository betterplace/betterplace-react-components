import { InstagramIcon } from '../../assets/icons'
import { buildShareButtonComponent } from './base'
import { toQuery, copyToClipboard } from '../../helpers/sharing_helper'

export const instagramAction = ({ shareUrl, utmParams }) => {
  copyToClipboard(`${shareUrl}${toQuery(utmParams || {})}`)
}

export const InstagramButton = buildShareButtonComponent({
  action:    instagramAction,
  ariaLabel: 'Instagram',
  color:     '#E1306C',
  icon:      InstagramIcon,
})
