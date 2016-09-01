import React from 'react';

const border = { border: '3.5px solid blue' };

const InputButton = ({ value, handleClick, styles, selected }) => (
  <td style={selected === value ? border : {}} id={styles} onClick={() => handleClick(value)}>
    {value}
  </td>
);

InputButton.defaultProps = {

};

export default InputButton;
