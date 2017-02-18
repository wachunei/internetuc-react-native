import React from 'react';
import {
  View,
} from 'react-native';
import WUCText from './WUCText';

import DevicesList from './DevicesList';
import WUCLoadingButton from './WUCLoadingButton';
import IconButton from './IconButton';

import style from '../styles/Devices';
import commonStyle from '../styles/common';

export default class Devices extends React.Component {

  componentDidMount() {
    this.props.updateDevicesRequest();
  }

  render() {
    const {
      devices,
      isUpdating,
      isForceUpdating,
      updateDevicesRequest,
      updateForcedDevicesRequest,
    } = this.props;

    const renderDevices = devices.length > 0 ? (
      <DevicesList
        devices={devices}
        isUpdating={isForceUpdating}
        onRefresh={updateForcedDevicesRequest}
        style={isUpdating && style.updatingList}
      />
    ) : null;

    const renderEmptyDevices = devices.length === 0 ? (
      <View style={style.emptyList}>
        <WUCText centered style={style.emptyListText}>
          No tienes dispositivos agregados ☹️
        </WUCText>
      </View>
    ) : null;

    const renderAddDeviceButton = (
      <WUCLoadingButton
        outlined={devices.length > 0}
        text="Agregar Dispositivo"
      />
    );

    const renderRefreshButton = (
      <IconButton
        displayIcon
        iconName="refresh"
        text="Update"
        onPress={updateDevicesRequest}
        disabled={isUpdating || isForceUpdating}
      />
    );

    const renderEditButton = (
      <IconButton iconName="edit" text="Edit" displayIcon />
    );

    const renderToolbar = (
      <View style={commonStyle.itemTitleButtons}>
        {renderRefreshButton}
        {renderEditButton}
        <IconButton iconName="menu" text="Menu" displayIcon />
      </View>
    );

    return (
      <View style={commonStyle.viewWrapper}>
        <View style={[commonStyle.innerBox, commonStyle.itemInnerBox]}>
          <View style={commonStyle.itemTitle}>
            <View style={commonStyle.itemTitleText}>
              <WUCText title>Dispositivos</WUCText>
            </View>
            {renderToolbar}
          </View>
          {renderDevices || renderEmptyDevices}
          {renderAddDeviceButton}
        </View>
      </View>
    );
  }
}

Devices.defaultProps = {
  devices: [],
};

Devices.propTypes = {
  devices: React.PropTypes.arrayOf(React.PropTypes.object),
  updateDevicesRequest: React.PropTypes.func.isRequired,
  updateForcedDevicesRequest: React.PropTypes.func.isRequired,
  isUpdating: React.PropTypes.bool.isRequired,
  isForceUpdating: React.PropTypes.bool.isRequired,
};
