import React from 'react';
import ProgressBar from './progressBar2';
// import './styles.scss'; 
import ModuleBar from './moduleBar';
import { useState } from 'react';

 
// class Progress extends React.Component {
//   state = {
//      stepNumber: 1,
//      completed:false
//   };
//  //potentially move these step functions to progressBar.js, 
//   changeStep = e => {
//     e.preventDefault();
//     this.setState((state) => 
//     { 
//       return {
//         stepNumber: state.stepNumber + 1
//       }
//     })
//   };

//   minusStep = e => {
//     e.preventDefault();
//     this.setState((state) => 
//     { 
//       return {
//         stepNumber: state.stepNumber - 1
//       }
//     })
//   };
// //use/edit this function for module5 when training is complete. 
//   completed = e =>{
//       e.preventDefault();
//       this.setState((state) =>
//       {
//           return {
//             completed:!false
//           }
         
//       })
//   }

// //  if inactive && stepNumber < state.stepNumber
 
//   render() {
//     return (
//       <div className= "bar">
  
//         <ModuleBar />
//         <ProgressBar
//             stepNumber={this.state.stepNumber}
//             // steps={[3,3,4,4,1]}
//             steps={
//               ['/module1', '/module1', '/module1'],
//               ['/module2', '/module2', '/module2'],
//               ['/module3?submodule=0', '/module3?submodule=1', '/module3?submodule=2', '/module3?submodule=3'],
//               ['/module4', '/module4', '/module4', '/module4'],
//               ['/module5']
//             }
//             bullets={true}
//             lineHeight={20}
//         />
//         <div className = 'buttons'>
//         <button onClick={this.minusStep}>Back</button>
//         <button onClick={this.changeStep}>Next</button>
        
//       </div>
//       </div>
//     );
//   }
// }

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

      <ModuleBar />
      <ProgressBar
          stepNumber={progressState.stepNumber}
          // steps={[3,3,4,4,1]}
          steps={
            ['/module1', '/module1', '/module1'],
            ['/module2', '/module2', '/module2'],
            ['/module3?submodule=0', '/module3?submodule=1', '/module3?submodule=2', '/module3?submodule=3'],
            ['/module4', '/module4', '/module4', '/module4'],
            ['/module5']
          }
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
