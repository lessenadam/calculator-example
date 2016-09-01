import React, { Component } from 'react';
import ButtonTable from './ButtonTable';
import InputBar from './InputBar';
import PastTable from './PastTable';

const addComma = (string) => {
  if (string.length <= 3) {
    return string;
  } else {
    return addComma(string.slice(0, string.length - 3)) + ',' + string.slice(string.length - 3);
  }
};

const operators = {
  TIMES: 215,
  ADD: 43,
  DIVIDE: 247,
  MINUS: 8722,
};

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

  solveEquation() {
    const steps = this.state.history.concat(this.state.displayNumber);
    const copyHistory = steps.slice().join(' ');
    let currentTotal = parseInt(steps.shift().split(',').join(''), 10);
    while (steps.length > 0) {
      const operator = steps.shift();
      const nextVal = parseInt(steps.shift().split(',').join(''), 10);
      switch (operator.charCodeAt(0)) {
        case operators.TIMES:
          currentTotal = currentTotal * nextVal;
          break;
        case operators.ADD:
          currentTotal += nextVal;
          break;
        case operators.DIVIDE:
          currentTotal = currentTotal / nextVal;
          break;
        case operators.MINUS:
          currentTotal -= nextVal;
      }
    }
    this.clearAll()
      .then(() =>
        this.setState({
          displayNumber: addComma(currentTotal.toString()),
          past: this.state.past.concat([[copyHistory, addComma(currentTotal.toString())]]),
        })
      );
  }

  setOperator(val) {
    const operator = val;
    console.log('clickedOperator!', operator);
    if (this.state.displayNumber.length > 0) {
      this.setState({ operator });
    }
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
      console.log('update??');
      const updatedHistory = this.state.history
                              .concat([
                                this.state.displayNumber,
                                this.state.operator,
                              ]);
      this.setState({ history: updatedHistory });
      this.clearDisplay();
      e.target.value = e.target.value[e.target.value.length - 1];
    }
    console.log('value', e.target.value);
    const codeToEvaluate = e.target.value.charCodeAt(e.target.value.length - 1);
    // 48 - 57 on charCodeAt is 0 - 9
    if (codeToEvaluate >= 48 && codeToEvaluate <= 57 || e.target.value === '') {
      const commasRemoved = e.target.value.split(',').join('');
      const updatedDisplay = addComma(commasRemoved);
      this.setState({displayNumber:updatedDisplay});
    }
  }

  handleClick(val) {
    // handle case when operator is selected
    if (this.state.operator.length > 0) {
      console.log('update??');
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
          const updatedDisplay = addComma(current += val);
          this.setState({displayNumber:updatedDisplay});
        })
        .catch((err) => console.log(err));
    } else {
      if (val === '') {
        val = '0';
      }
      let current = this.state.displayNumber.split(',').join('');
      const updatedDisplay = addComma(current += val);
      this.setState({displayNumber:updatedDisplay});
    }
  }

  render() {
    return (
      <div className="container outer-app">
        <div className="calc-container" >
          <InputBar display={this.state.displayNumber} update={this.update} />
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
