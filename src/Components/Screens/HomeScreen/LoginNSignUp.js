/* this is sign up and login page
user can sign up and login depends upon their situation
everything is handled with redux
 */
import {connect} from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  loginUser
} from '../../../Actions/AuthenticationActions';
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

  onEmailChange(text) {
    //console.log(text);
    this.props.emailChanged(text);
  }
  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
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
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />
        <Spacer/>
        <Input
          containerStyle={styles.SpaceAroundSides}
          label="Password"
          placeholder="Enter your Password"
          secureTextEntry={true}
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
        <Button
          containerStyle={styles.SpaceAroundSides}
          title={this.state.loginButtonText}
          onPress={this.onButtonPress.bind(this)}
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

//
const mapStateToProps = state => {
  return {
    email: state.email,
    password: state.password
  };
};


export default connect(
  mapStateToProps,
  {emailChanged, passwordChanged, loginUser},
)(LoginNSignUp);
