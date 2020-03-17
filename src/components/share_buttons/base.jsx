import React from 'react'
import PropTypes from 'prop-types'
import { shapes } from './shapes'
import { changeBrightness } from '../../helpers/color_helper'

export const buildShareButtonComponent = ({action, ariaLabel, buttonLabel, color, icon}) => {
  const Icon        = icon
  const hoverColor  = changeBrightness(color, -20)
  const activeColor = changeBrightness(color, -40)
  const ShareButton = (props) => {
    const Shape = shapes[props.shape]

    const handleClick = (event) => {
      event.preventDefault()
      props.beforeOnClick && props.beforeOnClick(event)
      action(props)
    }

    return(
      <div className={`share-button ${props.additionalClass}`}>
        <Shape
          activeColor={activeColor}
          aria-label={ariaLabel}
          boxShadow={props.boxShadow}
          className={props.additionalClass}
          color={props.color || color}
          href='#'
          hoverColor={props.color || hoverColor}
          onClick={handleClick}
          role='button'
          title={props.title || ''}
        >
          {(props.shape === 'full') ? <div><Icon/></div> : <Icon/>}
          {(props.shape === 'minimal' || props.shape === 'full') && <span>{props.content}</span>}
        </Shape>
        {props.withLabel && <label>{buttonLabel ? buttonLabel : ariaLabel}</label>}
      </div>
    )
  }

  ShareButton.propTypes = Object.assign({}, shareButtonPropTypes)

  return ShareButton
}

const shareButtonPropTypes = {
  additionalClass:     PropTypes.string,
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
  shape:               PropTypes.oneOf(['full', 'minimal', 'round', 'square']).isRequired,
  shareUrl:            PropTypes.string.isRequired,
  teaser:              PropTypes.string,
  title:               PropTypes.string,
  utmParams:           PropTypes.object,
  color:               PropTypes.string
}
