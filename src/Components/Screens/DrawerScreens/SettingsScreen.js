import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.ViewTagStyle}>
        <TouchableOpacity onPress={this.props.navigation.openDrawer}>
          <Text>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={styles.TextTagStyle}>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewTagStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  TextTagStyle: {fontWeight: 'bold', marginTop: 20},
});
export default SettingsScreen;
