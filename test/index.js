'use strict';

import should from 'should'
import lib from '../src'

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

describe('immutable-props', () => {
  types.forEach((k) => {
    it(`should export ${k} as a valid PropType`, () => {
      should.exist(lib[k])
    })
  })
})
