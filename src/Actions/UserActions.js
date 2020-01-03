import {
  USER_FETECH_SUCCESS,
  IMAGE_SELECTION_SUCCESS,
  USER_AVAILABILITY_FETECHED_SUCCESSFULLY,
  USER_TEMP_AVAILABILITY_FETECHED_SUCCESSFULLY,
  SEARCHING_AN_EMPLOYEE,
  USERS_SUCESSFULLY_FOUND,
  NO_USER_FOUND,
  AVAILABLE_USERS_FETECH_SUCCESSFULLY,
  START_FETECH_AVAIL_USERS,
} from './ActionTypes';
import * as firebase from 'firebase';
import 'firebase/storage';
import ImagePicker from 'react-native-image-picker';
import {Alert} from 'react-native';
import {HashMap} from 'hashmap';
import ImageResizer from 'react-native-image-resizer';
const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
//
const NoEmployeeFound = dispatch => {
  //Alert.alert('no employee Available to cover your shift');
  let msg = 'no employee Available to cover your shift';
  dispatch({
    type: NO_USER_FOUND,
  });
};

//
const pushingDataToAvailableUserNode = (uid, map,dispatch, navigation) => {
  var databaseRef = firebase.database().ref(`/AvailableUsers//${uid}/`);
  databaseRef.set(map);
  dispatch({
    type: USERS_SUCESSFULLY_FOUND,
  });
  navigation.navigate('Chat');
};
export const SearchingForEmployees = (
  shift,
  date,
  currentUserUid,
  navigation,
) => {
  return dispatch => {
    dispatch({
      type: SEARCHING_AN_EMPLOYEE
    });
    SearchEmployee(shift, date, currentUserUid, dispatch, navigation);
  };
}
// finding available users for selected date and shift ///${currentUserUid}
export const SearchEmployee = (
  shift,
  date,
  currentUserUid,
  dispatch,
  navigation,
) => {
  var map = [];
  var databaseRef = firebase
    .database()
    .ref('/UserAvailability/CasualAvailability/');
  databaseRef.once('value', snapshot => {
    snapshot.forEach(function(snap) {
      // comparing both user id's
      if (snap.key !== currentUserUid) {
        snap.forEach(function(value){
          if (value.key === date) {
            if (shift === 'AM') {
              if (value.val().AM === 1 || value.val().AM === true) {
                map.push(snap.key);
              }
            }
            if (shift === 'PM') {
              if (value.val().PM === 1 || value.val().PM === true) {
                map.push(snap.key);
              }
            }
            if (shift === 'ND') {
              if (value.val().ND === 1 || value.val().ND === true) {
                map.push(snap.key);
              }
            }

          }
        })
      }
    });
    if (map.length > 0) {
      pushingDataToAvailableUserNode(currentUserUid, map, dispatch, navigation);
    } else {
      NoEmployeeFound(dispatch);
    }
  });
//  };
}
// uploading link inside firebase database
const pushingLinkToDatabase = (uid, url) => {
  var databaseRef = firebase.database().ref(`/Users/${uid}/`);
  databaseRef
    .child('ProfilePic')
    .remove()
    .then(databaseRef.update({ProfilePic: url}));
};
// this creates file blob
var getFileBlob = function(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.addEventListener('load', function() {
    cb(xhr.response);
  });
  xhr.send();
};
// this uploads file to firebase storage
export const uploadImgToFirebase = (uid, uri) => {
  getFileBlob(uri, blob =>{
    var storageRef = firebase.storage().ref(`images/users/${uid}/profilePic/`);
    storageRef.put(blob).then(
      storageRef.getDownloadURL().then(url => {
        pushingLinkToDatabase(uid, url.toString());
      }),
    )
  });
};

const resize = (url, uid) => {
  ImageResizer.createResizedImage(url, 800, 800, 'PNG', 100)
    .then(({uri}) => {
      uploadImgToFirebase(uid,uri);
    })
    .catch(err => {
      console.log(err);
      return Alert.alert(
        'Unable to resize the photo',
        'Check the console for full the error message',
      );
    });
};
/**
 * Select image method
 */
