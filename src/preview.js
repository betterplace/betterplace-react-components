import React from 'react'
import { render } from 'react-dom'
import { ProjectTeaser } from './components/project_teaser'

const teaserNode = document.getElementById('brc-preview-teaser')

teaserNode &&
fetch('https://www.bp42.com/api_v4/projects/1114.json')
  .then(response => response.json())
  .then(project =>
    render(
      <ProjectTeaser
        project={project}
        showDescription={true}
        progressbarColor='#9ECB0A'
        textColor='#000000'
      />,
      teaserNode
    )
  )
