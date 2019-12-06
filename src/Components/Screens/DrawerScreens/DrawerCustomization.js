import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import {Card} from 'react-native-elements';

export default class DrawerCustomization  extends Component {
//
// navigateToScreen = ( route ) =>(
//     () => {
//     const navigateAction = NavigationActions.navigate({
//         routeName: route
//     });
//     this.props.navigation.dispatch(navigateAction);
// })

  render() {
    return (
      <View style={styles.container}>
        <Card containerStyle={styles.CardStyling}>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Availability')}>
            <Text> hello </Text>
          </TouchableHighlight>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height:200,
    alignItems: 'center',
    backgroundColor: 'red',
    borderColor: 'black',
  },
  CardStyling:{
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 20,
    borderColor: 'black',
  }
});
