import React from 'react';
import InputButton from './InputButton';

const ButtonContainer = ({ handleClick }) => (
      <div>
        <table>
          <tBody>
            <tr>
              <InputButton handleClick={handleClick} value="op"/>
              <InputButton handleClick={handleClick} value="op"/>
              <InputButton handleClick={handleClick} value="op"/>
              <InputButton handleClick={handleClick} value="op"/>
            </tr>
            <tr>
              <InputButton handleClick={handleClick} value="7" />
              <InputButton handleClick={handleClick} value="8" />
              <InputButton handleClick={handleClick} value="9" />
              <InputButton handleClick={handleClick} value="op"/>
            </tr>
            <tr>
              <InputButton handleClick={handleClick} value="4" />
              <InputButton handleClick={handleClick} value="5" />
              <InputButton handleClick={handleClick} value="6" />
              <InputButton handleClick={handleClick} value="op"/>
            </tr>
            <tr>
              <InputButton handleClick={handleClick} value="1" />
              <InputButton handleClick={handleClick} value="2" />
              <InputButton handleClick={handleClick} value="3" />
              <InputButton handleClick={handleClick} value="op"/>
            </tr>
            <tr>
              <InputButton handleClick={handleClick} value="0" styles="no-right-border"/>
              <InputButton handleClick={handleClick} value="" />
              <InputButton handleClick={handleClick} value="." styles="large"/>
              <InputButton handleClick={handleClick} value="op"/>
            </tr>
          </tBody>
        </table>
      </div>
);

ButtonContainer.defaultProps = {
  
};

export default ButtonContainer ;
