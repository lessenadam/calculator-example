import React from 'react';

const border = { border: '3.5px solid blue' };

const ButtonInput = ({ value, handleClick, styles, selected }) => (
  <td style={selected === value ? border : {}} id={styles} onClick={() => handleClick(value)}>
    {value}
  </td>
);

ButtonInput.defaultProps = {
  value: React.PropTypes.string,
  handleClick: React.PropTypes.func,
  styles: React.PropTypes.string,
  selected: React.PropTypes.string,
};

export default ButtonInput;
