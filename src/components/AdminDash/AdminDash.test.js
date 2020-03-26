import React from 'react'
import { renderWithReduxAndRouter as render } from '../../utils/testHelpers'
import Distance from './AdminDashboard'
import { Circle } from './AdminDashPics/icons'
import Notification from './Profile/Notifications/Notification'
import Profile from './Profile/Profile'
import UserProfile from './Profile/User/UserProfile'
import Container from './UserOptions/OptionContainer'

test('Distance rendered correctly', () => {
  render(<Distance />)
})

test('circle rendered from admindashpics', () => {
  render(<Circle />)
})

test('Notification renders on Profile', () => {
  render(<Notification />)
})

test('Profile renders for admins', () => {
  render(<Profile />)
})

test('User Profile renders', () => {
  render(<Container />)
})

test('User Profile displayed', () => {
  render(<UserProfile />)
})
