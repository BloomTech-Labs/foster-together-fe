import React, { useState} from 'react'
import TrainingThreeOne from './Training3.1'
import TrainingThreeTwo from './Train3.2'
import TrainingThreeThree from './Train3.3'
import TrainingThreeFour from './Train3.4'


function Overlay(props) {
  switch (props.module) {
    case 0:
      return <TrainingThreeOne module={props.module} setModule={props.setModule} />
    case 1:
      return <TrainingThreeTwo module={props.module}  setModule={props.setModule} />
    case 2:
      return <TrainingThreeThree module={props.module}  setModule={props.setModule} />
    case 3:
      return <TrainingThreeFour module={props.module}  setModule={props.setModule} />
    default:
      props.history.push('/')
  }
}

function FullOverlay() {
  const [module, setModule] = useState(0)
  return (
    <>
      <Overlay module={module} setModule={setModule} />
    </>
  )
}
export default FullOverlay
