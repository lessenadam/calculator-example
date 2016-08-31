import React from 'react';

const InputBar = ({ display, update, keyPress }) => (
  <div className="display" >
    <input
      id="input-display"
      type="text"
      value={display}
      onChange={update}
      onKeyUp={keyPress}
    />
  </div>
);

InputBar.defaultProps = {
  
};

export default InputBar;
