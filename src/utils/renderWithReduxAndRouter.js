import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import signUpReducer from '../redux/slices/signUpSlice'
import { BrowserRouter } from 'react-router-dom'

export const renderWithReduxAndRouter = (
  ui,
  { initialState, store = createStore(signUpReducer, initialState) } = {}
) => {
  const rendered = render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>,
    ({ initialState, store = createStore(signUpReducer, initialState) } = {})
  )
  return {
    ...rendered,
    rerender: (ui, options) =>
      renderWithReduxAndRouter(ui, {
        container: rendered.container,
        ...options,
      }),
  }
}
