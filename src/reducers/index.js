import {
  combineReducers,
} from 'redux';

import user from './user';
import devices from './devices';
import scenes from './scenes';

// forms
import login from './forms/login';
import device from './forms/device';

export default combineReducers({
  user,
  devices,
  scenes,
  forms: combineReducers({
    login,
    device,
  }),
});
