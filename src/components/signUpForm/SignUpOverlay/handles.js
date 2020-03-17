import { postMember } from '../../../redux/thunks/memThunks'

export const handleNext = (
  user,
  activeStep,
  setActiveStep,
  isNeighbor,
  dispatch,
  push
) => {
  if (activeStep === 0) {
    setActiveStep(activeStep + 1)
  } else if (activeStep === 1) {
    setActiveStep(activeStep + 1)
  } else if (activeStep === 2) {
    if (isNeighbor) dispatch(postMember('neighbors', user, push))
    else dispatch(postMember('families', user, push))
  }
}
