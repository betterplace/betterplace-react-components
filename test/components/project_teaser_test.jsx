import { ProjectTeaser } from '../../src'

const project = {
  id: 1,
  carrier: {
    picture: {
      links: []
    }
  },
  description: 'this is amazing',
  profile_picture: {
    links: []
  },
  links: [
    {
      "rel": "platform",
      "href": "bp.org/p123"
    }
  ]
}

describe('ProjectTeaser', () => {
  it('renders', () => {
    const element = shallow(<ProjectTeaser project={ project } />)
    expect(element).toMatchSnapshot()
  })

  it('does not render the description by default', () => {
    const element = shallow(<ProjectTeaser project={ project } />)
    expect(element).toMatchSnapshot()
  })

  it('does render the description if showDescription is true', () => {
    const element = shallow(<ProjectTeaser project={ project } showDescription={ true } />)
    expect(element).toMatchSnapshot()
  })

  it('uses a custom href if given', () => {
    const element = shallow(<ProjectTeaser project={ project } href='coupons.org/p123' />)
    expect(element).toMatchSnapshot()
  })
})
