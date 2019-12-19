import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/pageContainer';
import {
  SafeAreaView,
  View,
} from 'react-native';

const PageContainer = ({
  children
}) => (
  <SafeAreaView>
    <View style={styles.pageContainer}>
      { children }
    </View>
  </SafeAreaView>
);

PageContainer.propTypes = {
  children: PropTypes.element
};

PageContainer.defaultProps = {
  children: <View />
};

export default PageContainer;