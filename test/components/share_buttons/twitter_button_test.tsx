import { shallow } from 'enzyme'
import React from 'react'

import { TwitterButton } from '../../../src'

const shareUrl = 'https://foo.bar'
const shape = 'round'

describe('TwitterButton', () => {
  it('renders a round button', () => {
    const element = shallow(<TwitterButton shareUrl={shareUrl} shape={shape} />)
    expect(element).toMatchSnapshot()
  })

  it('does render if boxShadow is true', () => {
    const element = shallow(<TwitterButton shareUrl={shareUrl} shape={shape} boxShadow />)
    expect(element).toMatchSnapshot()
  })

  it('does render if utmParams are provided', () => {
    const element = shallow(
      <TwitterButton
        shareUrl={shareUrl}
        shape={shape}
        utmParams={{ utm_campaign: 'user_share', utm_medium: 'foo', utm_source: 'bar' }}
      />
    )
    expect(element).toMatchSnapshot()
  })

  it('adds a beforeClick function for the click handler', () => {
    const element = shallow(<TwitterButton shareUrl={shareUrl} shape={shape} beforeOnClick={() => 'hey there'} />)
    expect(element).toMatchSnapshot()
  })
})
