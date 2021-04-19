/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StatusBar,
  Text,
} from 'react-native';
import { COLORS } from './src/constants';
import MainStackNavigator from './src/navigator/Navigator';

const App = () => {

  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={COLORS.background} />
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
