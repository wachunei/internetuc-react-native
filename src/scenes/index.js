import React from 'react';
import {
  Actions,
  Scene,
} from 'react-native-router-flux';

import MainScene from './MainScene';
import LoginScene from './LoginScene';


export default Actions.create(
  <Scene
    key="root"
    hideNavBar
  >
    {MainScene}
    {LoginScene}
  </Scene>,
);
