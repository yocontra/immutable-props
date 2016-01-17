# immutable-props [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url]

## Information

- This provides [React PropTypes](https://facebook.github.io/react/docs/reusable-components.html) for Immutable.js data.
- This is the equivalent of `React.PropTypes.instanceOf(Immutable.Type)` so you can do all the normal stuff
  - `.isRequired`, nest in `.oneOfType`, etc.
- React and Immutable are peer dependencies, so this will not install those for you.
  - This module works with any version of React and Immutable you have installed! 🍾

## Install

```
npm install immutable-props --save
```

## Available Types

- Iterable
- Seq
- Collection
- Map
- OrderedMap
- List
- Stack
- Set
- OrderedSet
- Record
- Range
- Repeat

## Example

### ES5

```js
var IPropTypes = require('immutable-props');

var UserPage = React.createClass({
  propTypes: {
    user: IPropTypes.Map,
    friends: IPropTypes.List
  },
  render: function() {
    // ...
  }
});
```

### ES6

```js
import IPropTypes from 'immutable-props'

class UserPage extends React.Component {
  static propTypes = {
    user: IPropTypes.Map,
    friends: IPropTypes.List
  };

  render () {
    // ...
  }
}
```

### ES6 (with destructuring)

```js
import {Map, List} from 'immutable-props'

class UserPage extends React.Component {
  static propTypes = {
    user: Map,
    friends: List
  };

  render () {
    // ...
  }
}
```

[downloads-image]: http://img.shields.io/npm/dm/immutable-props.svg
[npm-url]: https://npmjs.org/package/immutable-props
[npm-image]: http://img.shields.io/npm/v/immutable-props.svg

[travis-url]: https://travis-ci.org/contra/immutable-props
[travis-image]: https://travis-ci.org/contra/immutable-props.png?branch=master
