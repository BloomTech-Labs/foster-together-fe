import React from "react";

import "./styles.scss";

import {TrainingModuleOverlay } from "../TrainStyles";

const ModuleBar = props => {
  return (
   
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
 
  );
};

export default ModuleBar;
