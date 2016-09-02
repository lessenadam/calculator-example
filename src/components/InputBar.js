import React, { Component } from 'react';

class InputBar extends Component {
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
          ref={(thisInput) => {
            this.textInput = thisInput;
          }}
        />
      </div>
    );
  }
}

InputBar.defaultProps = {
  display: React.PropTypes.string,
  update: React.PropTypes.func,
};

export default InputBar;
