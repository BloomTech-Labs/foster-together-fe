import React from 'react'
import { renderWithReduxAndRouter as render } from '../../../utils/testHelpers'
import Module11 from './moduleOne'

import '@testing-library/jest-dom/extend-expect'


test('Module1-1 Renders', async () => {
    render(<Module11 />)
  }) 