import React from 'react'
import PropTypes from 'prop-types'
import { shapes } from './shapes'
import { changeBrightness } from '../../helpers/color_helper'

export const buildShareButtonComponent = ({action, ariaLabel, color, icon}) => {
  const Icon        = icon
  const hoverColor  = changeBrightness(color, -20)
  const activeColor = changeBrightness(color, -40)
  const ShareButton = (props) => {
    const Shape = shapes[props.shape]

    const handleClick = () => {
      props.beforeOnClick && props.beforeOnClick()
      action(props)
    }

    return(
      <Shape
        activeColor={activeColor}
        aria-label={ariaLabel}
        boxShadow={props.boxShadow}
        className={props.additionalClass}
        color={props.color || color}
        hoverColor={props.color || hoverColor}
        onClick={handleClick}
        role='button'
        title={props.title || ''}
      >
        {(props.shape === 'full') ? <div><Icon/></div> : <Icon/>}
        {(props.shape === 'minimal' || props.shape === 'full') && <span>{props.content}</span>}
      </Shape>
    )
  }

  ShareButton.propTypes = Object.assign({}, shareButtonPropTypes)

  return ShareButton
}

const shareButtonPropTypes = {
  additionalClass:     PropTypes.string,
  beforeOnClick:       PropTypes.func,
  boxShadow:           PropTypes.bool,
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
