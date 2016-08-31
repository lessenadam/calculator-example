import React from 'react';


const InputButton = ({ value, handleClick, styles }) => (
  <td className={styles} onClick={() => handleClick(value)}>
    {value}
  </td>
);

InputButton.defaultProps = {

};

export default InputButton;
