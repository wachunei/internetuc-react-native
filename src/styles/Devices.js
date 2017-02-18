import {
  StyleSheet,
} from 'react-native';

import colors from '../config/colors';

export default StyleSheet.create({
  emptyList: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  emptyListText: {
    margin: 50,
    fontSize: 20,
    color: colors.devicesListEmptyMessage,
  },
  updatingList: {
    opacity: 0.5,
  },
});
