import React from 'react';
import { Button, Text } from 'native-base';
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

export default mainTitle;