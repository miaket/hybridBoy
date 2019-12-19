import React from 'react';
import PropTypes from 'prop-types';
import './styles/pageContainer.scss';

const pageContainer = ({
  children
}) => (
  <div className="page-container">
    { children }
  </div>
);

pageContainer.propTypes = {
  children: PropTypes.element
};

pageContainer.defaultProps = {
  children: <div />
};

export default pageContainer;