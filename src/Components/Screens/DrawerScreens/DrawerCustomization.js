import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Card,Button, Image, Avatar} from 'react-native-elements';

export default class DrawerCustomization  extends Component {
  //
  navigateToScreen = route => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };
  render() {
    return (
      <View style={styles.container}>
        <Card containerStyle={styles.CardStyling}>
        <Avatar
          source={require('../../../../assets/forest.jpg')}
            size="xlarge"
            rounded
        />
           <Text style={styles.TextSizedetails}>Chanrpreet Singh</Text>
           <Text style={styles.TextSizedetails}>sony_baf@me.com</Text>
        </Card>
        <Card containerStyle={styles.secondCardStyle}>
          <View style={styles.listSeperatorStyle} />
          <Button
            title="Home"
            type="outline"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTextColor}
            onPress={() => this.navigateToScreen('Home')}
          />
          <View style={styles.listSeperatorStyle} />
          <Button
            title="Availability"
            type="outline"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTextColor}
            onPress={() => this.navigateToScreen('Availability')}
          />
          <View style={styles.listSeperatorStyle} />
          <Button
            title="Profile"
            type="outline"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTextColor}
            onPress={() => this.navigateToScreen('Profile')}
          />
          <View style={styles.listSeperatorStyle} />
          <Button
            title="Chat"
            type="outline"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTextColor}
            onPress={() => this.navigateToScreen('Chat')}
          />
          <View style={styles.listSeperatorStyle} />
          <Button
            title="Swap Shift"
            type="outline"
            titleStyle={styles.buttonTextColor}
            buttonStyle={styles.buttonStyle}
            onPress={() => this.navigateToScreen('Swap_Shift')}
          />
          <View style={styles.listSeperatorStyle} />
          <Button
            title="Logout"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTextColor}
            type="outline"
            onPress={() => this.navigateToScreen('Log_Out')}
          />
          <View style={styles.listSeperatorStyle} />
        </Card>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderColor: 'black',
  },
  Image:{
    width:'140%',
    height:'80%',
    backgroundColor: 'transparent',
  },
  CardStyling:{
    backgroundColor: 'transparent',
    marginBottom: 1,
    flexDirection:'row',
    borderColor: 'transparent',
    height: '25%',
  },
  buttonStyle:{
    marginLeft:10,
    marginBottom: -1,
    marginRight:10,
    marginTop: 0,
    borderColor: 'transparent',
  },
  buttonTextColor:{
    color: 'black',
    fontWeight: 'normal',
  },
  listSeperatorStyle:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: -10,
    marginRight: -10,
  },
  secondCardStyle:{
    height: '100%',
    borderColor: 'transparent',
  },
  TextSizedetails:{
    fontSize: 18,
    marginTop:5,
    marginBottom:5,
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
  }
});
