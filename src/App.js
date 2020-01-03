import React, {Component} from 'react';
import {Provider} from 'react-redux';
import * as firebase from 'firebase';
import AvialbilityContainer from './Components/Screens/StartingScreen/StartingScreen';
import reduxStore from './reduxStore'
class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={reduxStore}>
        <AvialbilityContainer />
      </Provider>
    );
  }
}
export default App;
