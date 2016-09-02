import React, { Component } from 'react';
import ButtonTable from './ButtonTable';
import InputBar from './InputBar';
import PastTable from './PastTable';
import { addComma, convertToNumber, calculate } from '../utils/utils';

const maxLength = 14; // set truncate threshold for calculator display

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNumber: '',
      operator: '',
      history: [],
      past: [],
    };
    this.buttonClick = this.handleClick.bind(this);
    this.update = this.handleChange.bind(this);
    this.clear = this.clearAll.bind(this);
    this.operate = this.setOperator.bind(this);
    this.equals = this.solveEquation.bind(this);
  }

  setOperator(val) {
    const operator = val;
    if (this.state.displayNumber.length > 0) {
      this.setState({ operator });
    }
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

  handleChange(e) {
    // handle case when operator is selected
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
    // handle case when operator is selected
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
          <InputBar
            display={this.state.displayNumber}
            update={this.update}
          />
          <ButtonTable
            handleClick={this.buttonClick}
            clear={this.clear}
            operate={this.operate}
            equals={this.equals}
            selected={this.state.operator}
          />
        </div>
        <div className="past-container">
          <PastTable past={this.state.past} />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
};

export default App ;
