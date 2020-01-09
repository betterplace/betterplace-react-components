import React from 'react'
import { render } from 'react-dom'
import {
  EmailButton,
  FacebookButton,
  FacebookMessengerButton,
  ProjectTeaser,
  TelegramButton,
  TwitterButton,
  WhatsappButton,
  LinkButton,
  InstagramButton
} from '../src'

const root = document.getElementById('root')

var teaserNode = document.createElement('div');
root.appendChild(teaserNode)

fetch('https://www.bp42.com/api_v4/projects/1114.json')
  .then(response => response.json())
  .then(project =>
    render(
      <ProjectTeaser
        project={project}
        showDescription={true}
        progressbarBackgroundColor='blue'
        textColor='#000000'
      />,
      teaserNode
    )
  )

// render all buttons in various permutations
for (const [shape, boxShadow] of [
  ['full', false],
  ['full', true],
  ['minimal'],
  ['round', false],
  ['round', true],
  ['square'],
]) {
  const divider = document.createElement('hr');
  root.appendChild(divider)

  for (const Button of [EmailButton, FacebookButton, FacebookMessengerButton, TelegramButton, TwitterButton, WhatsappButton, LinkButton, InstagramButton]) {
    const buttonNode = document.createElement('div')
    buttonNode.style.padding = '10px'
    buttonNode.style.display = 'inline-block'
    root.appendChild(buttonNode)

    render(
      <Button
        boxShadow={!!boxShadow}
        content='Foo'
        shape={'' + shape}
        shareUrl='https://www.bp42.com'
        teaser='some teaser ...'
        title='some title'
        {...(Button === FacebookMessengerButton ? { facebookAppId: 'foo' } : {})}
      />,
      buttonNode
    )
  }
}
