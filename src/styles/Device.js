import {
  StyleSheet,
} from 'react-native';
import colors from '../config/colors';

export default StyleSheet.create({
  device: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 5,
  },
  deviceInfo: {
    flex: 1,
  },
  deviceName: {
    fontSize: 16,
  },
  deviceMac: {
    fontSize: 12,
    color: colors.macTextColor,
  },
  deviceSwitch: {
    transform: [
      { scale: 0.8 },
    ],
  },
  editButtons: {
    flexDirection: 'row',
  },
});
