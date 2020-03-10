import React from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../theme'

export const renderWithReduxAndRouter = ui => {
  return {
    ...render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>{ui}</BrowserRouter>
        </ThemeProvider>
      </Provider>
    ),
    store,
  }
}
