import {
  StyleSheet,
} from 'react-native';

import colors from '../config/colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  logoHeader: {
    alignItems: 'center',
    margin: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginBox: {
    flex: 0,
  },
  bottomSpacer: {
    flex: 1,
  },
});
