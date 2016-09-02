import React from 'react';
import PastCalculation from './PastCalculation';

const PastTable = ({ past, revert }) => {
  const rows = [];

  // past contains tuples of [equations, results] as strings
  past.forEach((previous, index) =>
    rows.push(<PastCalculation key={index} eq={previous[0]} result={previous[1]} revert={revert} />)
  );
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Equation</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

PastTable.defaultProps = {
  past: React.PropTypes.array,
};

export default PastTable;
