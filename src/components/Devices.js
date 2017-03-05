import React from 'react';
import {
  View,
} from 'react-native';
import colors from '../config/colors';

import WUCText from './WUCText';
import DevicesList from './DevicesList';
import DevicesListPlaceholder from './DevicesListPlaceholder';
import WUCLoadingButton from './WUCLoadingButton';
import IconButton from './IconButton';

import style from '../styles/Devices';
import commonStyle from '../styles/common';

export default class Devices extends React.Component {

  componentDidMount() {
    this.props.updateDevicesRequest();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.devices && nextProps.devices.length === 0 && nextProps.editMode) {
      this.props.setEditMode(false);
    }
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
      removeDeviceRequest,
      setEditDevice,
      setScene,
    } = this.props;

    const renderPlaceholder = !devices ? (
      <DevicesListPlaceholder />
    ) : null;
    const renderDevices = devices && devices.length > 0 ? (
      <DevicesList
        devices={devices}
        isUpdating={isForceUpdating}
        editMode={editMode}
        onRefresh={updateForcedDevicesRequest}
        onDeviceStatusChange={changeDeviceToStatus}
        onDeviceRemovePress={removeDeviceRequest}
        setEditDevice={setEditDevice}
        style={isUpdating && style.updatingList}
        pointerEvents={isUpdating ? 'box-only' : 'auto'}
      />
    ) : null;

    const renderEmptyDevices = devices && devices.length === 0 ? (
      <View
        style={[
          style.emptyList,
          isUpdating && style.updatingList,
        ]}
      >
        <WUCText centered style={style.emptyListText}>
          No tienes dispositivos agregados ☹️
        </WUCText>
      </View>
    ) : null;

    const renderAddDeviceButton = devices ? (
      <WUCLoadingButton
        outlined={devices.length > 0 && !editMode}
        text="Agregar Dispositivo"
        onPress={() => setScene('form')}
      />
    ) : null;

    const renderRefreshButton = (
      <IconButton
        displayIcon
        iconName="refresh"
        text="Update"
        onPress={updateDevicesRequest}
        disabled={isUpdating || isForceUpdating || !devices}
        key="refreshButton"
      />
    );

    const renderEditButton = (
      <IconButton
        displayIcon
        iconName="edit"
        text="Editar"
        onPress={() => setEditMode(true)}
        disabled={isUpdating || isForceUpdating || !devices || (devices && devices.length === 0)}
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
        disabled={!devices}
        onPress={() => setScene('about')}
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
          {renderPlaceholder || renderDevices || renderEmptyDevices}
          {renderAddDeviceButton}
        </View>
      </View>
    );
  }
}

Devices.defaultProps = {
  devices: undefined,
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
  removeDeviceRequest: React.PropTypes.func.isRequired,
  setEditDevice: React.PropTypes.func.isRequired,
  setScene: React.PropTypes.func.isRequired,
};
