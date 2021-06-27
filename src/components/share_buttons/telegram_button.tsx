import { TelegramIcon } from '../../assets/icons'
import { encodedShareURL } from '../../helpers/sharing_helper'
import { BaseShareActionArgs, buildShareButtonComponent } from './base'

export const telegramShareAction = ({ shareUrl, teaser = '', utmParams }: BaseShareActionArgs) =>
  window.open(
    `https://telegram.me/share/url?url=${encodedShareURL(shareUrl, utmParams)}&text=${encodeURIComponent(teaser)}`
  )

export const TelegramButton = buildShareButtonComponent({
  action: telegramShareAction,
  ariaLabel: 'Telegram',
  className: 'share-button--telegram',
  icon: TelegramIcon,
})

export type TelegramButtonProps = Parameters<typeof TelegramButton>['0']
