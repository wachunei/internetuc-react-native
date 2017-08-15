import PropTypes from 'prop-types';
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
import t from '../config/locales';
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
    t('devices.destroyAlert.title', { deviceName: `${device.name}` }),
    t('devices.destroyAlert.message'),
    [
      {
        text: t('devices.destroyAlert.cancel'),
        onPress: null,
        style: 'cancel',
      },
      {
        text: t('devices.destroyAlert.confirm'),
        onPress: () => onDeviceRemovePress(device),
        style: 'destructive',
      },
    ],
  ];
  const renderAction = editMode ? (
    <View style={style.editButtons}>
      <IconButton
        displayText
        text={t('devices.edit')}
        onPress={() => setEditDevice(device)}
      />
      <IconButton
        displayText
        text={t('devices.remove')}
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
  device: PropTypes.shape({
    name: PropTypes.string,
    mac: PropTypes.string,
    active: PropTypes.bool,
    updating: PropTypes.bool,
  }).isRequired,
  onStatusChange: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
  onDeviceRemovePress: PropTypes.func.isRequired,
  setEditDevice: PropTypes.func.isRequired,
};
