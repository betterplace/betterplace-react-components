import '../src/css/donatable_teaser.css'
import '../src/css/share_buttons.css'

import React from 'react'
import { render } from 'react-dom'

import {
  EmailButton,
  FacebookButton,
  FacebookMessengerButton,
  FundraisingEventTeaser,
  InstagramButton,
  LinkButton,
  ProjectTeaser,
  TelegramButton,
  TwitterButton,
  WhatsappButton,
} from '../src'
import { ShareButtonProps } from '../src/components/share_buttons/base'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById('root')!

const projectTeaserNode = document.createElement('div')
root.appendChild(projectTeaserNode)
const fundraisingEventTeaserNode = document.createElement('div')
root.appendChild(fundraisingEventTeaserNode)

fetch('https://api.betterplace.org/de/api_v4/projects/1114.json')
  .then((response) => response.json())
  .then((project) =>
    render(
      <ProjectTeaser project={project} showDescription={true} progressbarBackgroundColor="blue" textColor="#000000" />,
      projectTeaserNode
    )
  )

fetch('https://api.betterplace.org/de/api_v4/fundraising_events/30943.json')
  .then((response) => response.json())
  .then((fundraisingEvent) =>
    render(<FundraisingEventTeaser fundraisingEvent={fundraisingEvent} />, fundraisingEventTeaserNode)
  )

// render all buttons in various permutations
for (const [shape, boxShadow] of [
  ['full', false],
  ['full', true],
  ['minimal'],
  ['round', false],
  ['round', true],
  ['square'],
  ['roundWithLabel'],
] as Array<[ShareButtonProps['shape'], boolean?]>) {
  const divider = document.createElement('hr')
  root.appendChild(divider)

  for (const Button of [
    EmailButton,
    FacebookButton,
    FacebookMessengerButton,
    TelegramButton,
    TwitterButton,
    WhatsappButton,
    LinkButton,
    InstagramButton,
  ]) {
    const buttonNode = document.createElement('div')
    buttonNode.style.padding = '10px'
    buttonNode.style.display = 'inline-block'
    root.appendChild(buttonNode)

    render(
      <Button
        boxShadow={!!boxShadow}
        content="Foo"
        shape={shape}
        shareUrl="https://www.bp42.com"
        teaser="some teaser ..."
        title="some title"
        className="test-class-name"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(Button === FacebookMessengerButton ? { facebookAppId: 'foo' } : ({} as any))}
      />,
      buttonNode
    )
  }
}
