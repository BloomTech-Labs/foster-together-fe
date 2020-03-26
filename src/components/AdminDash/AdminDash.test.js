import React from 'react'
import { renderWithReduxAndRouter as render } from '../../utils/testHelpers'
import { Circle } from './AdminDashPics/icons'
import Notification from './Profile/Notifications/Notification'
import UserProfile from './Profile/User/UserProfile'
import Container from './UserOptions/OptionContainer'

test('circle rendered from admindashpics', () => {
  render(<Circle />)
})

test('Notification renders on Profile', () => {
  render(<Notification />)
})

test('User Profile renders', () => {
  render(<Container />)
})

test('User Profile displayed', () => {
  render(<UserProfile />)
})
