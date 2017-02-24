import React from 'react';
import {
  Alert,
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
    onDeviceRemovePress,
    setEditDevice,
  }) {
  const destroyAlert = [
    `Borrar ${device.name}`,
    '¿Estás seguro que quieres borrar este dispositivo?',
    [
      {
        text: 'No, cancelar',
        onPress: null,
        style: 'cancel',
      },
      {
        text: 'Sí, borrar',
        onPress: () => onDeviceRemovePress(device),
        style: 'destructive',
      },
    ],
  ];
  const renderAction = editMode ? (
    <View style={style.editButtons}>
      <IconButton
        displayText
        text="Editar"
        onPress={() => setEditDevice(device)}
      />
      <IconButton
        displayText
        text="Borrar"
        color={colors.iconButtonDangerColor}
        onPress={() => Alert.alert(...destroyAlert)}
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
  const loadingStyle = editMode && device.updating ? style.loadingDevice : null;
  return (
    <View style={[style.device, loadingStyle]}>
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
  onDeviceRemovePress: React.PropTypes.func.isRequired,
  setEditDevice: React.PropTypes.func.isRequired,
};
