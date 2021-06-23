import { EmailIcon } from '../../assets/icons'
import { encodedShareURL } from '../../helpers/sharing_helper'
import { BaseShareActionArgs, buildShareButtonComponent } from './base'

export const emailShareAction = ({
  shareUrl,
  subject = null,
  teaser = '',
  utmParams,
}: BaseShareActionArgs & { subject?: string | null }) => {
  const encodedSubject = encodeURIComponent(subject || teaser)
  const encodedBody = encodedShareURL(`${teaser} ${shareUrl}`, utmParams)
  return window.open(`mailto:?subject=${encodedSubject}&body=${encodedBody}`)
}

export const EmailButton = buildShareButtonComponent({
  action: emailShareAction,
  ariaLabel: 'Email',
  className: 'share-button--email',
  icon: EmailIcon,
})
