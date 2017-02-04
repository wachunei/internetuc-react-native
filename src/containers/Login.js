import {
  bindActionCreators,
} from 'redux';
import {
  connect,
} from 'react-redux';

import LoginComponent from '../components/Login';

import {
  getUsername,
  getPassword,
  getIsLoading,
} from '../selectors/forms/login';

import * as loginFormActions from '../actions/forms/login';

function mapStateToProps(state) {
  return {
    username: getUsername(state),
    password: getPassword(state),
    isLoading: getIsLoading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...loginFormActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);
