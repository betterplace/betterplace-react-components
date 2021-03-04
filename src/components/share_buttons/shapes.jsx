import React from 'react'

const ButtonFull = ({icon, content, className, boxShadow, buttonClassName, ...props}) => {
  const Icon = icon

  return <a {...props} className={`share-button--full ${boxShadow ? 'share-button--box-shadowed' : ''} ${buttonClassName} ${className}`}>
    <div className='share-button--full-icon-wrapper'>
      <Icon className='share-button--icon' />
    </div>
    <span className='share-button--text'>{content}</span>
  </a>
}

const ButtonMinimal = ({icon, content, className, boxShadow, buttonClassName, ...props}) => {
  const Icon = icon

  return <a {...props} className={`share-button--minimal ${buttonClassName} ${className}`}>
    <Icon className='share-button--icon' />
    <span className='share-button--text'>{content}</span>
  </a>
}

const ButtonRound = ({icon, content, className, boxShadow, buttonClassName, ...props}) => {
  const Icon = icon

  return <a {...props} className={`share-button--round ${boxShadow ? 'share-button--box-shadowed' : ''} ${buttonClassName} ${className}`}>
    <Icon />
  </a>
}

const ButtonSquare = ({icon, content, className, boxShadow, buttonClassName, ...props}) => {
  const Icon = icon

  return <a {...props} className={`share-button--square ${buttonClassName} ${className}`}>
    <Icon />
  </a>
}

const ButtonRoundWithLabel = ({icon, content, className, boxShadow, buttonClassName, ...props}) => {
  const Icon = icon

  return <div className={`share-button--round-with-label ${className}`}>
    <a {...props} className={`share-button--round ${boxShadow ? 'share-button--box-shadowed' : ''} ${buttonClassName}`}>
      <Icon />
    </a>
    {content}
  </div>
}

export const shapes = {
  'full':              ButtonFull,
  'minimal':           ButtonMinimal,
  'round':             ButtonRound,
  'square':            ButtonSquare,
  'roundWithLabel':    ButtonRoundWithLabel,
}
