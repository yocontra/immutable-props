'use strict';

exports.__esModule = true;

var _react = require('react');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _cursor = require('immutable/contrib/cursor');

var _cursor2 = _interopRequireDefault(_cursor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = ['Iterable', 'Seq', 'Collection', 'Map', 'OrderedMap', 'List', 'Stack', 'Set', 'OrderedSet', 'Record', 'Range', 'Repeat'];

var props = types.reduce(function (p, i) {
  p[i] = _react.PropTypes.instanceOf(_immutable2.default[i]);
  return p;
}, {});

props.Cursor = _react.PropTypes.instanceOf(_cursor2.default);

exports.default = props;
module.exports = exports['default'];