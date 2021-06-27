import { FacebookMessengerIcon } from '../../assets/icons'
import { encodedShareURL, isMobileOrTablet, openPopup } from '../../helpers/sharing_helper'
import { BaseShareActionArgs, buildShareButtonComponent } from './base'

export const facebookMessengerShareAction = ({
  facebookAppId,
  shareUrl,
  utmParams,
}: BaseShareActionArgs & { facebookAppId: string }) =>
  isMobileOrTablet()
    ? window.open(`fb-messenger://share?link=${encodedShareURL(shareUrl, utmParams)}&app_id=${facebookAppId}`)
    : openPopup(
        `http://www.facebook.com/dialog/send?app_id=${facebookAppId}&link=${encodedShareURL(
          shareUrl,
          utmParams
        )}&redirect_uri=${encodeURIComponent(shareUrl)}`
      )

export const FacebookMessengerButton = buildShareButtonComponent({
  action: facebookMessengerShareAction,
  ariaLabel: 'Facebook Messenger',
  buttonLabel: 'Messenger',
  className: 'share-button--facebook-messenger',
  icon: FacebookMessengerIcon,
})

export type FacebookMessengerButtonProps = Parameters<typeof FacebookMessengerButton>['0']
