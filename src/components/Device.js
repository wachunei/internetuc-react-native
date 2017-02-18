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
import IconButton from './IconButton';

import style from '../styles/Device';

export default function Device({
    device,
    editMode,
    onStatusChange,
  }) {
  const renderAction = editMode ? (
    <View style={style.editButtons}>
      <IconButton
        displayText
        text="Editar"
      />
      <IconButton
        displayText
        text="Borrar"
        color={colors.iconButtonDangerColor}
      />
    </View>
  ) : (
    <Switch
      value={device.updating ? !device.active : device.active}
      disabled={device.updating}
      style={[
        style.deviceSwitch,
      ]}
      onTintColor={colors.switchOnTint}
      onValueChange={(value) => {
        onStatusChange(device, value);
      }}
    />
  );
  return (
    <View style={style.device}>
      <View style={style.deviceInfo}>
        <WUCText title style={style.deviceName}>{device.name}</WUCText>
        <WUCText style={style.deviceMac}>{macFormat(device.mac)}</WUCText>
      </View>
      <View>
        {renderAction}
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
  onStatusChange: React.PropTypes.func.isRequired,
  editMode: React.PropTypes.bool.isRequired,
};
