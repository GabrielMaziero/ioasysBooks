import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Home, Details} from '../views/index';
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator();

export const StackViews = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
