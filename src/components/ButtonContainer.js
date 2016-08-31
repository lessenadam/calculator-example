import React, { Component } from 'react';
import InputButton from './InputButton';

const ButtonContainer = (props) => (
      <div>
        <table>
          <tBody>
            <tr>
              <InputButton value="op"/>
              <InputButton value="op"/>
              <InputButton value="op"/>
              <InputButton value="op"/>
            </tr>
            <tr>
              <InputButton value="7" />
              <InputButton value="8" />
              <InputButton value="9" />
              <InputButton value="op"/>
            </tr>
            <tr>
              <InputButton value="4" />
              <InputButton value="5" />
              <InputButton value="6" />
              <InputButton value="op"/>
            </tr>
            <tr>
              <InputButton value="1" />
              <InputButton value="2" />
              <InputButton value="3" />
              <InputButton value="op"/>
            </tr>
            <tr>
              <InputButton value="0" />
              <InputButton value="" />
              <InputButton value="." />
              <InputButton value="op"/>
            </tr>
          </tBody>
        </table>
      </div>
);

ButtonContainer.defaultProps = {
  
};

export default ButtonContainer ;
