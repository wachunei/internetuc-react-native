import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  Platform,
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import colors from '../config/colors';
import t from '../config/locales';
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
  const renderTitleText = type === 'new' ? t('form.addDevice') : t('form.editDevice');
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
            placeholder={t('form.name')}
            autoCapitalize="none"
            editable={!isLoading}
            autoCorrect={false}
            value={device.name}
            onChangeText={updateName}
          />
          <WUCTextInput
            autoFocus={false}
            placeholder={t('form.mac')}
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
              text={t('form.save')}
              isLoading={isLoading}
              disabled={isLoading || !isValid}
              onPress={saveButtonOnPress}
            />
            <WUCLoadingButton
              text={t('form.cancel')}
              outlined
              color={colors.WUCLoadingButtonGray}
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
  device: PropTypes.shape({
    name: PropTypes.string,
    mac: PropTypes.string,
    active: PropTypes.bool,
  }),
  type: PropTypes.string,
  updateName: PropTypes.func.isRequired,
  updateMac: PropTypes.func.isRequired,
  addDeviceRequest: PropTypes.func.isRequired,
  editDeviceRequest: PropTypes.func.isRequired,
  cancelForm: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isValid: PropTypes.bool,
};
