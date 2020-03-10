import ReactGA from 'react-ga'
export const initGA = trackingID => {
  ReactGA.initialize(trackingID)
}
export const PageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search)
}
export const Event = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  })
}
// export const Timing = (category, variable, value, label) => {
//   ReactGA.timing({
//     category,
//     variable,
//     value,
//     label,
//   })
// }
