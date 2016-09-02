import React from 'react';
import ButtonInput from './ButtonInput';

const ButtonTable = ({ handleClick, clear, operate, equals, selected }) => (
  <div>
    <table className="calc-table">
      <tBody>
        <tr>
          <ButtonInput handleClick={clear} value="C" />
          <ButtonInput value="&plusmn;" />
          <ButtonInput value="%" />
          <ButtonInput handleClick={operate} selected={selected} value="&divide;" />
        </tr>
        <tr>
          <ButtonInput handleClick={handleClick} value="7" />
          <ButtonInput handleClick={handleClick} value="8" />
          <ButtonInput handleClick={handleClick} value="9" />
          <ButtonInput handleClick={operate} selected={selected} value="&times;"/>
        </tr>
        <tr>
          <ButtonInput handleClick={handleClick} value="4" />
          <ButtonInput handleClick={handleClick} value="5" />
          <ButtonInput handleClick={handleClick} value="6" />
          <ButtonInput handleClick={operate} selected={selected} value="&minus;" />
        </tr>
        <tr>
          <ButtonInput handleClick={handleClick} value="1" />
          <ButtonInput handleClick={handleClick} value="2" />
          <ButtonInput handleClick={handleClick} value="3" />
          <ButtonInput handleClick={operate} selected={selected} value="+" />
        </tr>
        <tr>
          <ButtonInput handleClick={handleClick} value="0" styles="no-right-border" />
          <ButtonInput handleClick={handleClick} value="" />
          <ButtonInput handleClick={handleClick} value="." styles="large" />
          <ButtonInput handleClick={equals} value="=" />
        </tr>
      </tBody>
    </table>
  </div>
);

ButtonTable.defaultProps = {
  handleClick: React.PropTypes.func,
  clear: React.PropTypes.func,
  operate: React.PropTypes.func,
  equals: React.PropTypes.func,
  selected: React.PropTypes.string,
};

export default ButtonTable;
