import AfterLogin from '../AfterLoginScreen/MainScreen';
import LoginNSignUp from '../LoginNSignUpScreen/LoginNSignUp';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
const AuthScreen = createStackNavigator(
{
  Auth: {screen: LoginNSignUp, navigationOptions: {header: null}},// this will hide default header
});
const AfterLoginScreen = createStackNavigator(
{
  After:{screen: AfterLogin, navigationOptions: {header: null}}, // this will hide default header
});
const AvialbilityContainer = createAppContainer(
  createSwitchNavigator(
  {
      Login: AuthScreen,
      AfterLoginScreen: AfterLoginScreen,
    },
    {
      initialRouteName: 'Login',

    },
  ),
);
export default AvialbilityContainer;
