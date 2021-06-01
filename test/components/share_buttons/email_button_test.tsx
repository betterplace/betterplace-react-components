import { shallow } from 'enzyme';
import React from 'react';

/* eslint-disable react/react-in-jsx-scope */
import { EmailButton } from '../../../src';

const shareUrl = 'https://foo.bar'
const shape = 'round'

describe('EmailButton', () => {
  it('renders a round button', () => {
    const element = shallow(<EmailButton shareUrl={shareUrl} shape={shape} />)
    expect(element).toMatchSnapshot()
  })

  it('does render if boxShadow is true', () => {
    const element = shallow(<EmailButton shareUrl={shareUrl} shape={shape} boxShadow />)
    expect(element).toMatchSnapshot()
  })

  it('does render if utmParams are provided', () => {
    const element = shallow(
      <EmailButton
        shareUrl={shareUrl}
        shape={shape}
        utmParams={{ utm_campaign: 'user_share', utm_medium: 'foo', utm_source: 'bar' }}
      />
    )
    expect(element).toMatchSnapshot()
  })

  it('adds a beforeClick function for the click handler', () => {
    const element = shallow(<EmailButton shareUrl={shareUrl} shape={shape} beforeOnClick={() => 'hey there'} />)
    expect(element).toMatchSnapshot()
  })
})
