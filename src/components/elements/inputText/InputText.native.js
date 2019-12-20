import React from 'react';
import PropTypes from 'prop-types';
import { Input, Item, Label } from 'native-base';

const mainTitle = ({
  name,
  onChange,
  inputLabel,
  inputType
}) => {
  const secureTextEntry = inputType === 'password' ? true : false;
  const onChangeHandler = (val) => {
    onChange(name, val)
  }

  return (
    <>
      <Item stackedLabel>
        <Label>
          { inputLabel }
        </Label>
        <Input
          secureTextEntry={secureTextEntry} 
          onChangeText={val => onChangeHandler(val)}
        />
      </Item>
    </>
  )
};

mainTitle.propTypes = {
};

mainTitle.defaultProps = {
};

export default mainTitle;