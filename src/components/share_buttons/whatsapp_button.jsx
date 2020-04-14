import { encodedShareURL, isMobileOrTablet } from '../../helpers/sharing_helper'
import { WhatsappIcon } from '../../assets/icons'
import { buildShareButtonComponent } from './base'

export const whatsappShareAction = ({shareUrl, teaser, utmParams}) =>
  window.open(`https://${isMobileOrTablet() ? 'api' : 'web'}.whatsapp.com/send?text=${encodedShareURL(`${teaser ? teaser + ' ' : ''}${shareUrl}`, utmParams)}`)

export const WhatsappButton = buildShareButtonComponent({
  action:    whatsappShareAction,
  ariaLabel: 'WhatsApp',
  color:     '#01E677',
  icon:      WhatsappIcon,
})
