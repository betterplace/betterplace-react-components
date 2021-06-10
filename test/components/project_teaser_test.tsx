import { shallow } from 'enzyme'
import React from 'react'

import { Project, ProjectTeaser } from '../../src/components/project_teaser'

const project: Project = {
  id: 0,
  created_at: 'string',
  updated_at: 'string',
  latitude: 0,
  longitude: 0,
  street: 'string',
  zip: 'string',
  city: 'string',
  country: 'string',
  content_updated_at: 'string',
  activated_at: 'string',
  title: 'Skateistan Afghanistan',
  description: 'Skateistan',
  summary: 'string',
  tax_deductible: true,
  donations_prohibited: true,
  completed_at: 'string',
  closed_at: 'string',
  open_amount_in_cents: 0,
  donated_amount_in_cents: 1.337,
  positive_opinions_count: 0,
  negative_opinions_count: 0,
  donations_count: 0,
  newsletter_subscriptions_count: 0,
  comments_count: 0,
  donor_count: 0,
  progress_percentage: 0,
  incomplete_need_count: 0,
  completed_need_count: 0,
  blog_post_count: 0,
  contact: {
    id: 0,
    name: 'string',
    picture: {
      fallback: true,
      links: [
        {
          rel: 'fill_100x100',
          href: 'string',
        },
      ],
    },
    links: [
      {
        rel: 'platform',
        href: 'string',
      },
    ],
  },
  carrier: {
    id: 0,
    name: 'string',
    city: 'string',
    picture: {
      fallback: true,
      links: [
        {
          rel: 'fill_100x100',
          href: 'string',
        },
      ],
    },
    links: [
      {
        rel: 'self',
        href: 'string',
      },
    ],
  },
  profile_picture: {
    fallback: true,
    links: [
      {
        rel: 'fill_960x500',
        href: 'string',
      },
    ],
  },
  active_matching_fund: {
    id: 0,
    created_at: 'string',
    updated_at: 'string',
    activated_at: 'string',
    title: 'string',
    description: 'string',
    company_name: 'string',
    client_id: 'string',
    provided_amount_in_cents: 0,
    donated_amount_in_cents: 0,
    state: 'string',
    logo_url: 'string',
    maximum_matching_amount_in_cents: 0,
    links: [
      {
        rel: 'self',
        href: 'string',
      },
    ],
  },
  closed_notice: {
    text: 'string',
    links: [
      {
        rel: 'call_to_action',
        href: 'string',
      },
    ],
  },
  links: [
    {
      rel: 'self',
      href: 'string',
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
