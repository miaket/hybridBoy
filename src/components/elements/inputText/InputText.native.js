import React from 'react';
import PropTypes from 'prop-types';
import { Input, Item, Label } from 'native-base';

const mainTitle = ({
  inputLabel,
  inputType
}) => {
  const secureTextEntry = inputType === 'password' ? true : false;
  return (
    <>
      <Item stackedLabel>
        <Label>
          { inputLabel }
        </Label>
        <Input secureTextEntry={secureTextEntry} />
      </Item>
    </>
  )
};

mainTitle.propTypes = {
};

mainTitle.defaultProps = {
};

export default mainTitle;