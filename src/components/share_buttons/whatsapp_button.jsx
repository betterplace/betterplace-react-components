import { encodedShareURL } from '../../helpers/sharing_helper'
import { WhatsappIcon } from '../../assets/icons'
import { buildShareButtonComponent } from './base'

export const whatsappShareAction = ({shareUrl, teaser, utmParams}) =>
  window.open(`https://api.whatsapp.com/send?text=${encodedShareURL(`${teaser ? teaser + ' ' : ''}${shareUrl}`, utmParams)}`)

export const WhatsappButton = buildShareButtonComponent({
  action: whatsappShareAction,
  color:  '#01E677',
  icon:   WhatsappIcon,
})
