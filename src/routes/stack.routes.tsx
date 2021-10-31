import React from 'react';
import Context from '../contexts/context';
import {Details, Home, Login} from '../views/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const StackViews = () => {
  const {signed} = React.useContext(Context);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {signed ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </>
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};
