import React from 'react';
import {
  View,
} from 'react-native';
import styles from './styles/contentBlock';

const PageContainer = ({
  children
}) => (
  <View style={styles.contentBlock}>
    { children }
  </View>
);

export default PageContainer;