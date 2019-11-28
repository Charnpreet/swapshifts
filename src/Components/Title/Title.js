/*this page is just for titile of the app
*/
import {Text} from 'react-native-elements';
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
class Title extends Component {
  render() {
    return (
      <View style={styles.spacer}>
        <Text h3>Swap Shift</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  spacer: {
    marginTop: 80,
    marginBottom: 20,
    alignItems: 'center'
  }
});
export default Title;
