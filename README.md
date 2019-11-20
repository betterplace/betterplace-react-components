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

<ProjectTeaser project={betterplaceOrgApiV4Response}>
```

```js
import { FacebookButton } from 'betterplace-react-components'

<FacebookButton shape='round' shareUrl='www.foo.bar' />
```

ect. - run `yarn start` to get a preview of all components.

#### Share buttons with utm_params

```js
<FacebookButton
  shape='round'
  shareUrl='www.foo.bar'
  utmParams={{ utm_campaign: 'user_share', utm_medium: 'foo', utm_source: 'bar' }}
/>
```

## Share Button Props

|       |Required props|Optional props|
|-------|------------|----------|
|__All__|__`shareUrl`__ URL of the shared page (string)<br><br>__`shape`__<br> `round` Render a round sharing button without content(string)<br><br>`square` Render a square sharing button without content (string)<br><br>`minimal` Render a rectangle share button with icon and `content`<br><br>`full` Render a rounded share button with icon and `content`|__`boxShadow`__ Add a bottom box shadow to the icon (boolean) - only for `full` and `round` shapes so far<br><br>__`utmParams`__: Representation of the utmParams to be attached to the `shareUrl` (object)<br><br>__`beforeOnClick`__: Add additional behaviour to the click action (function)<br><br>__`content`__: Button content to that needs to be set with `minimal` button option (string)<br><br>__`title`__: title attribute for the `<button>` element (string)|
|FacebookButton|-|-|
|FacebookMessengerButton|__`facebookAppId`__: Facebook App ID of your platform (string)|-|
|TwitterButton|-|-|
|TelegramButton|-|__`teaser`__: Intro text for the sharing message (string)|
|WhatsappButton|-|__`teaser`__: Intro text for the sharing message (string)|
|EmailButton|-|__`subject`__: Subject of the email(string)<br><br>__`teaser`__: Intro text for the sharing message (string)|


### Sharing with custom markup

You can also use the click action handler only in case you want to use custom styled buttons.

```js
import { facebookShareAction } from 'betterplace-react-components'

const MyShareButton = () => {
  const handleClick = () => facebookShareAction({
    shareUrl: 'www.foo.bar',
    utmParams: { utm_campaign: 'user_share', utm_medium: 'foo', utm_source: 'bar' }
  })

  return <span onClick={handleClick}>i luv facebook</span>
}
```

## Customization

There is no theming support yet. Some styles can be set via props, e.g.

```js
<ProjectTeaser progressbarColor='#0000ff' />
```

## Development

Install development / testing dependencies:

`yarn`

Run hot-reloading preview:

`yarn start`

Run tests:

`yarn test`

Release a new version:

`yarn publish`
