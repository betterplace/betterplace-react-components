import React from 'react'
import PropTypes from 'prop-types'
import { formatAmount } from '../helpers/format_amount'

export const FundraisingEventTeaser = (props) => {
  const fundraisingEvent = props.fundraisingEvent
  const locale = props.locale || document.documentElement.lang || 'de'
  const href = props.href || fundraisingEvent.links.find(link => link.rel === 'platform')?.href
  const fundraisingEventImageUrl = fundraisingEvent.profile_picture.links.find(link => link.rel === 'fill_410x214')?.href
  const donationsAmount = formatAmount({ cents: fundraisingEvent.donated_amount_in_cents, locale: locale })
  const contactImageUrl = fundraisingEvent.contact.picture.links.find(link => link.rel === 'fill_100x100')?.href
  const handleClick = (event) => { props.onClick && props.onClick(event, fundraisingEvent) }

  return <a
    title={fundraisingEvent.title}
    onClick={handleClick}
    className='donatable-teaser'
    href={href}
    target={props.openInTab ? '_blank' : '_parent'}
  >
    {props.children /* mount point, e.g. for injecting VisibilitySensor */}

    <div className='donatable-teaser--profile-picture' style={{backgroundImage: `url(${fundraisingEventImageUrl})`}} alt={fundraisingEvent.title} />

    <h2 className='donatable-teaser--title' dangerouslySetInnerHTML={{__html: fundraisingEvent.title}} />

    <div className='donatable-teaser--divider'>
      <div className='donatable-teaser--factlist'>
        <div><span dangerouslySetInnerHTML={{ __html: fundraisingEvent.contact.name }}/></div>
        <div><span>{fundraisingEvent.donations_count}</span> {fundraisingEvent.donations_count === 1 ? (locale === 'de' ? 'Spende' : 'donation') : (locale === 'de' ? 'Spenden' : 'donations')}</div>
        <div><span>{donationsAmount}</span> {locale === 'de' ? 'gesammelt' : 'collected'}</div>
      </div>
      <img style={{ borderRadius: '50%', border: '1px solid #cccccc'}} src={contactImageUrl} alt={fundraisingEvent.contact.name} className='donatable-teaser--carrier-logo' />
    </div>
  </a>
}

FundraisingEventTeaser.propTypes = {
  font:             PropTypes.string,
  href:             PropTypes.string,
  onClick:          PropTypes.func,
  fundraisingEvent: PropTypes.object.isRequired,
}
