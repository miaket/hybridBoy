import React from 'react';
import { Title } from 'native-base';
import styles from './styles/mainTitle';

const mainTitle = ({
  children
}) => (
  <Title style={styles.title}>
    { children }
  </Title>
);

export default mainTitle;