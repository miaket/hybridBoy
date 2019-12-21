import React, { Fragment } from 'react';
import styles from './styles/pageContainer';
import {
  SafeAreaView,
  ScrollView
} from 'react-native';

const PageContainer = ({
  children
}) => (
  <SafeAreaView>
    <ScrollView  style={styles.pageContainer}>
      <Fragment>
        { children }

      </Fragment>
    </ScrollView >
  </SafeAreaView>
);

export default PageContainer;