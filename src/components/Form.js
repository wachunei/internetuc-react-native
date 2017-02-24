import React from 'react';
import {
  View,
  Platform,
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import colors from '../config/colors';
import WUCText from './WUCText';
import WUCTextInput from './WUCTextInput';
import WUCLoadingButton from './WUCLoadingButton';

import commonStyle from '../styles/common';
import style from '../styles/Form';

export default function Form({
  device,
  type,
  updateName,
  updateMac,
  addDeviceRequest,
  editDeviceRequest,
  cancelForm,
  isLoading,
  isValid,
}) {
  const renderTitleText = type === 'new' ? 'Agregar Dispositivo' : 'Editar Dispositivo';
  const saveButtonOnPress = type === 'new' ? addDeviceRequest : editDeviceRequest;
  const renderSpacer = Platform.OS === 'ios' ? <KeyboardSpacer /> : null;
  return (
    <View style={commonStyle.viewWrapper}>
      <View style={[commonStyle.innerBox, commonStyle.itemInnerBox]}>
        <View style={commonStyle.itemTitle}>
          <WUCText title>{renderTitleText}</WUCText>
        </View>
        <View style={style.formBox}>
          <WUCTextInput
            autoFocus={false}
            placeholder="nombre"
            autoCapitalize="none"
            editable={!isLoading}
            autoCorrect={false}
            value={device.name}
            onChangeText={updateName}
          />
          <WUCTextInput
            autoFocus={false}
            placeholder="mac"
            autoCapitalize="none"
            editable={!isLoading && type !== 'edit'}
            autoCorrect={false}
            value={device.mac}
            maxLength={17}
            onChangeText={updateMac}
            style={type === 'edit' && style.disabledStyle}
          />
          <View style={style.buttonsWrapper}>
            <WUCLoadingButton
              text="Guardar"
              isLoading={isLoading}
              disabled={isLoading || !isValid}
              onPress={saveButtonOnPress}
            />
            <WUCLoadingButton
              text="Cancelar"
              outlined
              color={colors.WUCLoadingButtonGray}
              isLoading={isLoading}
              disabled={isLoading}
              onPress={cancelForm}
            />
          </View>
        </View>
      </View>
      {renderSpacer}
    </View>
  );
}

Form.defaultProps = {
  device: {
    name: '',
    mac: '',
    active: false,
  },
  type: 'new',
  isLoading: false,
  isValid: false,
};

Form.propTypes = {
  device: React.PropTypes.shape({
    name: React.PropTypes.string,
    mac: React.PropTypes.string,
    active: React.PropTypes.bool,
  }),
  type: React.PropTypes.string,
  updateName: React.PropTypes.func.isRequired,
  updateMac: React.PropTypes.func.isRequired,
  addDeviceRequest: React.PropTypes.func.isRequired,
  editDeviceRequest: React.PropTypes.func.isRequired,
  cancelForm: React.PropTypes.func.isRequired,
  isLoading: React.PropTypes.bool,
  isValid: React.PropTypes.bool,
};
