import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Alert,
} from 'react-native';
import {Card} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import firebase from 'firebase';
import {loadingavialbleusers} from '../../../Actions/UserActions';
import {connect} from 'react-redux';
class ChatScreen extends Component {
  componentDidMount(){
    const {currentUser} = firebase.auth();
    this.props.loadingavialbleusers(currentUser.uid);
  }

  renderAvailableUserProfiles(users, index) {
  return (
      <View>
        <Card containerStyle={styles.availableUserCardStyling}>
          <FastImage
            style={styles.roundImage}
            source={{
              uri: users[index].ProfilePic,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Text style={styles.TextTagStyle}>{users[index].Name}</Text>
        </Card>
      </View>
    );
  }

  renderFlatList() {
    var maps = this.props.availbleUsers;
    if (maps != null) {
      var newArray = [...maps.values()];
      if (this.props.loading){
        //  console.log(newArray, ' array ');
        return (
          <View style={styles.flatsListView}>
            <FlatList
              extraData={newArray}
              keyExtractor={(item, index) => String(index)}
              data={newArray}
              renderItem={({index}) =>
                this.renderAvailableUserProfiles(newArray, index)
              }
              ItemSeparatorComponent={this.renderItemSeparator}
            />
          </View>
        );
      } else {
        return (
          <View>
            <Text> no user availble </Text>
          </View>
        );
      }
    }
  }

  render() {
    return (
      <View style={styles.ViewTagStyle}>
        <Text>List of Available Users</Text>
        <Card containerStyle={styles.CardStyling}>{this.renderFlatList()}</Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ViewTagStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  flatsListView: {
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%'
  },
  availableUserCardStyling: {
    backgroundColor: 'transparent',
    width: '95%',
    height: 80,
    marginLeft: -10,
    marginRight:2,
    borderColor: 'transparent'
  },
  TextTagStyle: {
    fontWeight: 'bold',
    marginTop:1,
    marginLeft:10,
    position: 'relative',
    fontSize:20,
    left: 60,
  },
  CardStyling:{
    flex: 1,
    width: Dimensions.get('window').width - 4,
    backgroundColor: 'transparent',
    marginBottom: 2,
    borderColor: 'black',
    marginTop: 5,
  },
  roundImage:{
    width:60,
    height: 60,
    borderRadius: 60 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'green',
    position: 'absolute',
    top:-10,
  }
});
const mapStateToProps = state => {
  return {
    availbleUsers: state.UserReducer.availbleUsers,
    loading: state.UserReducer.useravailbles,
  };
};
export default connect(
  mapStateToProps,
  {loadingavialbleusers},
)(ChatScreen);
