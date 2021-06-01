/* eslint-disable @typescript-eslint/no-explicit-any */
import PropTypes from 'prop-types'
import React from 'react'

import { ButtonProps, shapes } from './shapes'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ButtonBuilderOptions<T extends BaseShareActionArgs> = {
  ariaLabel?: string
  buttonLabel?: string
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.FC<any>
  action: (args: T) => void
}

export type ShareButtonProps = {
  shape: keyof typeof shapes
  beforeOnClick?: (event: React.MouseEvent) => void
} & ButtonProps
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BaseShareActionArgs = { shareUrl: string; utmParams?: Record<string, any>; teaser?: string }
export const buildShareButtonComponent = <T extends BaseShareActionArgs>({
  action,
  ariaLabel,
  buttonLabel,
  className,
  icon,
}: ButtonBuilderOptions<T>) => {
  const ShareButton = (props: Omit<ShareButtonProps, Exclude<keyof ButtonBuilderOptions<T>, 'className'>> & T) => {
    const Shape = shapes[props.shape]

    const handleClick = (event: React.MouseEvent) => {
      event.preventDefault()
      props.beforeOnClick && props.beforeOnClick(event)
      action(props)
    }

    return (
      <Shape
        aria-label={ariaLabel}
        boxShadow={props.boxShadow}
        className={props.className || ''}
        buttonClassName={className}
        href="#"
        onClick={handleClick}
        role="button"
        title={props.title || ''}
        label={buttonLabel || ariaLabel}
        icon={icon}
        content={props.content}
      />
    )
  }

  ShareButton.propTypes = { ...shareButtonPropTypes } as any

  return ShareButton
}

const shareButtonPropTypes = {
  className: PropTypes.string,
  beforeOnClick: PropTypes.func,
  boxShadow: PropTypes.bool,
  withLabel: PropTypes.bool,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: (props: Record<string, any>, key: string, klass: string) => {
    // ignore this prop for button shapes that don't use it
    if (props.shape === 'square' || props.shape === 'round') return null

    // require it for other shapes
    if (typeof props[key] !== 'string' || props[key] === '')
      return new Error(`prop ${key} must be non-empty string for ${klass} of shape ${props.shape}`)
    return null
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  shape: PropTypes.oneOf(['full', 'minimal', 'round', 'square', 'roundWithLabel']).isRequired as any,
  shareUrl: PropTypes.string.isRequired,
  teaser: PropTypes.string,
  title: PropTypes.string,
  utmParams: PropTypes.object,
  color: PropTypes.string,
}
