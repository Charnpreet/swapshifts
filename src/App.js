import React, {Component} from 'react';
import Title from './Components/Title/Title';
import {Provider} from 'react-redux';
import reducers from './Reducers/index';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import Router from './Router';
class App extends Component {
  render() {
    const reduxStore = createStore(reducers, {},applyMiddleware(ReduxThunk));
    return (
      <Provider store={reduxStore}>
        <Title />
        <Router />
      </Provider>
    );
  }
}
export default App;
