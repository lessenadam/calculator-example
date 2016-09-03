import React, { Component } from 'react';
import ButtonTable from './ButtonTable';
import CalculatorDisplay from './CalculatorDisplay';
import PastTable from './PastTable';
import { addComma, convertToNumber, calculate } from '../utils/utils';

// set truncate threshold for calculator display
const maxLength = 14;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNumber: '',
      operator: '',
      history: [],
      past: [],
    };

    // bind the event handlers passed to children components
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.setOperator = this.setOperator.bind(this);
    this.solveEquation = this.solveEquation.bind(this);
    this.revertToPast = this.revertToPast.bind(this);
    this.detectEnter = this.detectEnter.bind(this);
  }


  setOperator(val) {
    const operator = val;
    if (this.state.displayNumber.length > 0) {
      this.setState({ operator });
    }
  }

  // resets display to a previous calculated number
  revertToPast(result) {
    this.setState({ displayNumber: result });
  }

  solveEquation() {
    const steps = this.state.history.concat(this.state.displayNumber);
    const copyHistory = steps.slice().join(' ');
    let currentTotal = convertToNumber(steps.shift());
    currentTotal = calculate(steps, currentTotal);

    this.clearAll()
      .then(() => {
        const resultToDisplay = addComma(currentTotal.toString()).slice(0,maxLength);
        this.setState({
          displayNumber: resultToDisplay,
          past: this.state.past.concat([[copyHistory, resultToDisplay]]),
        });
      });
  }

  clearAll() {
    return new Promise((resolve, reject) => {
      this.setState({ displayNumber: '', operator: '', history: [] }, () => {
        resolve();
      });
    });
  }

  clearDisplay() {
    return new Promise((resolve, reject) => {
      this.setState({ displayNumber: '', operator: '' }, () => {
        resolve();
      });
    });
  }

  detectEnter(e) {
    if (e.key === 'Enter') {
      this.solveEquation();
    }
  }

  handleKeyPress(e) {
    // handle case when operator is already selected
    if (this.state.operator.length > 0) {
      const updatedHistory = this.state.history
                              .concat([
                                this.state.displayNumber,
                                this.state.operator,
                              ]);
      this.setState({ history: updatedHistory });
      this.clearDisplay();
      e.target.value = e.target.value[e.target.value.length - 1];
    }
    const codeToEvaluate = e.target.value.charCodeAt(e.target.value.length - 1);

    // validadation that key pressed is 0 - 9, otherwise don't update state
    if (codeToEvaluate >= 48 && codeToEvaluate <= 57 || e.target.value === '') {
      const commasRemoved = e.target.value.split(',').join('');
      const updatedDisplay = addComma(commasRemoved).slice(0, maxLength);
      this.setState({ displayNumber: updatedDisplay });
    }
  }

  handleClick(val) {
    // handle case when operator is already selected
    if (this.state.operator.length > 0) {
      const updatedHistory = this.state.history
                              .concat([
                                this.state.displayNumber,
                                this.state.operator,
                              ]);
      this.setState({ history: updatedHistory });
      this.clearDisplay()
        .then(() => {
          if (val === '') {
            val = '0';
          }
          let current = this.state.displayNumber.split(',').join('');
          const updatedDisplay = addComma(current += val).slice(0, maxLength);
          this.setState({ displayNumber: updatedDisplay });
        })
        .catch((err) => console.log(err));
    } else {
      if (val === '') {
        val = '0';
      }
      let current = this.state.displayNumber.split(',').join('');
      const updatedDisplay = addComma(current += val).slice(0, maxLength);
      this.setState({ displayNumber: updatedDisplay });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="calc-container" >
          <CalculatorDisplay
            display={this.state.displayNumber}
            update={this.handleKeyPress}
            detect={this.detectEnter}
          />
          <ButtonTable
            handleClick={this.handleClick}
            clear={this.clearAll}
            operate={this.setOperator}
            equals={this.solveEquation}
            selected={this.state.operator}
          />
        </div>
        <div className="past-container">
          <PastTable past={this.state.past} revert={this.revertToPast} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
};

export default App ;
