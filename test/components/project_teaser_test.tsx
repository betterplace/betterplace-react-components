import { shallow } from 'enzyme'
import React from 'react'

import { Project, ProjectTeaser } from '../../src/components/project_teaser'

const project: Project = {
  id: 0,
  created_at: 'string',
  updated_at: 'string',
  latitude: 0,
  longitude: 0,
  street: 'Street',
  zip: 'Zip-Code',
  city: 'City',
  country: 'Country',
  content_updated_at: 'string',
  activated_at: 'string',
  title: 'Skateistan Afghanistan',
  description: 'this is amazing',
  summary: 'Summa summarum',
  tax_deductible: true,
  donations_prohibited: true,
  completed_at: 'string',
  closed_at: 'string',
  open_amount_in_cents: 4200,
  donated_amount_in_cents: 1337,
  positive_opinions_count: 10,
  negative_opinions_count: 11,
  donations_count: 1337,
  newsletter_subscriptions_count: 0,
  comments_count: 0,
  donor_count: 0,
  progress_percentage: 33,
  incomplete_need_count: 0,
  completed_need_count: 0,
  blog_post_count: 0,
  contact: {
    id: 0,
    name: 'Contact',
    picture: {
      fallback: true,
      links: [
        {
          rel: 'fill_100x100',
          href: 'contact_pic_url',
        },
      ],
    },
    links: [
      {
        rel: 'platform',
        href: 'contact_pic_platform_url',
      },
    ],
  },
  carrier: {
    id: 0,
    name: 'Skateistan',
    city: 'string',
    country: 'string',
    picture: {
      fallback: true,
      links: [
        {
          rel: 'fill_100x100',
          href: 'carrier_pic_url',
        },
      ],
    },
    links: [
      {
        rel: 'self',
        href: 'carrier_self_url',
      },
    ],
  },
  profile_picture: {
    fallback: true,
    links: [
      {
        rel: 'fill_960x500',
        href: 'profile_pic_url',
      },
    ],
  },
  matching_events: [],
  around_distance: 42,
  links: [
    {
      rel: 'platform',
      href: 'bp.org/p123',
    },
  ],
}

beforeEach(() => (document.documentElement.lang = 'de'))

describe('ProjectTeaser', () => {
  it('renders', () => {
    const element = shallow(<ProjectTeaser project={project} />)
    expect(element).toMatchSnapshot()
  })

  it('does not render the description by default', () => {
    const element = shallow(<ProjectTeaser project={project} />)
    expect(element).toMatchSnapshot()
  })

  it('does render the description if showDescription is true', () => {
    const element = shallow(<ProjectTeaser project={project} showDescription={true} />)
    expect(element).toMatchSnapshot()
  })

  it('uses a custom href if given', () => {
    const element = shallow(<ProjectTeaser project={project} href="coupons.org/p123" />)
    expect(element).toMatchSnapshot()
  })

  it('is possible to force the locale', () => {
    const element = shallow(<ProjectTeaser locale="de" project={project} href="coupons.org/p123" />)
    expect(element).toMatchSnapshot()
  })
})
