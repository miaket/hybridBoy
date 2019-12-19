import React from 'react';
import PropTypes from 'prop-types';
import './styles/InputText.scss';
import { TextField } from '@material-ui/core';

const InputText = ({
  inputLabel,
  inputType
}) => (
  <div className="InputTextWrapper">
    <TextField
      id="standard-helperText"
      label={inputLabel}
      type={inputType}
    />
  </div>
);

InputText.propTypes = {
  inputLabel: PropTypes.string,
};

InputText.defaultProps = {
  inputLabel: 'Text input',
};

export default InputText;