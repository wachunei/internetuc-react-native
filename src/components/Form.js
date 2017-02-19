import React from 'react';
import {
  View,
} from 'react-native';
import WUCText from './WUCText';
import WUCLogo from './WUCLogo';

import commonStyle from '../styles/common';

export default function Devices() {
  return (
    <View style={commonStyle.viewWrapper}>
      <View style={[commonStyle.innerBox, commonStyle.itemInnerBox]}>
        <View style={commonStyle.itemTitle}>
          <WUCText title>Agregar Dispositivo</WUCText>
        </View>
      </View>
    </View>
  );
}

Devices.propTypes = {};
