import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import ProfileHeader from './Header'

test('Profile displayed', async () => {
  render(<ProfileHeader />)
})
