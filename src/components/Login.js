import React from 'react';
import {
  KeyboardAvoidingView,
  View,
} from 'react-native';
import WUCText from './WUCText';
import WUCTextInput from './WUCTextInput';
import WUCLogo from './WUCLogo';
import WUCLoadingButton from './WUCLoadingButton';

import style from '../styles/Login';
import commonStyle from '../styles/common';

export default function Login({
  username,
  password,
  isLoading,
  updateUsername,
  updatePassword,
  cleanUsername,
  error,
  buttonEnabled,
  submit,
  }) {
  const renderError = error ? (
    <View style={style.errorWrapper}>
      <WUCText style={style.errorText}>Hubo un error en iniciar sesión</WUCText>
    </View>
  ) : null;
  return (
    <KeyboardAvoidingView style={style.wrapper} behavior="padding">
      <View style={style.logoHeader}>
        <WUCLogo size="85" />
      </View>
      <View style={[commonStyle.innerBox, style.loginBox]}>
        <View style={style.loginHeader}>
          <WUCText title>Iniciar Sesión</WUCText>
          <WUCText>Inicia sesión usando tu usuario y contraseña uc</WUCText>
        </View>
        {renderError}
        <View style={style.formBox}>
          <WUCTextInput
            autoFocus
            selectTextOnFocus
            placeholder="usuario"
            autoCapitalize="none"
            editable={!isLoading}
            autoCorrect={false}
            value={username}
            onBlur={cleanUsername}
            onChangeText={updateUsername}
          />
          <WUCTextInput
            selectTextOnFocus
            secureTextEntry
            enablesReturnKeyAutomatically
            placeholder="contraseña"
            returnKeyType="go"
            editable={!isLoading}
            value={password}
            onChangeText={updatePassword}
            onSubmitEditing={submit}
          />

          <View style={style.submitWrapper}>
            <WUCLoadingButton
              text="Iniciar Sesión"
              isLoading={isLoading}
              disabled={!buttonEnabled}
              onPress={submit}
            />
          </View>
        </View>
      </View>
      <View style={style.bottomSpacer} />
    </KeyboardAvoidingView>
  );
}

Login.propTypes = {
  username: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  updateUsername: React.PropTypes.func.isRequired,
  updatePassword: React.PropTypes.func.isRequired,
  error: React.PropTypes.string.isRequired,
  buttonEnabled: React.PropTypes.bool.isRequired,
  cleanUsername: React.PropTypes.func.isRequired,
  submit: React.PropTypes.func.isRequired,
};
