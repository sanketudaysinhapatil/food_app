import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigation from './src/AppNavigation';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {store} from './src/redux/store';
// import { store } from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
