import React, { Component } from 'react';
import ButtonContainer from './ButtonContainer';
import InputBar from './InputBar';

const addComma = (string) => {
  if (string.length <= 3) {
    return string;
  } else {
    return addComma(string.slice(0, string.length - 3)) + ',' + string.slice(string.length - 3);
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNumber: '',
      operator: '',
      history: [],
    };
    this.buttonClick = this.handleClick.bind(this);
    this.update = this.handleChange.bind(this);
    this.clear = this.clearAll.bind(this);
    this.operate = this.setOperator.bind(this);
  }

  setOperator(val) {
    const operator = val;
    console.log('clickedOperator!', operator);
    if (this.state.displayNumber.length > 0) {
      this.setState({ operator });
    }
  }

  clearAll() {
    console.log('clear all called');
    this.setState({ displayNumber: '', operator: '', history: '' });
  }

  clearDisplay() {
    console.log('cleardisplay invoked');
    return new Promise((resolve, reject) => {
      this.setState({ displayNumber: '', operator: '' }, () => {
        console.log('dis', this.state.displayNumber);
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
      <div className="calc-container" >
        <InputBar display={this.state.displayNumber} update={this.update} />
        <ButtonContainer handleClick={this.buttonClick} clear={this.clear} operate={this.operate}/>
      </div>
    );
  }
}

App.defaultProps = {
  
};

export default App ;
