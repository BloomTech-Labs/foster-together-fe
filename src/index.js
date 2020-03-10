import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './redux/store'
import * as Sentry from '@sentry/browser'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { initGA } from './utils/analytics'
;(function initAnalytics() {
  initGA('UA-159166357-1')
})()

Sentry.init({
  dsn: 'https://4a0af58b3e8b4350984d11fe9a1f8cb0@sentry.io/2715170',
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
