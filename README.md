[![npm Version](https://badge.fury.io/js/betterplace-react-components.svg)](https://badge.fury.io/js/betterplace-react-components)
[![Build Status](https://travis-ci.org/betterplace/betterplace-react-components.svg?branch=master)](https://travis-ci.org/betterplace/betterplace-react-components)
[![peerDependencies Status](https://david-dm.org/betterplace/betterplace-react-components/peer-status.svg)](https://david-dm.org/betterplace/betterplace-react-components?type=peer)
[![devDependencies Status](https://david-dm.org/betterplace/betterplace-react-components/dev-status.svg)](https://david-dm.org/betterplace/betterplace-react-components?type=dev)
[![Dependency Status](https://david-dm.org/betterplace/betterplace-react-components.svg)](https://david-dm.org/betterplace/betterplace-react-components)

# betterplace-react-components

## Installation

With yarn:

`yarn add betterplace-react-components`

With npm:

`npm i betterplace-react-components`

## Usage

```js
import { ProjectTeaser } from 'betterplace-react-components'
```

## Customization

There is no theming support yet. Some styles can be set via props, e.g.

```
<ProjectTeaser progressbarColor='#0000ff' />
```

Texts and localizations can be overridden via the globally exposed `I18n` object.

E.g.

```js
I18n.translations = I18n.extend(I18n.translations || {}), {
  de: {
    bp_project_teaser: {
      values_donor_count: 'Homies'
    }
  },
  en: {
    bp_project_teaser: {
      values_donor_count: 'homies'
    }
  }
})
```

Or even like this:

```js
I18n.translations.de.bp_project_teaser.values_donor_count = 'Homies'
```

## Development

Install development / testing dependencies:

`yarn`

Run tests:

`yarn test`

Release a new version:

`yarn publish`
