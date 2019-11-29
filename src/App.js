import React, {Component} from 'react';
import {View} from 'react-native';
import Title from './Components/Title/Title';
import LoginNSignUp from './Components/Screens/HomeScreen/LoginNSignUp';
import {Provider} from 'react-redux';
import reducers from './Reducers/LoginNSignUpReducer';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
class App extends Component {
  render() {
    const reduxStore = createStore(reducers, applyMiddleware(ReduxThunk));
    return (
      <View>
        <Provider store={reduxStore}>
          <Title />
          <LoginNSignUp />
        </Provider>
      </View>
    );
  }
}
export default App;
