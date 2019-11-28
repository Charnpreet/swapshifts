/* this is sign up and login page
user can sign up and login depends upon their situation
 */

import React, {Component} from 'react';
import {Input, Button, Card} from 'react-native-elements';
import Spacer from '../../../Components/Spacer';
import {StyleSheet} from 'react-native';
class LoginNSignUp extends Component {
  state = {
    loginButtonText: 'Login',
    signUpButtonText: 'Need An Account'
  }
  /* this changes button text of button from login to sign up
   */
  buttonPressed = () => {
    if (this.state.loginButtonText === 'Signup') {
      this.setState({
        loginButtonText: 'Login',
        signUpButtonText: 'Need An Account'
      })
    } else {
      this.setState({
        loginButtonText: 'Signup',
        signUpButtonText: 'Already A Member'
      })
    }
  }
/*renders view to screen */
  render() {
    return (
      <Card>
        <Spacer/>
        <Input
          containerStyle={styles.SpaceAroundSides}
          label="User Name"
          placeholder="Enter your User Name"
        />
        <Spacer/>
        <Input
          containerStyle={styles.SpaceAroundSides}
          label="Password"
          placeholder="Enter your Password"
          secureTextEntry={true}
        />
        <Button
          containerStyle={styles.SpaceAroundSides}
          title={this.state.loginButtonText}
        />
        <Button
          containerStyle={styles.buttonAtBottomOfScreen}
          title={this.state.signUpButtonText}
          onPress={this.buttonPressed}
        />
      </Card>
    );
  }
}
/* styling for buttons*/
const styles = StyleSheet.create({
  SpaceAroundSides:{
    padding: 20
  },
  buttonAtBottomOfScreen:{
    flex: 0,
    justifyContent: 'flex-end',
    marginTop: 250,
    padding: 1
  }
});

export default LoginNSignUp;
