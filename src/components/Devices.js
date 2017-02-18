import React from 'react';
import {
  View,
} from 'react-native';
import colors from '../config/colors';

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
      editMode,
      setEditMode,
      updateDevicesRequest,
      updateForcedDevicesRequest,
      changeDeviceToStatus,
    } = this.props;

    const renderDevices = devices.length > 0 ? (
      <DevicesList
        devices={devices}
        isUpdating={isForceUpdating}
        onRefresh={updateForcedDevicesRequest}
        onDeviceStatusChange={changeDeviceToStatus}
        style={isUpdating && style.updatingList}
        pointerEvents={isUpdating ? 'box-only' : 'auto'}
      />
    ) : null;

    const renderEmptyDevices = devices.length === 0 ? (
      <View style={style.emptyList}>
        <WUCText centered style={style.emptyListText}>
          No tienes dispositivos agregados ☹️
        </WUCText>
      </View>
    ) : null;

    const renderAddDeviceButton = editMode ? null : (
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
        key="refreshButton"
      />
    );

    const renderEditButton = (
      <IconButton
        displayIcon
        iconName="edit"
        text="Editar"
        onPress={() => setEditMode(true)}
        disabled={isUpdating || isForceUpdating}
        key="editButton"
      />
    );

    const renderDoneEditButton = (
      <IconButton
        displayIcon
        displayText
        iconName="done"
        text="Listo"
        onPress={() => setEditMode(false)}
        color={colors.devicesDoneEditingColor}
        key="doneEditButton"
      />
    );

    const renderMenuButton = (
      <IconButton
        displayIcon
        iconName="menu"
        text="Menu"
        key="menuButton"
      />
    );

    const renderToolbar = editMode ?
      [renderDoneEditButton] : [renderRefreshButton, renderEditButton, renderMenuButton];

    return (
      <View style={commonStyle.viewWrapper}>
        <View style={[commonStyle.innerBox, commonStyle.itemInnerBox]}>
          <View style={commonStyle.itemTitle}>
            <View style={commonStyle.itemTitleText}>
              <WUCText title>Dispositivos</WUCText>
            </View>
            <View style={commonStyle.itemTitleButtons}>
              {renderToolbar}
            </View>
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
  changeDeviceToStatus: React.PropTypes.func.isRequired,
  setEditMode: React.PropTypes.func.isRequired,
  isUpdating: React.PropTypes.bool.isRequired,
  editMode: React.PropTypes.bool.isRequired,
  isForceUpdating: React.PropTypes.bool.isRequired,
};
