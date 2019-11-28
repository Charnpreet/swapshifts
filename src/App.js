import React, {Component} from 'react';
import {View} from 'react-native';
import Title from './Components/Title/Title';
import LoginNSignUp from './Components/Screens/HomeScreen/LoginNSignUp';
class App extends Component {
  render() {
    return (
      <View>
        <Title />
        <LoginNSignUp />
      </View>
    );
  }
}
export default App;
