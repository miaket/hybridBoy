import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardItem, Body, Left, Icon, Text, Spinner } from 'native-base';
import styles from './styles/inputButton';
const mainTitle = ({
  onClick,
  children
}) => (
  <Button
    style={styles.button}
    onPress={e => onClick()}
    >
    <Text>
      {children}
    </Text>
  </Button>
);

mainTitle.propTypes = {
  children: PropTypes.string
};

mainTitle.defaultProps = {
  children: 'Title'
};

export default mainTitle;