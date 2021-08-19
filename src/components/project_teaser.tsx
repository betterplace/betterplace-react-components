import { components } from '../apiV4'
import React from 'react'

import { formatAmount } from '../helpers/format_amount'
export type Project =
  | components['schemas']['ProjectResult']
  | (components['schemas']['SearchResult'] &
      {
        [K in Exclude<
          keyof components['schemas']['ProjectResult'],
          keyof components['schemas']['SearchResult']
        >]?: undefined
      })
export type ProjectTeaserProps = {
  locale?: string
  project: Project
  onClick?: (event: React.MouseEvent, project: Project) => void
  showDescription?: boolean
  bottomContent?: React.ReactNode
  href?: string
  showCarrierName?: boolean
  openInTab?: boolean
  className?: string
  font?: string
  textColor?: string
  progressbarColor?: string
  progressbarBackgroundColor?: string
  extraHeight?: number
}
export const ProjectTeaser: React.FC<ProjectTeaserProps> = ({
  project,
  locale = document.documentElement.lang || 'de',
  href: href_,
  onClick,
  className,
  showDescription,
  openInTab,
  bottomContent,
  children,
  showCarrierName,
}) => {
  const openAmount = formatAmount({ cents: project.open_amount_in_cents, locale })
  const donationsCount = new Intl.NumberFormat(locale).format(project.donations_count)
  const openAmountCaption = locale === 'de' ? 'fehlen noch' : 'still needed'
  const donationsCountCaption = locale === 'de' ? 'Spenden' : 'donations'
  const href = href_ || project.links.find((link) => link.rel === 'platform')?.href
  const projectImageUrl = project.profile_picture?.links.find((link) => link.rel === 'fill_410x214')?.href
  const orgaImageUrl = project.carrier?.picture?.links.find((link) => link.rel === 'fill_100x100')?.href
  const handleClick = (event: React.MouseEvent) => {
    onClick && onClick(event, project)
  }

  return (
    <a
      title={project.title}
      onClick={handleClick}
      className={`donatable-teaser ${className ?? ''} ${showDescription ? 'donatable-teaser--with-description' : ''} ${
        bottomContent ? 'donatable-teaser--with-bottom-content' : ''
      }`}
      href={href}
      target={openInTab ? '_blank' : '_parent'}
      rel="noreferrer"
    >
      {children /* mount point, e.g. for injecting VisibilitySensor */}

      <div
        className="donatable-teaser--profile-picture"
        style={{ backgroundImage: `url(${projectImageUrl})` }}
        title={project.title}
      />

      <h2 className="donatable-teaser--title" dangerouslySetInnerHTML={{ __html: project.title }} />

      {showDescription && (
        <div
          className="donatable-teaser--description"
          dangerouslySetInnerHTML={{ __html: project.description ?? '' }}
        />
      )}

      <div className="donatable-teaser--divider">
        <div className="donatable-teaser--factlist">
          <div>
            {project.city && <span>{project.city}</span>}, {project.country}
          </div>
          <div>
            {showCarrierName ? (
              <span>{project.carrier?.name}</span>
            ) : (
              <>
                <span>{donationsCount}</span> {donationsCountCaption}
              </>
            )}
          </div>
          <div>
            <span>{openAmount}</span> {openAmountCaption}
          </div>
        </div>
        <img src={orgaImageUrl} alt={project.carrier?.name} className="donatable-teaser--carrier-logo" />
      </div>

      <div className="donatable-teaser--progress">
        <div className="donatable-teaser--progress-bar" style={{ width: `${project.progress_percentage}%` }}></div>
      </div>

      {bottomContent}
    </a>
  )
}
