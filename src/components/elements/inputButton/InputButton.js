import React from 'react';
import PropTypes from 'prop-types';
import './styles/InputButton.scss';

const InputButton = ({
  isDisabled, btnTitle, onClick,
}) => (
  <button
    disabled={isDisabled}
    type="submit"
    className="action-button"
    onClick={onClick}
  >
    {btnTitle}
  </button>
);

InputButton.propTypes = {
  btnTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};

InputButton.defaultProps = {
  btnTitle: 'Button',
  onClick: () => {},
  isDisabled: false,
};

export default InputButton;