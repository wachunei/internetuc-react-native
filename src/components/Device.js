import React from 'react';
import {
  View,
  Switch,
} from 'react-native';
import {
  macFormat,
} from '../utils';
import colors from '../config/colors';
import WUCText from './WUCText';

import style from '../styles/Device';

export default function Device({
    device,
  }) {
  return (
    <View style={style.device}>
      <View style={style.deviceInfo}>
        <WUCText title style={style.deviceName}>{device.name}</WUCText>
        <WUCText style={style.deviceMac}>{macFormat(device.mac)}</WUCText>
      </View>
      <View>
        <Switch
          value={device.active}
          style={style.deviceSwitch}
          onTintColor={colors.switchOnTint}
        />
      </View>
    </View>
  );
}

Device.propTypes = {
  device: React.PropTypes.shape({
    name: React.PropTypes.string,
    mac: React.PropTypes.string,
    active: React.PropTypes.bool,
    updating: React.PropTypes.bool,
  }).isRequired,
};
