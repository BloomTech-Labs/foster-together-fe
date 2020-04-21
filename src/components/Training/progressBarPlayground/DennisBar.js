import React from 'react';
import ProgressBar from 'react-dennis-progressbar';
 
 
class DennisBar extends React.Component {
  state = {
     stepNumber: 6,
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
 
  render() {
    return (
      <div>
        <ProgressBar
            stepNumber={this.state.stepNumber}
            steps={[2,6,4,1,5]}
            bullets={true}

        />
        <button onClick={this.changeStep}>Click me</button>
      </div>
    );
  }
}

export default DennisBar;