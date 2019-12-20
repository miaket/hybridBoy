import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'native-base';
import styles from './styles/alertText';

const mainTitle = ({
  children
}) => (
  <Text style={styles.title}>
    { children }
  </Text>
);

mainTitle.propTypes = {
  children: PropTypes.string
};

mainTitle.defaultProps = {
  children: 'Title'
};

export default mainTitle;