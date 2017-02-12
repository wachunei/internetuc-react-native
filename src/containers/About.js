import {
  bindActionCreators,
} from 'redux';
import {
  connect,
} from 'react-redux';

import AboutComponent from '../components/About';

import {
  getUsername,
  getFullName,
  getLoggingOut,
} from '../selectors/user';

import {
  logoutStart,
} from '../actions/user';

function mapStateToProps(state) {
  return {
    username: getUsername(state),
    fullName: getFullName(state),
    loggingOut: getLoggingOut(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutStart }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutComponent);
