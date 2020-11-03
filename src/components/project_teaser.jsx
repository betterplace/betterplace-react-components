import React from 'react'
import PropTypes from 'prop-types'
import { formatAmount } from '../helpers/format_amount'

export const ProjectTeaser = (props) => {
  const project = props.project
  const locale = props.locale || document.documentElement.lang || 'de'
  const openAmount = formatAmount({cents: project.open_amount_in_cents, locale: locale})
  const donationsCount = new Intl.NumberFormat(locale).format(project.donations_count)
  const openAmountCaption = locale === 'de' ? 'fehlen noch' : 'still needed'
  const donationsCountCaption = locale === 'de' ? 'Spenden' : 'donations'
  const href = props.href || props.project.links.find(link => link.rel === 'platform')?.href
  const projectImageUrl = props.project.profile_picture.links.find(link => link.rel === 'fill_410x214')?.href
  const orgaImageUrl = props.project.carrier.picture.links.find(link => link.rel === 'fill_100x100')?.href
  const handleClick = (event) => { props.onClick && props.onClick(event, project) }

  return <a
    title={project.title}
    onClick={handleClick}
    className={`project-teaser ${props.className ? props.className : ''} ${props.showDescription ? 'project-teaser--with-description' : ''} ${props.bottomContent ? 'project-teaser--with-bottom-content' : ''}`}
    href={href}
    target={props.openInTab ? '_blank' : '_parent'}
  >
    {props.children /* mount point, e.g. for injecting VisibilitySensor */}

    <div className='project-teaser--profile-picture' style={{backgroundImage: `url(${projectImageUrl})`}} alt={project.title} />

    <h2 className='project-teaser--title' dangerouslySetInnerHTML={{__html: project.title}} />

    {props.showDescription && <div className='project-teaser--description' dangerouslySetInnerHTML={{__html: project.description}} />}

    <div className='project-teaser--divider'>
      <div className='project-teaser--factlist'>
        <div>{project.city && <span>{project.city}, </span>}{project.country}</div>
        <div>{props.showCarrierName ? <span>{props.project.carrier.name}</span> : <><span>{donationsCount}</span> {donationsCountCaption}</>}</div>
        <div><span>{openAmount}</span> {openAmountCaption}</div>
      </div>
      <img src={orgaImageUrl} alt={project.carrier.name} className='project-teaser--carrier-logo' />
    </div>

    <div className='project-teaser--progress'>
      <div className='project-teaser--progress-bar' style={{width: `${project.progress_percentage}%`}}></div>
    </div>

    {props.bottomContent}
  </a>
}

ProjectTeaser.propTypes = {
  className:        PropTypes.string,
  font:             PropTypes.string,
  textColor:        PropTypes.string,
  href:             PropTypes.string,
  onClick:          PropTypes.func,
  progressbarColor: PropTypes.string,
  project:          PropTypes.object.isRequired,
  showDescription:  PropTypes.bool,
  extraHeight:      PropTypes.number,
  showCarrierName:  PropTypes.bool,
  bottomContent:    PropTypes.element
}
