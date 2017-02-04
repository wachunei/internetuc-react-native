import React from 'react';
import {
  StatusBar,
} from 'react-native';
import {
  Router,
} from 'react-native-router-flux';

import scenes from './scenes';

export default function Root() {
  StatusBar.setBarStyle('light-content');
  return (
    <Router scenes={scenes} />
  );
}
