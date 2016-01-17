import {PropTypes} from 'react'
import Immutable from 'immutable'

var types = [
  'Iterable',
  'Seq',
  'Collection',
  'Map',
  'OrderedMap',
  'List',
  'Stack',
  'Set',
  'OrderedSet',
  'Record',
  'Range',
  'Repeat'
]

export default types.reduce((p, i) => {
  p[i] = PropTypes.instanceOf(Immutable[i])
  return p
}, {})
