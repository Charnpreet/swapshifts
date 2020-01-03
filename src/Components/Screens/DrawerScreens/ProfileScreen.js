import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import firebase from 'firebase';
import {userFetech,pickImage} from '../../../Actions/UserActions';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
class ProfileScreen extends Component {
  componentDidMount(){
    const {currentUser} = firebase.auth();
    this.props.userFetech(currentUser.uid);
  }
  //
  renderImage() {
    if (this.props.user != null) {
      if (this.props.user.ProfilePic != null) {
        return (
          <FastImage
            style={styles.Image}
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
            style={styles.Image}
            source={require('../../../../assets/placeHolder.jpg')}
            resizeMode={FastImage.resizeMode.cover}
          />
        );
      }
    }
  }
  imageSelection(){
    const {currentUser} = firebase.auth();
    this.props.pickImage(currentUser.uid);
  }
  //
  renderAvatar() {
    if (this.props.user != null) {
      if (this.props.user.ProfilePic != null) {
        return (
          <View>
            <FastImage
              key={new Date()}
              style={styles.roundImage}
              source={{
                uri: this.props.user.ProfilePic,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <View style={styles.imgView}>
              <TouchableHighlight onPress={() => this.imageSelection()}>
                <Icon
                  name="ios-camera"
                  size={25}
                  style={styles.cameraIconStyle}
                />
              </TouchableHighlight>
            </View>
          </View>
        );
      } else {
        return (
          <View>
            <FastImage
              style={styles.roundImage}
              source={require('../../../../assets/placeHolder.jpg')}
              resizeMode={FastImage.resizeMode.cover}
            />
            <View style={styles.imgView}>
              <TouchableHighlight onPress={() => this.imageSelection()}>
                <Icon
                  name="ios-camera"
                  size={25}
                  style={styles.cameraIconStyle}
                />
              </TouchableHighlight>
            </View>
          </View>
        );
      }

    }
  }
  //
  renderText(Title, DisplayText) {
    if (DisplayText != null) {
      return (
        <Text style={styles.TextSizedetails}>
          {Title}: {DisplayText}
        </Text>
      );
    }
  }
  //
  render() {
    return (
      <View style={styles.ViewTagStyle}>
        {this.renderImage()}
        <Card containerStyle={styles.inputDetailsCardStyling}>
          <View style={styles.AvatarViewTagStyle}>{this.renderAvatar()}</View>
          <View style={styles.listSeperatorStyle} />
          {this.renderText('Name', this.props.user.Name)}
          <View style={styles.listSeperatorStyle} />
          {this.renderText('Email', this.props.user.Email)}
          <View style={styles.listSeperatorStyle} />
          {this.renderText('Gender', this.props.user.Gender)}
          <View style={styles.listSeperatorStyle} />
          {this.renderText('DOB', this.props.user.DOB)}
          <View style={styles.listSeperatorStyle} />
        </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ViewTagStyle: {flex: 1, backgroundColor: 'white'},
  TextTagStyle: {fontWeight: 'bold', marginTop: 20},
  cameraIconStyle:{
    right: -10,
    top:7,
    color: 'white',
  },
  imgView:{
    width:40,
    height:40,
    borderRadius: 40 / 2,
    overflow: 'hidden',
    color: 'black',
    position: 'absolute',
    right: -9,
    top:95,
    backgroundColor: 'gray',
  },
  Image:{
    width: '99%',
    height: '30%',
    marginLeft: 2,
    marginRight: 2,
    marginTop: 2,
    marginBottom:2,
  },
  roundImage:{
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'green',
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
    flex: 1,
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
  },
  AvatarViewTagStyle:{
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
    marginTop: -95,
    marginBottom: 10,
  }
});
const mapStateToProps = state => {
  return {
    user: state.UserReducer.currentUser,
  };
};
export default connect(
  mapStateToProps,
  {userFetech,pickImage},
)(ProfileScreen);
////  <Card containerStyle={styles.CardStyling}>{this.renderImage()}</Card>
// below code can be used to get window height and width
// Dimensions.get('window').width - 4,
// Dimensions.get('window').height / 4,
