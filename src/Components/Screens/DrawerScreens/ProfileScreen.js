import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Image, Card} from 'react-native-elements';
class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.ViewTagStyle}>
        <Card containerStyle={styles.CardStyling}>
          <Image
            style={styles.Image}
            source={require('../../../../assets/forest.jpg')}
          />
        </Card>
        <Card containerStyle={styles.inputDetailsCardStyling}>
          <Text style={styles.TextSizedetails}>Name: Charnpreet Singh</Text>
          <View style={styles.listSeperatorStyle} />
          <Text style={styles.TextSizedetails}>Email: sony_baf@me.com </Text>
          <View style={styles.listSeperatorStyle} />
          <Text style={styles.TextSizedetails}>Gender: Male </Text>
          <View style={styles.listSeperatorStyle} />
          <Text style={styles.TextSizedetails}>DOB: 31/07/1989</Text>
          <View style={styles.listSeperatorStyle} />
        </Card>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  ViewTagStyle: {flex: 1, backgroundColor: 'white'},
  TextTagStyle: {fontWeight: 'bold', marginTop: 20},
  Image:{
    width:'100%',
    height:'100%',
    borderColor: 'red',
  },
  CardStyling:{
    flex: 0.3,
    backgroundColor: 'transparent',
    marginLeft:2,
    marginRight:2,
    marginTop:2,
    marginBottom:2,
    borderColor: 'black',
  },
  inputDetailsCardStyling:{
    flex: 0.6,
    backgroundColor: 'transparent',
    marginLeft:4,
    marginRight:4,
    marginTop:4,
    marginBottom:4,
    borderColor: 'black',
  },
  listSeperatorStyle:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flex:0.9,
    marginTop: 15,
    marginBottom: 15,
  },
  TextSizedetails:{
    fontSize: 22,
  }
});
export default ProfileScreen;

// below code can be used to get window height and width
// Dimensions.get('window').width - 4,
// Dimensions.get('window').height / 4,
