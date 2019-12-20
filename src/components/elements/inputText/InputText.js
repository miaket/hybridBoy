import React from 'react';
import PropTypes from 'prop-types';
import './styles/InputText.scss';
import { TextField } from '@material-ui/core';

const InputText = ({
  name,
  onChange,
  inputLabel,
  inputType
}) => {
  const onChangeHandler = (event) => {
    onChange(name, event.target.value)
  }

  return (
    <div className="InputTextWrapper">
      <TextField
        name={name}
        id="standard-helperText"
        label={inputLabel}
        type={inputType}
        onChange={event => onChangeHandler(event)}
      />
    </div>
  )
};

InputText.propTypes = {
  inputLabel: PropTypes.string,
};

InputText.defaultProps = {
  inputLabel: 'Text input',
};

export default InputText;