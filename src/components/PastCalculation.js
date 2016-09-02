import React from 'react';

const PastCalculation = ({ eq, result, revert }) => (
  <tr onClick={() => revert(result)}>
    <td>{eq}</td>
    <td>{result}</td>
  </tr>
);

PastCalculation.defaultProps = {
  eq: React.PropTypes.string,
  result: React.PropTypes.string,
  revert: React.PropTypes.func,
};

export default PastCalculation ;
