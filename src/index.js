import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'
import * as Sentry from '@sentry/browser'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

Sentry.init({
  dsn: 'https://4a0af58b3e8b4350984d11fe9a1f8cb0@sentry.io/2715170',
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
