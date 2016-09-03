import React, { Component } from 'react';

class CalculatorDisplay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.textInput.focus();
  }

  componentDidUpdate() {
    this.textInput.focus();
  }

  render() {
    return (
      <div className="display" >
        <input
          id="input-display"
          type="text"
          value={this.props.display}
          onChange={this.props.update}
          onKeyPress={this.props.detect}
          ref={(thisInput) => {
            this.textInput = thisInput;
          }}
        />
      </div>
    );
  }
}

CalculatorDisplay.propTypes = {
  display: React.PropTypes.string,
  update: React.PropTypes.func,
  detect: React.PropTypes.func,
};

export default CalculatorDisplay;
