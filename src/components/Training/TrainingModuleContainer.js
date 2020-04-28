import React from 'react';
import ProgressBar from './progressBar2';
import './styles.scss'; 

import { useState } from 'react';
import {TrainingModuleOverlay } from "./TrainStyles";



//! export default Progress

// Needs to be renamed to Progress and "export default" added when ready
export default function Progress() {
  const [progressState, setProgressState] = useState({
    stepNumber: 1,
    completed: false
  })

  const changeStep = e => {
    e.preventDefault();
    setProgressState(state => {
      return {
        stepNumber: progressState.stepNumber + 1
      }
    })
  };

  const minusStep = e => {
    e.preventDefault();
    setProgressState(state => {
      return {
        stepNumber: progressState.stepNumber - 1
      }
    })
  };

  //use/edit this function for module5 when training is complete. 

  const completed = e => {
    e.preventDefault();
    setProgressState(state => {
      return {
        completed: true
      }
    })
  }

  return (
    <div className= "bar">

     
    <TrainingModuleOverlay>
      <div className="module-bar-container">
        <div className="one">
          <p>Module 1</p>
        </div>
        <div className="two">
          <p>Module 2</p>
        </div>
        <div className="three">
          <p>Module 3</p>
        </div>
        <div className="four">
          <p>Module 4</p>
        </div>
        <div className="five">
          <p>Module 5</p>
        </div>
      </div>
    </TrainingModuleOverlay>

      <ProgressBar
          stepNumber={progressState.stepNumber}
          steps={[
            ['/training-start-2', '/module1'],
            ['/module2?page=1', '/module2?page=2', '/module2?page=3'],
            ['/module3?page=1', '/module3?page=2', '/module3?page=3', '/module3?page=4'],
            ['/module4?page=1', '/module4?page=2', '/module4?page=3', '/module4?page=4'],
            ['/module5']
          ]}
          bullets={true}
          lineHeight={20}
      />
      <div className = 'buttons'>
      <button onClick={minusStep}>Back</button>
      <button onClick={changeStep}>Next</button>
      
    </div>
    </div>
  );
}
