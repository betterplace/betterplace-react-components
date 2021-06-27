import React from 'react'

export type ButtonProps = {
  icon: React.FC<{ className?: string }>
  content?: React.ReactNode
  boxShadow?: boolean
  buttonClassName?: string
  href?: string
  label?: string
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
const ButtonFull: React.FC<ButtonProps> = ({
  icon,
  content,
  className = '',
  boxShadow,
  buttonClassName = '',
  ...props
}) => {
  const Icon = icon

  return (
    <a
      {...props}
      className={`share-button--full ${boxShadow ? 'share-button--box-shadowed' : ''} ${buttonClassName} ${className}`}
    >
      <div className="share-button--full-icon-wrapper">
        <Icon className="share-button--icon" />
      </div>
      <span className="share-button--text">{content}</span>
    </a>
  )
}

const ButtonMinimal: React.FC<ButtonProps> = ({ icon, content, className = '', buttonClassName = '', ...props }) => {
  const Icon = icon

  return (
    <a {...props} className={`share-button--minimal ${buttonClassName} ${className}`}>
      <Icon className="share-button--icon" />
      <span className="share-button--text">{content}</span>
    </a>
  )
}

const ButtonRound: React.FC<ButtonProps> = ({ icon, className = '', boxShadow, buttonClassName = '', ...props }) => {
  const Icon = icon

  return (
    <a
      {...props}
      className={`share-button--round ${boxShadow ? 'share-button--box-shadowed' : ''} ${buttonClassName} ${className}`}
    >
      <Icon />
    </a>
  )
}

const ButtonSquare: React.FC<ButtonProps> = ({ icon, className = '', buttonClassName = '', ...props }) => {
  const Icon = icon

  return (
    <a {...props} className={`share-button--square ${buttonClassName} ${className}`}>
      <Icon />
    </a>
  )
}

const ButtonRoundWithLabel: React.FC<ButtonProps> = ({
  icon,
  content,
  className = '',
  boxShadow,
  buttonClassName = '',
  ...props
}) => {
  const Icon = icon

  return (
    <div className={`share-button--round-with-label ${className}`}>
      <a
        {...props}
        className={`share-button--round ${boxShadow ? 'share-button--box-shadowed' : ''} ${buttonClassName}`}
      >
        <Icon />
      </a>
      {content}
    </div>
  )
}

export const shapes = {
  full: ButtonFull,
  minimal: ButtonMinimal,
  round: ButtonRound,
  square: ButtonSquare,
  roundWithLabel: ButtonRoundWithLabel,
} as const
