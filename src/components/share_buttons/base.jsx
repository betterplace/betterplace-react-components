import React from 'react'
import PropTypes from 'prop-types'
import { shapes } from './shapes'
import { changeBrightness } from '../../helpers/color_helper'

export const buildShareButtonComponent = ({action, ariaLabel, buttonLabel, className, color, icon}) => {
  const ShareButton = (props) => {
    const Shape = shapes[props.shape]

    const handleClick = (event) => {
      event.preventDefault()
      props.beforeOnClick && props.beforeOnClick(event)
      action(props)
    }

    return(
      <Shape
        aria-label={ariaLabel}
        boxShadow={props.boxShadow}
        className={props.className || ''}
        buttonClassName={className}
        href='#'
        onClick={handleClick}
        role='button'
        title={props.title || ''}
        label={buttonLabel || ariaLabel}
        icon={icon}
        content={props.content}
      />
    )
  }

  ShareButton.propTypes = Object.assign({}, shareButtonPropTypes)

  return ShareButton
}

const shareButtonPropTypes = {
  className:           PropTypes.string,
  beforeOnClick:       PropTypes.func,
  boxShadow:           PropTypes.bool,
  withLabel:           PropTypes.bool,
  content:             (props, key, klass) => {
    // ignore this prop for button shapes that don't use it
    if (props.shape === 'square' || props.shape === 'round') return

    // require it for other shapes
    if (typeof props[key] !== 'string' || props[key] === '') return new Error(
      `prop ${key} must be non-empty string for ${klass} of shape ${props.shape}`
    )
  },
  shape:               PropTypes.oneOf(['full', 'minimal', 'round', 'square', 'roundWithLabel']).isRequired,
  shareUrl:            PropTypes.string.isRequired,
  teaser:              PropTypes.string,
  title:               PropTypes.string,
  utmParams:           PropTypes.object,
  color:               PropTypes.string
}
