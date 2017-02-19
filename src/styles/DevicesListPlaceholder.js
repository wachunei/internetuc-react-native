import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 13,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#efefef',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  itemData: {
    flex: 1,
  },
  itemName: {
    height: 18,
    width: 70,
    marginVertical: 2,
    backgroundColor: '#efefef',
  },
  itemMac: {
    height: 13,
    width: 120,
    marginVertical: 2,
    backgroundColor: '#efefef',
  },
  itemSwitchWrapper: {
    alignItems: 'center',
  },
  itemSwitch: {
    height: 25,
    width: 42,
    borderRadius: 30,
    backgroundColor: '#efefef',
  },
});
