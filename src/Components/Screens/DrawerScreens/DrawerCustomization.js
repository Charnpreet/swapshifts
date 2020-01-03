import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {userFetech} from '../../../Actions/UserActions';
class DrawerCustomization extends Component {
  componentDidMount() {
    const {currentUser} = firebase.auth();
    this.props.userFetech(currentUser.uid);
  }
  renderText = () => {
    if (this.props.user != null) {
      return (
        <View>
          <Text style={styles.TextSizedetails}>{this.props.user.Name}</Text>
          <Text style={styles.TextSizedetails}>{this.props.user.Email}</Text>
        </View>
      );
    }
  };
  renderButton = (title, type, navigateTo) => {
    return (
      <Button
        title={title}
        type={type}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonTextColor}
        onPress={() => this.navigateToScreen(navigateTo)}
      />
    );
  }

  //
  navigateToScreen = route => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  renderAvatar = () => {
    if (this.props.user != null) {
      if (this.props.user.ProfilePic != null) {
        return (
          <FastImage
            style={styles.roundImage}
            source={{
              uri: this.props.user.ProfilePic,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        );
      } else {
        return (
          <FastImage
            style={styles.roundImage}
            source={require('../../../../assets/placeHolder.jpg')}
            resizeMode={FastImage.resizeMode.cover}
          />
        );
      }
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Card containerStyle={styles.CardStyling}>
          {this.renderAvatar()}
          {this.renderText()}
        </Card>
        <Card containerStyle={styles.secondCardStyle}>
          <View style={styles.listSeperatorStyle} />
          {this.renderButton('Home', 'outline', 'Home')}
          <View style={styles.listSeperatorStyle} />
          {this.renderButton('Availability', 'outline', 'Availability')}
          <View style={styles.listSeperatorStyle} />
          {this.renderButton('Profile', 'outline', 'Profile')}
          <View style={styles.listSeperatorStyle} />
          {this.renderButton('Chat', 'outline', 'Chat')}
          <View style={styles.listSeperatorStyle} />
          {this.renderButton('Swap Shift', 'outline', 'Swap_Shift')}
          <View style={styles.listSeperatorStyle} />
          {this.renderButton('Logout', 'outline', 'Log_Out')}
          <View style={styles.listSeperatorStyle} />
        </Card>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'transparent',
    borderColor: 'black',
  },
  CardStyling:{
    backgroundColor: 'transparent',
    marginBottom: 1,
    borderColor: 'transparent',
    flex: 0,
  },
  secondCardStyle:{
    flex:1,
    borderColor: 'transparent',
    marginBottom: 10,
  },
  buttonStyle:{
    marginLeft:10,
    marginBottom:1,
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
  TextSizedetails:{
    fontSize: 18,
    marginTop:5,
    marginBottom:5,
  },
  roundImage:{
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'green',
    position: 'relative',
    top: -20,
    left: 30,
  },
});
const mapStateToProps = state => {
  return {
    user: state.UserReducer.currentUser,
  };
};
export default connect(
  mapStateToProps,
  {userFetech},
)(DrawerCustomization);
