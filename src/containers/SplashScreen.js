import {
  connect,
} from 'react-redux';
import {
  Actions,
} from 'react-native-router-flux';

import SplashScreenComponent from '../components/SplashScreen';

import {
  getValidData,
} from '../selectors/user';


function mapStateToProps(state) {
  return {
    isLoggedIn: getValidData(state),
  };
}

function mapDispatchToProps() {
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
