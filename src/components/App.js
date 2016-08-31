import React, { Component } from 'react';
import ButtonContainer from './ButtonContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNumber: '',
    };
    this.buttonClick = this.handleClick.bind(this);
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
        <ButtonContainer handleClick={this.buttonClick}/>
      </div>
    );
  }
}

App.defaultProps = {
  
};

export default App ;
