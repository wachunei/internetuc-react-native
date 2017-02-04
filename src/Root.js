import React from 'react';
import {
  Provider,
} from 'react-redux';
import {
  StatusBar,
} from 'react-native';
import {
  Router,
} from 'react-native-router-flux';


import store from './store/configureStore';
import scenes from './scenes';

export default function Root() {
  StatusBar.setBarStyle('light-content');
  return (
    <Provider store={store}>
      <Router scenes={scenes} />
    </Provider>
  );
}
