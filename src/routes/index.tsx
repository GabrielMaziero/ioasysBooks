import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackViews} from './stack.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <StackViews />
    </NavigationContainer>
  );
}
