import React from 'react';
import {
  Actions,
  Scene,
} from 'react-native-router-flux';

import SplashScreenScene from './SplashScreenScene';
import MainScene from './MainScene';
import LoginScene from './LoginScene';


export default Actions.create(
  <Scene
    key="root"
    hideNavBar
  >
    {SplashScreenScene}
    {MainScene}
    {LoginScene}
  </Scene>,
);
