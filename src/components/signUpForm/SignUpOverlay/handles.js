import { postNeighbor } from '../../../redux/thunks/neighThunks'
import { postFamily } from '../../../redux/thunks/famThunks'

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
    if (isNeighbor) dispatch(postNeighbor(user, push))
    else dispatch(postFamily(user, push))
  }
}
