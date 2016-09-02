import React from 'react';

const InputBar = ({ display, update }) => (
  <div className="display" >
    <input
      id="input-display"
      type="text"
      value={display}
      onChange={update}
    />
  </div>
);

InputBar.defaultProps = {
  display: React.PropTypes.string,
  update: React.PropTypes.func,
};

export default InputBar;
