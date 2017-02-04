import {
  combineReducers,
} from 'redux';

import user from './user';
import devices from './devices';

// forms
import login from './forms/login';
import device from './forms/device';

export default combineReducers({
  user,
  devices,
  forms: combineReducers({
    login,
    device,
  }),
});
