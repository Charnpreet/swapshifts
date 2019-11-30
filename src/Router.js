// different routs a user can visit (different screens or activities in android)
import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginNSignUp from './Components/Screens/HomeScreen/LoginNSignUp';
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="login" component={LoginNSignUp} initial />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
