import React from 'react'

import { ButtonProps, shapes } from './shapes'
export type RequirePicked<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

export type ButtonBuilderOptions<T extends BaseShareActionArgs> = {
  ariaLabel?: string
  buttonLabel?: string
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.FC<any>
  action: (args: T) => void
}

export type ButtonShapes = keyof typeof shapes

export type ButtonWithContentProps = { shape: Exclude<ButtonShapes, 'square' | 'round'> } & RequirePicked<
  ButtonProps,
  'content'
>
export type ButtonWithoutContentProps = { shape: Extract<ButtonShapes, 'square' | 'round'> } & ButtonProps
export type ShareButtonProps = {
  beforeOnClick?: (event: React.MouseEvent) => void
} & (ButtonWithoutContentProps | ButtonWithContentProps)
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return ShareButton
}
