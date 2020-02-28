import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import * as Sentry from '@sentry/browser'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

Sentry.init({
  dsn: 'https://4a0af58b3e8b4350984d11fe9a1f8cb0@sentry.io/2715170',
})

// const trackingId = 'UA-159166357-1'
// ReactGA.initialize(trackingId, {
//   debug: true,
//   titleCase: false,
//   gaOptions: {
//     userId: 123,
//     siteSpeedSampleRate: 100,
//   },
// })

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
