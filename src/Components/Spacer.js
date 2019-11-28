/*this provides space between elements*/
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Spacer = () => {
  return <View style={styles.spacer} />;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 16
  }
});

export default Spacer;
