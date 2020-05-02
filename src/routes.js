import React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import Camera from './pages/Camera';

import stylesGlobal from '../styleGlobal';

const Stack = createStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          headerStyle: stylesGlobal.headerSuper,
          title: 'Barcode Read',
          headerTitleAlign: 'center',
          headerTitleStyle: stylesGlobal.titleHeader,
        }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Camera"
          component={Camera}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
