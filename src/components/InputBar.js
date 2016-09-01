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
  
};

export default InputBar;
