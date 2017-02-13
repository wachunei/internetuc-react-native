import React from 'react';
import {
  Button,
  View,
  ScrollView,
} from 'react-native';
import WUCText from './WUCText';

import commonStyle from '../styles/common';

export default class Devices extends React.Component {

  componentDidMount() {
    this.props.updateDevicesRequest();
  }

  render() {
    const {
      devices,
      updateDevicesRequest,
    } = this.props;

    // TODO
    // This should be a nested ListView component
    const renderDevices = devices.length > 0 ? (
      <ScrollView>
        {devices.map(device => (
          <View key={device.mac}>
            <WUCText>NAME: {device.name}</WUCText>
            <WUCText>MAC: {device.mac}</WUCText>
            <WUCText>Active: {device.active ? 'sí' : 'no'}</WUCText>
          </View>
        ))}
      </ScrollView>
    ) : null;

    // TODO improve empty list message
    const renderEmptyDevices = devices.length === 0 ? (
      <View>
        <WUCText>No tienes dispositivos agregados :(</WUCText>
      </View>
    ) : null;

    return (
      <View style={commonStyle.viewWrapper}>
        <View style={[commonStyle.innerBox, commonStyle.itemInnerBox]}>
          <View>
            <WUCText title>Dispositivos</WUCText>
            <Button onPress={updateDevicesRequest} title="Update" />
          </View>
          {renderDevices || renderEmptyDevices}
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
};
