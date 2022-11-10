/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native';
import CountersTab from './src/screens/CountersTab';

const App: () => Node = () => {
  return <CountersTab />;
};

const styles = StyleSheet.create({});

export default App;
