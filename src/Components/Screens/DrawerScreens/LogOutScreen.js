import React, {Component} from 'react';
import firebase from 'firebase';
import {View, StyleSheet} from 'react-native';
import reduxStore from '../../../reduxStore';
import {LOGIN_SCREEN} from '../../../Actions/ActionTypes';
class LogOutScreen extends Component {
  loggingUserOut(){
    const store = reduxStore.getState();
    firebase
      .auth()
      .signOut()
      .then(function() {
          store.auth.Navigator.navigate(LOGIN_SCREEN);
      },
      function(error) {
        console.log(error);
        },
      );
  }
  render() {
    return <View style={styles.ViewTagStyle}>{this.loggingUserOut()}</View>;
  }
}
const styles = StyleSheet.create({
  ViewTagStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  TextTagStyle: {fontWeight: 'bold', marginTop: 20},
});
export default LogOutScreen;
