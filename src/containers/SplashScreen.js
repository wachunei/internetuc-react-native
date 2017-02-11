import {
  bindActionCreators,
} from 'redux';
import {
  connect,
} from 'react-redux';
import {
  Actions,
} from 'react-native-router-flux';

import SplashScreenComponent from '../components/SplashScreen';

import {
  getUsername,
  getPassword,
} from '../selectors/forms/login';


function mapStateToProps(state) {
  return {
    username: getUsername(state),
    password: getPassword(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoggedIn: () => {
      Actions.Main();
    },
    onLoggedOut: () => {
      Actions.Login();
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SplashScreenComponent);
