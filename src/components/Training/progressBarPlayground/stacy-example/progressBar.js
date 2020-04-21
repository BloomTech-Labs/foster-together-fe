import React from 'react';
import ProgressBar from 'react-dennis-progressbar';
import "./progressBar.css"
import ModuleBar from './moduleBar';
 
 
class StacyBar extends React.Component {
  state = {
     stepNumber: 1,
     completed:false
  };
 
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
            lineColor={{
              right: '20px solid red',
                active: ' #3A6E79',
                inactive: 'lightgrey',
                     
                   }}
              bulletColor={{
                active: '#FF8D86',
                inactive: 'whitesmoke'
              }}
            lineHeight={10}
           
        />
        <div className = 'buttons'>
        <button onClick={this.minusStep}>Back</button>
        <button onClick={this.changeStep}>Next</button>
        
      </div>
      </div>
    );
  }
}

export default StacyBar