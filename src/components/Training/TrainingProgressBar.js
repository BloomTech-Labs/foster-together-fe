import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indicator: props.stepNumber,  // to avoid recursion in ComponentDidUpdate
      width: 0,
    };
  }

  initProgressBar = () => {
    let step = this.props.stepNumber;
    let stepsArray = [...this.props.steps];
    let filledBullets = 100 / stepsArray.length;

    for (let i = 0; i < stepsArray.length; i++) {
      let numberOfSubSteps = stepsArray[i].length;

      if (step >= numberOfSubSteps) {
        this.setState((state) => {
          return {
            width: state.width + filledBullets,
          };
        });
        step = step - numberOfSubSteps;
      } else if (step === 1 && i === 0) {
        this.setState({
          width: filledBullets / numberOfSubSteps,
        });
        break;
      }
      else if (step > 1 && step < numberOfSubSteps && i === 0) {
        this.setState({
          width: filledBullets * step / numberOfSubSteps,
        });
        break;
      }
      else if (step < numberOfSubSteps && i > 0) {
        let segmentWidth = filledBullets / numberOfSubSteps;
        this.setState((state) => {
          return {
            width: state.width + (segmentWidth * step),
          };
        });
        break;
      }
    }
  };

  componentDidMount() {
    this.initProgressBar();
  }

  componentDidUpdate() {
    if (this.state.indicator === this.props.stepNumber) return;

    if (this.state.indicator > this.props.stepNumber) {
      this.setState((state) => {
        return {
          indicator: state.indicator - 1,
          width: 0
        }
      });
    }
    else {
      this.setState((state) => {
        return {
          indicator: state.indicator + 1,
          width: 0
        }
      });
    }

    this.initProgressBar();
  }

  render() {
    const {width} = this.state;
    let {steps, stepNumber, bullets, bulletColor, lineColor, lineHeight} = this.props;
    let bulletsStyles = {
      transform: `translate(${-10}px, ${(-10 - lineHeight)}px`,
      height: 22 + (lineHeight <= 2 ? 0 : lineHeight - 2) + 'px',
      width: 22 + (lineHeight <= 2 ? 0 : lineHeight - 2) + 'px',
    };

    steps = steps.concat([['']]);
    let numberOfSteps = steps.reduce(function(a, b) {
      let count = a;
      if (a.length) {
        count = a.length;
      }

      return count + b.length;
    });
    let calculatedPercentage = width < 100 ? 100 * stepNumber / numberOfSteps + '%' : '100%';

    return (
      <div>
        <div className="progress-container form-progress">
          <div className="progress-step-container">
            <div className="progress-line-container"
                 style={{
                   backgroundColor: lineColor.inactive,
                   height: lineHeight + 'px'
                 }}>
              {
                bullets ?
                  <div className="progress-line"
                  // progress-line is just moving the width to fill the container based off of the calculatedPercentage 
                  // change width to divs somehow
                       style={{
                         width: width + '%',
                         backgroundColor: lineColor.active,
                         height: lineHeight + 'px'
                       }}>&nbsp;</div>
                  :
                  <div className="progress-line"
                       style={{
                         width: calculatedPercentage,
                         backgroundColor: lineColor.active,
                         height: lineHeight + 'px'
                       }}>&nbsp;</div>
              }
            </div>

            {this.props.bullets ?
              steps.map((item, key) =>
                <div key={key} className="progress-bullet-container progress-bullet-1"
                     style={{left: (100 / (steps.length - 1) * key) + '%'}}>
                  <div
                    className={`progress-bullet ${width >= (100 / (steps.length - 1) * key) ? 'active' : ''}`}
                    style={width >= (100 / (steps.length - 1) * key) ?
                      {...bulletsStyles, ...{backgroundColor: bulletColor.active}}
                      :
                      {...bulletsStyles, ...{backgroundColor: bulletColor.inactive}}
                    }>&nbsp;</div>
                </div>)
              :
              null
            }
          </div>
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  stepNumber: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
  bullets: PropTypes.bool,
  bulletColor: PropTypes.shape({
    active: PropTypes.string,
    inactive: PropTypes.string
  }),
  lineColor: PropTypes.shape({
    active: PropTypes.string,
    inactive: PropTypes.string
  }),
  lineHeight: PropTypes.number
};

ProgressBar.defaultProps = {
  stepNumber: 1,
  steps: [1, 2, 3, 4, 5],
  bullets: false,
  bulletColor: {
    active: '#213846',
    inactive: '#d8dee5'
  },
  lineColor: {
    active: '#213846',
    inactive: '#d8dee5'
  },
  lineHeight: 2,
};

export default ProgressBar;