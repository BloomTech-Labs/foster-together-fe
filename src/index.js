import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import * as Sentry from '@sentry/browser'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
// import { createBrowserHistory } from 'history'

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
// const analytics = createBrowserHistory()
// // google analytics page view tracking
// analytics.listen(location => {
//   ReactGA.set({ page: location.pathname }) // Update the user's current page
//   ReactGA.pageview(location.pathname) // Record a pageview for the given page
//   ReactGA.event({
//     category: 'User',
//     action: 'Sent message',
//   })
// })

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
