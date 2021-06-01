import { WhatsappIcon } from '../../assets/icons';
import { encodedShareURL, isMobileOrTablet } from '../../helpers/sharing_helper';
import { BaseShareActionArgs, buildShareButtonComponent } from './base';

export const whatsappShareAction = ({ shareUrl, teaser, utmParams }: BaseShareActionArgs) =>
  window.open(
    `https://${isMobileOrTablet() ? 'api' : 'web'}.whatsapp.com/send?text=${encodedShareURL(
      `${teaser ? teaser + ' ' : ''}${shareUrl}`,
      utmParams
    )}`
  )

export const WhatsappButton = buildShareButtonComponent({
  action: whatsappShareAction,
  ariaLabel: 'WhatsApp',
  className: 'share-button--whatsapp',
  icon: WhatsappIcon,
})
