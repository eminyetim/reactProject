import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Views/HomeScreen';
import WeatherScreen from '../Views/WeatherScreen';
import FuelScreen from '../Views/FuelScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Weather" component={WeatherScreen} />
      <Stack.Screen name="Fuel" component={FuelScreen} />
    </Stack.Navigator>
  );
}
