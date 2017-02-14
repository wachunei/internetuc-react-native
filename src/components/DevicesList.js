import React from 'react';
import {
  LayoutAnimation,
  ListView,
  View,
} from 'react-native';
import Device from './Device';

const renderSeparator = (sectionID, rowID) => (
  <View
    key={`${sectionID}-${rowID}`}
    style={{ height: 1, borderBottomWidth: 1, borderBottomColor: '#eee' }}
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
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.devices),
      });
    }
  }

  renderDevice(device) {
    return (
      <Device
        device={device}
      />
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderDevice}
        renderSeparator={renderSeparator}
      />
    );
  }
}

DevicesList.defaultProps = {
  devices: [],
};

DevicesList.propTypes = {
  devices: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    mac: React.PropTypes.string,
    active: React.PropTypes.bool,
  })),
};
