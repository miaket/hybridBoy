import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/pageContainer';
import {
  SafeAreaView,
  View,
  ScrollView
} from 'react-native';

const PageContainer = ({
  children
}) => (
  <SafeAreaView>
    <ScrollView  style={styles.pageContainer}>
      { children }
    </ScrollView >
  </SafeAreaView>
);

PageContainer.propTypes = {
  children: PropTypes.element
};

PageContainer.defaultProps = {
  children: <View />
};

export default PageContainer;