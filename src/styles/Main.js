import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import colors from '../config/colors';

const window = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  item: {
    flex: 1,
    height: window.height,
    width: window.width,
  },
});
