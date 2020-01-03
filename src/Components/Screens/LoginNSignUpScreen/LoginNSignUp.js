/* this is sign up and login page
user can sign up and login depends upon their situation
everything is handled with redux
 */
import {connect} from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  loginUser,
} from '../../../Actions/AuthenticationActions';
import React, {Component} from 'react';
import {Input, Button, Card} from 'react-native-elements';
import Spacer from '../../../Components/Spacer';
import {StyleSheet, View, Text} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
class LoginNSignUp extends Component {
  state = {
    loginButtonText: 'Login',
    signUpButtonText: 'Need An Account',
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
  };
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;
    const navigate = this.props.navigation;
    this.props.loginUser({email, password}, navigate);
  }

/*renders view to screen */
  render() {
    return (
      <View style={styles.ViewStyle}>
        <Card containerStyle={styles.CardStyle}>
          <Spacer/>
          <Input
            containerStyle={styles.SpaceAroundSides}
            label="User Name"
            placeholder="Enter your Email"
            autoCapitalize="none"
            autoCorrect={false}
            errorStyle={styles.errorStyle}
            errorMessage={this.props.userNameError}
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
          <Spacer/>
          <Input
            containerStyle={styles.SpaceAroundSides}
            label="Password"
            placeholder="Enter your Password"
            errorStyle={styles.errorStyle}
            errorMessage={this.props.passwordError}
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
            containerStyle={styles.bottomButtonStyle}
            title={this.state.signUpButtonText}
            onPress={this.buttonPressed}
          />
          {
            <Spinner
              visible={this.props.loading}
              textContent={'Signing in...'}
              overlayColor="white"
              animation="fade"
            />
          }
        </Card>
        <Text style={styles.errorTextTag}>{this.props.authError}</Text>
      </View>
    );
  }
}
/* styling for buttons*/
const styles = StyleSheet.create({
  SpaceAroundSides:{
    padding: 20
  },
  errorStyle:{
    color: 'red'
  },
  CardStyle:{
    flex:0,
    backgroundColor: 'transparent',
    borderColor:'green',
  },
  ViewStyle:{
    flex:1,
    marginBottom: 10,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  bottomButtonStyle:{
    marginTop: 15,
    padding: 20
  },
  errorTextTag: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color:'red',
    marginTop: 10,
    fontFamily: 'Cochin',
 },
});

//
const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    userNameError: state.auth.userNameError,
    passwordError: state.auth.passwordError,
    authError: state.auth.authError,
    loading: state.auth.loading,
    user: state.auth.user,
  };
};
export default connect(
  mapStateToProps,
  {emailChanged, passwordChanged, loginUser},
)(LoginNSignUp);

//    backgroundColor: Platform.OS === 'ios' ? 'red' : 'black',
