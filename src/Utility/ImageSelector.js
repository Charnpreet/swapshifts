import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
class ImageSelector extends Component {
  /**
   * Select image method
   */
  pickImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        Alert.alert('You cancelled image picker 😟');
      } else if (response.error) {
        Alert.alert('And error occured: ', response.error);
      } else {
        const source = {uri: response.uri};
        // this.setState({
        //   imgSource: source
        // });
        return source;
      }
    });
  };
}
const imageselctor = new ImageSelector();
export default imageselctor;
