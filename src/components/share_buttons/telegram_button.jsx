import { encodedShareURL } from '../../helpers/sharing_helper'
import { TelegramIcon } from '../../assets/icons'
import { buildShareButtonComponent } from './base'

export const telegramShareAction = ({shareUrl, teaser, utmParams}) =>
  window.open(`https://telegram.me/share/url?url=${encodedShareURL(shareUrl, utmParams)}&text=${encodeURIComponent(teaser)}`)

export const TelegramButton = buildShareButtonComponent({
  action:    telegramShareAction,
  ariaLabel: 'Telegram',
  color:     '#0087CB',
  icon:      TelegramIcon,
})
