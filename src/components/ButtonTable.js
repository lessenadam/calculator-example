import React from 'react';
import InputButton from './InputButton';

const ButtonTable = ({ handleClick, clear, operate, equals, selected }) => (
  <div>
    <table className="calc-table">
      <tBody>
        <tr>
          <InputButton handleClick={clear} value="C" />
          <InputButton value="&plusmn;" />
          <InputButton value="%" />
          <InputButton handleClick={operate} selected={selected} value="&divide;" />
        </tr>
        <tr>
          <InputButton handleClick={handleClick} value="7" />
          <InputButton handleClick={handleClick} value="8" />
          <InputButton handleClick={handleClick} value="9" />
          <InputButton handleClick={operate} selected={selected} value="&times;"/>
        </tr>
        <tr>
          <InputButton handleClick={handleClick} value="4" />
          <InputButton handleClick={handleClick} value="5" />
          <InputButton handleClick={handleClick} value="6" />
          <InputButton handleClick={operate} selected={selected} value="&minus;" />
        </tr>
        <tr>
          <InputButton handleClick={handleClick} value="1" />
          <InputButton handleClick={handleClick} value="2" />
          <InputButton handleClick={handleClick} value="3" />
          <InputButton handleClick={operate} selected={selected} value="+" />
        </tr>
        <tr>
          <InputButton handleClick={handleClick} value="0" styles="no-right-border" />
          <InputButton handleClick={handleClick} value="" />
          <InputButton handleClick={handleClick} value="." styles="large" />
          <InputButton handleClick={equals} value="=" />
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
