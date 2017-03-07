import React from 'react';
import {
  ListView,
  RefreshControl,
  View,
} from 'react-native';
import Device from './Device';
import colors from '../config/colors';
import style from '../styles/Devices';

const renderSeparator = (sectionID, rowID) => (
  <View
    key={`${sectionID}-${rowID}`}
    style={style.separator}
  />
);

export default class DevicesList extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => (r1 !== r2),
    });

    this.renderDevice = this.renderDevice.bind(this);

    this.state = {
      dataSource: ds.cloneWithRows(this.props.devices),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.devices !== this.props.devices) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.devices),
      });
    }
  }

  renderDevice(device) {
    return (
      <Device
        device={device}
        editMode={this.props.editMode}
        onStatusChange={this.props.onDeviceStatusChange}
        onDeviceRemovePress={this.props.onDeviceRemovePress}
        setEditDevice={this.props.setEditDevice}
      />
    );
  }

  render() {
    return (
      <ListView
        key={`DevicesList-${this.props.editMode}`}
        dataSource={this.state.dataSource}
        renderRow={this.renderDevice}
        renderSeparator={renderSeparator}
        refreshControl={!this.props.editMode ?
          <RefreshControl
            refreshing={this.props.isUpdating}
            onRefresh={this.props.onRefresh}
            colors={[colors.refreshControl]}
          /> : null
        }
        pointerEvents={this.props.pointerEvents}
        style={this.props.style}
      />
    );
  }
}

DevicesList.defaultProps = {
  devices: [],
  isUpdating: false,
  editMode: false,
};

DevicesList.propTypes = {
  devices: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    mac: React.PropTypes.string,
    active: React.PropTypes.bool,
    updating: React.PropTypes.bool,
  })),
  isUpdating: React.PropTypes.bool,
  editMode: React.PropTypes.bool,
  onRefresh: React.PropTypes.func.isRequired,
  style: View.propTypes.style,
  onDeviceStatusChange: React.PropTypes.func.isRequired,
  pointerEvents: React.PropTypes.string,
  onDeviceRemovePress: React.PropTypes.func.isRequired,
  setEditDevice: React.PropTypes.func.isRequired,
};
