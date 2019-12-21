import React from 'react';
import './styles/mainTitle.scss';

const mainTitle = ({
  children
}) => (
  <h1 className="main-title">
    { children }
  </h1>
);

export default mainTitle;