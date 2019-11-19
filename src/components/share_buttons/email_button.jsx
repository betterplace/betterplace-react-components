import PropTypes from 'prop-types'
import { encodedShareURL } from '../../helpers/sharing_helper'
import { EmailIcon } from '../../assets/icons'
import { buildShareButtonComponent } from './base'

export const emailShareAction = ({shareUrl, subject = null, teaser, utmParams}) => {
  const encodedSubject = encodeURIComponent(subject || teaser)
  const encodedBody = encodedShareURL(`${teaser} ${shareUrl}`, utmParams)
  return window.open(`mailto:?subject=${encodedSubject}&body=${encodedBody}`)
}

export const EmailButton = buildShareButtonComponent({
  action: emailShareAction,
  color:  '#BAC5CC',
  icon:   EmailIcon,
})

EmailButton.propTypes = Object.assign(EmailButton.propTypes, {
  subject: PropTypes.string,
})
