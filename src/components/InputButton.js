import React from 'react';


const InputButton = ({ value, handleClick, styles }) => (
  <td id={styles} onClick={() => handleClick(value)}>
    {value}
  </td>
);

InputButton.defaultProps = {

};

export default InputButton;
