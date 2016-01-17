'use strict';

exports.__esModule = true;

var _react = require('react');

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = ['Iterable', 'Seq', 'Collection', 'Map', 'OrderedMap', 'List', 'Stack', 'Set', 'OrderedSet', 'Record', 'Range', 'Repeat'];

exports.default = types.reduce(function (p, i) {
  p[i] = _react.PropTypes.instanceOf(_immutable2.default[i]);
  return p;
}, {});
module.exports = exports['default'];