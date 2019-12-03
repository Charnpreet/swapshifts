// import React, {Component} from 'react';
// import {Text, View, StyleSheet} from 'react-native';
import {createAppContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import PermanentAvailability from './PermanentAvailability';
import CasualAvailability from './CasualAvailability';

const TabNavigator = createMaterialTopTabNavigator({
  Permanent: PermanentAvailability,
  Reocurring: CasualAvailability
});
const AvialbilityContainer = createAppContainer(TabNavigator);
export default AvialbilityContainer;
