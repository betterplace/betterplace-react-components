import { TelegramButton } from '../../../src'

const shareUrl = 'https://foo.bar'
const shape = 'round'

describe('TelegramButton', () => {
  it('renders a round button', () => {
    const element = shallow(<TelegramButton shareUrl={ shareUrl } shape={shape} />)
    expect(element).toMatchSnapshot()
  })

  it('does render if boxShadow is true', () => {
    const element = shallow(<TelegramButton shareUrl={ shareUrl } shape={shape} boxShadow/>)
    expect(element).toMatchSnapshot()
  })

  it('does render if utmParams are provided', () => {
    const element = shallow(<TelegramButton shareUrl={shareUrl} shape={shape} utmParams={{ utm_campaign: 'user_share', utm_medium: 'foo', utm_source: 'bar' }}/>)
    expect(element).toMatchSnapshot()
  })

  it('does render if teaser are provided', () => {
    const element = shallow(<TelegramButton shareUrl={shareUrl} shape={shape} teaser='Hello there'/>)
    expect(element).toMatchSnapshot()
  })

  it('adds a beforeClick function for the click handler', () => {
    const element = shallow(<TelegramButton shareUrl={ shareUrl } shape={shape} beforeOnClick={() => 'hey there'}/>)
    expect(element).toMatchSnapshot()
  })
})
