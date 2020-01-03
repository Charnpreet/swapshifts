import React, {Component} from 'react';
import firebase from 'firebase';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
class HomeScreen extends Component {
  render() {
    const {currentUser} = firebase.auth();
    return (
      <View style={styles.ViewTagStyle}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={styles.TextTagStyle}>{currentUser.email}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ViewTagStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  TextTagStyle: {fontWeight: 'bold', marginTop: 20},
});
export default HomeScreen;
