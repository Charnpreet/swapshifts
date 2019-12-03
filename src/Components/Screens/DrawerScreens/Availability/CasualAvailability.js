import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class CasualAvailability extends Component {
  render() {
    return (
      <View style={styles.ViewTagStyle}>
        <Text>Page to Display Casual Availability!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewTagStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  TextTagStyle: {fontWeight: 'bold', marginTop: 20},
});
export default CasualAvailability;
