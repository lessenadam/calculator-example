import React from 'react';

const EqRow = ({ eq, result }) => (
  <tr>
    <td>{eq}</td>
    <td>{result}</td>
  </tr>
);

EqRow.defaultProps = {
  
};

export default EqRow ;
