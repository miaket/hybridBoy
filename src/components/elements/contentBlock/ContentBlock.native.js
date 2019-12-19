import React from 'react';
import PropTypes from 'prop-types';
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

PageContainer.propTypes = {
  children: PropTypes.element
};

PageContainer.defaultProps = {
  children: <View />
};

export default PageContainer;