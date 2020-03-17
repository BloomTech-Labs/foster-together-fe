import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import MemberTable from './MemberTable'

const neighbors = []
const families = []

test('renders MemberTable without crashing', () => {
  render(<MemberTable userType='neighbors' Data={neighbors} Data2={families} />)
})

const data = {
  Data: [{ first_name: 'bob', last_name: 'smith' }, {}],
  Data2: [{}, {}],
}

test('length is four', () => {
  const expected = 4
  const actual = DataMap(data).length
  expect(expected).toEqual(actual)
})

test('test that name is coming through correctly', () => {
  const expected = 'smith, bob'
  const actual = DataMap(data)[0].name
  expect(expected).toEqual(actual)
})

test('test that match is coming through as none', () => {
  const expected = 'none'
  const actual = DataMap(data)[0].match
  expect(expected).toEqual(actual)
})

test('renders MemberTable without crashing', () => {
  const neighbors = []
  const props = {}
  render(<MemberTable columns={columns} data={neighbors} props={props} />)
})
