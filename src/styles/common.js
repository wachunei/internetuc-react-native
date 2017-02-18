import {
  StyleSheet,
} from 'react-native';

import colors from '../config/colors';

export default StyleSheet.create({
  innerBox: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: colors.innerBoxBg,
    margin: 20,
    shadowColor: colors.innerBoxShadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  viewWrapper: {
    paddingVertical: 20,
    flex: 1,
  },
  itemInnerBox: {
    flex: 1,
  },
  itemTitle: {
    marginBottom: 10,
  },
});
