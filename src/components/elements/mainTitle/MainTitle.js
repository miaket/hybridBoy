import React from 'react';
import PropTypes from 'prop-types';
import './styles/mainTitle.scss';

const mainTitle = ({
  children
}) => (
  <h1 className="main-title">
    { children }
  </h1>
);

mainTitle.propTypes = {
  children: PropTypes.string
};

mainTitle.defaultProps = {
  children: 'Title'
};

export default mainTitle;