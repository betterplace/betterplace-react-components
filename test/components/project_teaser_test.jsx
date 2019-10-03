import { ProjectTeaser } from '../../src/components/project_teaser'

const project = {
  id: 1,
  title: 'Skateistan Afghanistan',
  carrier: {
    name: 'Skateistan',
    picture: {
      links: []
    }
  },
  description: 'this is amazing',
  donations_count: 1337,
  open_amount_in_cents: 4200,
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
    // languageGetter.mockReturnValue('en')
    const element = shallow(<ProjectTeaser project={project} locale='en' />)
    expect(element).toMatchSnapshot()
  })

  it('does not render the description by default', () => {
    const element = shallow(<ProjectTeaser project={project} locale='en' />)
    expect(element).toMatchSnapshot()
  })

  it('does render the description if showDescription is true', () => {
    const element = shallow(<ProjectTeaser project={project} showDescription={true} locale='en' />)
    expect(element).toMatchSnapshot()
  })

  it('uses a custom href if given', () => {
    const element = shallow(<ProjectTeaser project={project} href='coupons.org/p123' locale='en' />)
    expect(element).toMatchSnapshot()
  })

  it('is possible to force the locale', () => {
    const element = shallow(<ProjectTeaser project={project} href='coupons.org/p123' locale='en' />)
    expect(element).toMatchSnapshot()
  })
})
