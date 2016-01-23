import {PropTypes} from 'react'
import Immutable from 'immutable'
import Cursor from 'immutable/contrib/cursor'

const types = [
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

var props = types.reduce((p, i) => {
  p[i] = PropTypes.instanceOf(Immutable[i])
  return p
}, {})

props.Cursor = PropTypes.instanceOf(Cursor)

export default props