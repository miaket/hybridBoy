import React from 'react';
import PropTypes from 'prop-types';
import './styles/alertText.scss';

const mainTitle = ({
  children
}) => (
  <p className="alert-text">
    { children }
  </p>
);

mainTitle.propTypes = {
  children: PropTypes.string
};

mainTitle.defaultProps = {
  children: 'Title'
};

export default mainTitle;