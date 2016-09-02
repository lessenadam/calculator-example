import React from 'react';

const EqRow = ({ eq, result }) => (
  <tr>
    <td>{eq}</td>
    <td>{result}</td>
  </tr>
);

EqRow.defaultProps = {
  eq: React.PropTypes.string,
  result: React.PropTypes.string,
};

export default EqRow ;
