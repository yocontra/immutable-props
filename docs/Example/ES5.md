## ES5

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