export const pickImage = uid => {
  return dispatch => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        Alert.alert('You cancelled image picker 😟');
      } else if (response.error) {
        Alert.alert('And error occured: ', response.error);
      } else {
        const source = {uri: response.uri};
        resize(response.uri, uid);// resizing an image
        dispatch({
          type: IMAGE_SELECTION_SUCCESS,
          payload: source,
        });
      }
    });
  }
};
// updating permanent availability
export const updateAvailbility = (currentUserUid, day, availbility) => {
  var databaseRef = firebase
    .database()
    .ref(`/UserAvailability/PermanentAvailability/${currentUserUid}/`);
  databaseRef.update({[day]: availbility});
};
// updating temp availbility
export const updateTempAvailability = (uid,date, availbility) => {
  var databaseRef = firebase
    .database()
    .ref(`/UserAvailability/CasualAvailability/${uid}/`);
  databaseRef.update({[date]: availbility});
};
// loading temp availbility
export const fetechTempAvailability = (currentUserUid, date) => {
  var map = new Map();
  var databaseRef = firebase
    .database()
    .ref(`/UserAvailability/CasualAvailability/${currentUserUid}/`);
  return dispatch => {
    databaseRef
      .orderByKey()
      .startAt(date)
      .on('value', snapshot => {
        snapshot.forEach(function(snap) {
          map.set(snap.key, snap.val());
 });
        dispatch({
          type: USER_TEMP_AVAILABILITY_FETECHED_SUCCESSFULLY,
          payload: map,
      });
      });
  };
};
//
export const fetechUserAvailability = currentUserUid => {
  var hashmap = new HashMap();
  var databaseRef = firebase
    .database()
    .ref(`/UserAvailability/PermanentAvailability/${currentUserUid}/`);
  return dispatch => {
    databaseRef.on('value', snapshot => {
      snapshot.forEach(function(snap) {
        hashmap.set(snap.key, snap.val());
 });
  dispatch({
        type: USER_AVAILABILITY_FETECHED_SUCCESSFULLY,
        payload: hashmap,
      });
    });
  };
};
//
const fetechingAvailabeUserDetails = async uid => {
  var user = null;
  var databaseRef = firebase.database().ref(`/Users/${uid}/`);
  await databaseRef.once('value',snapshot => {
    user = snapshot.val();
  });
  console.log('2', user);
  return user;
}

const fetechAllUsersDetaial = async function(snapshot) {
  var hashmap = new HashMap();

  for await (var snap of snapshot) {
    console.log('1', snap);
  //  var result = await fetechingAvailabeUserDetails(snap.val());
    //hashmap.set(snap.key, result);

  }
  //console.log('2', snap);
  // snapshot.forEach(async function(snap) {
  //   var result = await fetechingAvailabeUserDetails(snap.val());
  //   hashmap.set(snap.key, result);
  //   console.log('1', hashmap);
  // });
  // dispatch({
  //   type: AVAILABLE_USERS_FETECH_SUCCESSFULLY,
  //   payload: hashmap,
  // });
}

// issues while fetech all available users
// async call issues
export const avilUserFetech = (uid, dispatch) => {
  var databaseRef = firebase.database().ref(`/AvailableUsers//${uid}/`);
  databaseRef.on('value', snapshot => {
  fetechAllUsersDetaial(snapshot);
});
};
export const loadingavialbleusers = currentUserUid => {
  return dispatch => {
    dispatch({
      type: START_FETECH_AVAIL_USERS
    });
    avilUserFetech(currentUserUid, dispatch);
  };
}


// retrieving data from firebase
export const userFetech = currentUserUid => {
  var databaseRef = firebase.database().ref(`/Users/${currentUserUid}/`);
  return dispatch => {
    databaseRef.on('value', snapshot => {
      dispatch({type: USER_FETECH_SUCCESS, payload: snapshot.val()});
    });
  };
};
