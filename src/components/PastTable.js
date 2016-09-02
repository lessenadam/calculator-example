import React from 'react';
import EqRow from './EqRow';

const PastTable = ({ past }) => {
  const rows = [];
  past.forEach(previous =>
    rows.push(<EqRow eq={previous[0]} result={previous[1]} />)
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
