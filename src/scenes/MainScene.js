import React from 'react';
import {
  ActionConst,
  Scene,
} from 'react-native-router-flux';

import Main from '../containers/Main';

export default (
  <Scene
    key="Main"
    component={Main}
    type={ActionConst.RESET}
  />
);
