import ReactGA from 'react-ga'
import auth from './auth.ts'

const trackingId = 'UA-159166357-1'
ReactGA.initialize(trackingId)
ReactGA.set({
  userId: auth.currentUserId(),
})
