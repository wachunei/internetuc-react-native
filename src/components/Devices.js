import PropTypes from 'prop-types';
import React from 'react';
import {
  LayoutAnimation,
  View,
} from 'react-native';
import colors from '../config/colors';
import t from '../config/locales';

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

    if ((nextProps.error && !this.props.error) ||
      (this.props.error && !nextProps.error)) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
  }

  render() {
    const {
      devices,
      error,
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
        style={[
          style.devicesList,
          isUpdating && style.updatingList,
        ]}
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
          {t('devices.emptyListText')}
        </WUCText>
      </View>
    ) : null;

    const renderAddDeviceButton = devices ? (
      <WUCLoadingButton
        outlined={devices.length > 0 && !editMode}
        text={t('devices.addDevice')}
        onPress={() => setScene('form')}
      />
    ) : null;

    const renderRefreshButton = (
      <IconButton
        displayIcon
        iconName="refresh"
        text={t('devices.update')}
        onPress={updateDevicesRequest}
        disabled={isUpdating || isForceUpdating || !devices}
        key="refreshButton"
      />
    );

    const renderEditButton = (
      <IconButton
        displayIcon
        iconName="edit"
        text={t('devices.edit')}
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
        text={t('devices.done')}
        onPress={() => setEditMode(false)}
        color={colors.devicesDoneEditingColor}
        key="doneEditButton"
      />
    );

    const renderMenuButton = (
      <IconButton
        displayIcon
        iconName="account-circle"
        text={t('devices.menu')}
        key="menuButton"
        disabled={!devices}
        onPress={() => setScene('about')}
      />
    );

    const renderError = error ? (
      <View style={style.errorWrapper}>
        <WUCText style={style.errorText}>{error}</WUCText>
      </View>
    ) : null;

    const renderToolbar = editMode ?
      [renderDoneEditButton] : [renderRefreshButton, renderEditButton, renderMenuButton];

    return (
      <View style={commonStyle.viewWrapper}>
        <View style={[commonStyle.innerBox, commonStyle.itemInnerBox]}>
          <View style={commonStyle.itemTitle}>
            <View style={commonStyle.itemTitleText}>
              <WUCText title>{t('devices.devices')}</WUCText>
            </View>
            <View style={commonStyle.itemTitleButtons}>
              {renderToolbar}
            </View>
          </View>
          {renderPlaceholder || renderDevices || renderEmptyDevices}
          {renderError}
          {renderAddDeviceButton}
        </View>
      </View>
    );
  }
}

Devices.defaultProps = {
  devices: undefined,
  error: undefined,
};

Devices.propTypes = {
  devices: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
  updateDevicesRequest: PropTypes.func.isRequired,
  updateForcedDevicesRequest: PropTypes.func.isRequired,
  changeDeviceToStatus: PropTypes.func.isRequired,
  setEditMode: PropTypes.func.isRequired,
  isUpdating: PropTypes.bool.isRequired,
  editMode: PropTypes.bool.isRequired,
  isForceUpdating: PropTypes.bool.isRequired,
  removeDeviceRequest: PropTypes.func.isRequired,
  setEditDevice: PropTypes.func.isRequired,
  setScene: PropTypes.func.isRequired,
};
