/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native';
import CountersTab from './src/screens/CountersTab';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TemplateIcon from './src/components/icons/TemplateIcon';
import {PRIMARY, WHITE} from './src/constants/COLOUR';
import CounterSelected from './src/screens/CounterSelected';
import Box from './src/components/Box';
import SplashScreen from 'react-native-splash-screen';

const App: () => Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: () => <TemplateIcon name="AppLogoIcon" size={100} />,
          headerStyle: {
            backgroundColor: PRIMARY,
          },
          headerTitleAlign: 'center',
          headerBackTitle: '',
          headerTintColor: WHITE,
        }}>
        <Stack.Screen name="CountersTab" component={CountersTab} />
        <Stack.Screen name="CounterSelected" component={CounterSelected} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
