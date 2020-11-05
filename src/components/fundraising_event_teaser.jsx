import React from 'react'
import PropTypes from 'prop-types'

export const FundraisingEventTeaser = (props) => {
  const fundraisingEvent = props.fundraisingEvent
  const locale = props.locale || document.documentElement.lang || 'de'
  const href = props.href || fundraisingEvent.links.find(link => link.rel === 'platform')?.href
  const fundraisingEventImageUrl = fundraisingEvent.profile_picture.links.find(link => link.rel === 'fill_410x214')?.href
  const contactImageUrl = fundraisingEvent.contact.picture.links.find(link => link.rel === 'fill_100x100')?.href
  const handleClick = (event) => { props.onClick && props.onClick(event, fundraisingEvent) }

  return <a
    title={fundraisingEvent.title}
    onClick={handleClick}
    className='teaser'
    href={href}
    target={props.openInTab ? '_blank' : '_parent'}
  >
    {props.children /* mount point, e.g. for injecting VisibilitySensor */}

    <div className='teaser--profile-picture' style={{backgroundImage: `url(${fundraisingEventImageUrl})`}} alt={fundraisingEvent.title} />

    <h2 className='teaser--title' dangerouslySetInnerHTML={{__html: fundraisingEvent.title}} />

    <div className='teaser--divider'>
      <div className='teaser--factlist'>
        <div className='strong'>{fundraisingEvent.contact.name}</div>
        <div className='teaser--badge'>{fundraisingEvent.category || 'Kategorie XY'}</div>
        <div><span className='strong'>{fundraisingEvent.donor_count}</span> {locale === 'de' ? 'Spenden' : 'donations'}</div>
      </div>
      <img style={{ borderRadius: '50%'}} src={contactImageUrl} alt={fundraisingEvent.contact.name} className='teaser--carrier-logo' />
    </div>
  </a>
}

FundraisingEventTeaser.propTypes = {
  font:             PropTypes.string,
  href:             PropTypes.string,
  onClick:          PropTypes.func,
  fundraisingEvent: PropTypes.object.isRequired,
}
