import React, { Component } from 'react';
import ButtonContainer from './ButtonContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="calc-container" >
        <ButtonContainer />
      </div>
    );
  }
}

App.defaultProps = {
  
};

export default App ;
