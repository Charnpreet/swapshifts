// this component not yet used
// it will draw horizontal line between elements to seperate them
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class Divider extends Component {
  render() {
    return <View style={styles.itemSeperator} />;
}
}
const styles = StyleSheet.create({
  itemSeperator:{
    height:1,
    width:'95%',
    backgroundColor: 'black',
    marginLeft: 3,
    marginRight:4,
    marginTop:10,
    marginBottom:10,
    borderColor: 'red'
  },
});
export default Divider;
