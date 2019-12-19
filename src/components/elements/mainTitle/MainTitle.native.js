import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'native-base';
import styles from './styles/mainTitle';

const mainTitle = ({
  children
}) => (
  <Title style={styles.title}>
    { children }
  </Title>
);

mainTitle.propTypes = {
  children: PropTypes.string
};

mainTitle.defaultProps = {
  children: 'Title'
};

export default mainTitle;