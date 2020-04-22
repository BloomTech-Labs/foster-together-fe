import React from 'react';
import ProgressBar from 'react-dennis-progressbar';

import './styles.scss'; 
import ModuleBar from './moduleBar';

 
class Progress extends React.Component {
  state = {
     stepNumber: 1,
     completed:false
  };
 //potentially move these step functions to progressBar.js, 
  changeStep = e => {
    e.preventDefault();
    this.setState((state) => 
    { 
      return {
        stepNumber: state.stepNumber + 1
      }
    })
  };

  minusStep = e => {
    e.preventDefault();
    this.setState((state) => 
    { 
      return {
        stepNumber: state.stepNumber - 1
      }
    })
  };
//use/edit this function for module5 when training is complete. 
  completed = e =>{
      e.preventDefault();
      this.setState((state) =>
      {
          return {
            completed:!false
          }
         
      })
  }

//  if inactive && stepNumber < state.stepNumber
 
  render() {
    return (
      <div className= "bar">
  
        <ModuleBar />
        <ProgressBar
            stepNumber={this.state.stepNumber}
            steps={[3,3,4,4,1]}
            bullets={true}
            // lineColor={{
            //     active: 'darkgreen',
            //     inactive: 'lightgrey'
            //   }}
            //   bulletColor={{
            //     active: '#FF8D86',
            //     inactive: 'green'
            //   }}
            lineHeight={20}
           
        />
        <div className = 'buttons'>
        <button onClick={this.minusStep}>Back</button>
        <button onClick={this.changeStep}>Next</button>
        
      </div>
      </div>
    );
  }
}

export default Progress