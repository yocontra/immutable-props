## ES6

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
