import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.ViewTagStyle}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ViewTagStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  TextTagStyle: {fontWeight: 'bold', marginTop: 20},
});
export default ProfileScreen;
