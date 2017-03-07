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
  devicesList: {
    marginBottom: 5,
  },
  updatingList: {
    opacity: 0.5,
  },
  errorWrapper: {
    backgroundColor: colors.devicesErrorBackground,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  errorText: {
    color: colors.devicesErrorColor,
  },
});
