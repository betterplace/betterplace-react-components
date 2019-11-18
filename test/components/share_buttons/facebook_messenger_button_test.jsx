import { FacebookMessengerButton } from '../../../src'

const shareUrl = 'https://foo.bar'
const shape = 'round'
const facebookAppId = 'markzuckerberg'

describe('FacebookMessengerButton', () => {
  it('renders a round button', () => {
    const element = shallow(<FacebookMessengerButton shareUrl={shareUrl} shape={shape} facebookAppId={facebookAppId} />)
    expect(element).toMatchSnapshot()
  })

  it('does render if boxShadow is true', () => {
    const element = shallow(<FacebookMessengerButton shareUrl={shareUrl} shape={shape} facebookAppId={facebookAppId} boxShadow/>)
    expect(element).toMatchSnapshot()
  })

  it('does render if utmParams are provided', () => {
    const element = shallow(<FacebookMessengerButton shareUrl={shareUrl} shape={shape} facebookAppId={facebookAppId} utmParams={{ utm_campaign: 'user_share', utm_medium: 'foo', utm_source: 'bar' }}/>)
    expect(element).toMatchSnapshot()
  })

  it('does render if teaser are provided', () => {
    const element = shallow(<FacebookMessengerButton shareUrl={shareUrl} shape={shape} facebookAppId={facebookAppId} teaser='Hello there'/>)
    expect(element).toMatchSnapshot()
  })

  it('adds a beforeClick function for the click handler', () => {
    const element = shallow(<FacebookMessengerButton shareUrl={shareUrl} shape={shape} facebookAppId={facebookAppId} beforeOnClick={() => 'hey there'}/>)
    expect(element).toMatchSnapshot()
  })
})
