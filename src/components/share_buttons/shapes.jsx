import React from 'react'

const ButtonFull = ({icon, content, className, boxShadow, ...props}) => {
  const Icon = icon

  return <a {...props} className={`share-button--full ${boxShadow ? 'share-button--box-shadowed' : ''} ${className}`}>
    <div className='share-button--full-icon-wrapper'>
      <Icon className='share-button--icon' />
    </div>
    <span className='share-button--text'>{content}</span>
  </a>
}

const ButtonMinimal = ({icon, content, className, boxShadow, ...props}) => {
  const Icon = icon

  return <a {...props} className={`share-button--minimal ${className}`}>
    <Icon className='share-button--icon' />
    <span className='share-button--text'>{content}</span>
  </a>
}

const ButtonRound = ({icon, content, className, boxShadow, ...props}) => {
  const Icon = icon
  return <a {...props} className={`share-button--round ${boxShadow ? 'share-button--box-shadowed' : ''} ${className}`}>
    <Icon />
  </a>
}

const ButtonSquare = ({icon, content, className, boxShadow, ...props}) => {
  const Icon = icon
  return <a {...props} className={`share-button--square ${className}`}>
    <Icon />
  </a>
}

const ButtonRoundWithLabel = ({icon, content, className, boxShadow, ...props}) => {
  const Icon = icon
  return <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
    <a {...props} className={`share-button--round ${boxShadow ? 'share-button--box-shadowed' : ''} ${className}`}>
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
