import { components } from '../apiV4'
import React from 'react'

import { formatAmount } from '../helpers/format_amount'

export type FundraisingEvent = components['schemas']['FundraisingEventResult'] | components['schemas']['SearchResult']
export type Links = components['schemas']['FundraisingEventResult']['links'] &
  components['schemas']['SearchResult']['links']
export type FundraisingEventTeaserProps = {
  locale?: string
  href?: string
  font?: string
  openInTab?: boolean
  fundraisingEvent: FundraisingEvent
  onClick?: (event: React.MouseEvent, fundraisingEvent: FundraisingEvent) => void
}

const pluralizeDonation = (locale: string, count: number) => {
  if (count === 1) return locale === 'de' ? 'Spende' : 'donation'
  return locale === 'de' ? 'Spenden' : 'donations'
}

export const FundraisingEventTeaser: React.FC<FundraisingEventTeaserProps> = ({
  fundraisingEvent,
  locale = document.documentElement.lang || 'de',
  href: href_,
  onClick,
  openInTab,
  children,
}) => {
  const href = href_ || (fundraisingEvent.links as Links).find((link) => link.rel === 'platform')?.href
  const fundraisingEventImageUrl = fundraisingEvent.profile_picture?.links.find(
    (link) => link.rel === 'fill_410x214'
  )?.href
  const donationsAmount = formatAmount({ cents: fundraisingEvent.donated_amount_in_cents, locale: locale })
  const contactImageUrl = fundraisingEvent.contact?.picture?.links.find((link) => link.rel === 'fill_100x100')?.href
  const handleClick = (event: React.MouseEvent) => {
    onClick && onClick(event, fundraisingEvent)
  }

  const donationsTxt = pluralizeDonation(locale, fundraisingEvent.donations_count)

  return (
    <a
      title={fundraisingEvent.title}
      onClick={handleClick}
      className="donatable-teaser"
      href={href}
      target={openInTab ? '_blank' : '_parent'}
      rel="noreferrer"
    >
      {children /* mount point, e.g. for injecting VisibilitySensor */}

      <div
        className="donatable-teaser--profile-picture"
        style={{ backgroundImage: `url(${fundraisingEventImageUrl})` }}
        title={fundraisingEvent.title}
      />

      <h2 className="donatable-teaser--title" dangerouslySetInnerHTML={{ __html: fundraisingEvent.title }} />

      <div className="donatable-teaser--divider">
        <div className="donatable-teaser--factlist">
          <div>
            <span dangerouslySetInnerHTML={{ __html: fundraisingEvent.contact?.name ?? '' }} />
          </div>
          <div>
            <span>{fundraisingEvent.donations_count}</span> {donationsTxt}
          </div>
          <div>
            <span>{donationsAmount}</span> {locale === 'de' ? 'gesammelt' : 'collected'}
          </div>
        </div>
        <img
          style={{ borderRadius: '50%', border: '1px solid #cccccc' }}
          src={contactImageUrl}
          alt={fundraisingEvent.contact?.name ?? ''}
          className="donatable-teaser--carrier-logo"
        />
      </div>
    </a>
  )
}
