import React from 'react';
import {
  ActionConst,
  Scene,
} from 'react-native-router-flux';

import Login from '../containers/Login';

export default (
  <Scene
    key="Login"
    component={Login}
    type={ActionConst.RESET}
  />
);
