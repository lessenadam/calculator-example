import React, { Component } from 'react';
import ButtonContainer from './ButtonContainer';
import InputBar from './InputBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNumber: '',
    };
    this.buttonClick = this.handleClick.bind(this);
    this.update = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log('value', e.target.value);
    const codeToEvaluate = e.target.value.charCodeAt(e.target.value.length - 1);
    // 48 - 57 on charCodeAt is 0 - 9
    if (codeToEvaluate >= 48 && codeToEvaluate <= 57 || e.target.value === '') {
      this.setState({displayNumber:e.target.value});
    }
  }

  handleClick(val) {
    if (val === '') {
      val = '0';
    }
    console.log('this is: ', this);
    console.log('val is: ', val);
  }

  render() {
    return (
      <div className="calc-container" >
        <InputBar display={this.state.displayNumber} update={this.update} />
        <ButtonContainer handleClick={this.buttonClick} />
      </div>
    );
  }
}

App.defaultProps = {
  
};

export default App ;
