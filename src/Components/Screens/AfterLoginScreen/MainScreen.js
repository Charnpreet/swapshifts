import React from 'react';
import {createAppContainer} from '@react-navigation/native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Feather';
import HomeScreen from '../DrawerScreens/HomeScreen';
import AvailabilityScreen from '../DrawerScreens/Availability/AvailabilityScreen';
import ChatScreen from '../DrawerScreens/ChatScreen';
import LogOutScreen from '../DrawerScreens/LogOutScreen';
import ProfileScreen from '../DrawerScreens/ProfileScreen';
import SwapShiftScreen from '../DrawerScreens/SwapShiftScreen';
import {StyleSheet} from 'react-native';
import drawerContentComponents from '../DrawerScreens/DrawerCustomization';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Availability: AvailabilityScreen,
    Chat: ChatScreen,
    Profile: ProfileScreen,
    Swap_Shift: SwapShiftScreen,
    Log_Out: LogOutScreen,
  },
  {
    //contentComponent: drawerContentComponents,
    hideStatusBar: true,
    drawerBackgroundColor: 'white',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);


const stackNavigator = createStackNavigator({
    defaultHome: DrawerNavigator,
},
{
    defaultNavigationOptions: ({navigation}) => {
      return {
        title: 'Home',
        headerLeft: (
          <Icon
            name="menu"
            style={styles.menuIconMargin}
            size={30}
            color="white"
            onPress={() => navigation.toggleDrawer()} // () => navigation.toggleDrawer()
          />
        ),
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    },
  },
);

const styles = StyleSheet.create({
  menuIconMargin: {
    marginLeft: 10,
  },
});
export default createAppContainer(stackNavigator); //stackNavigator
