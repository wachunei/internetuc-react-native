import React from 'react';
import {
  LayoutAnimation,
  Platform,
  View,
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import t from '../config/locales';
import WUCText from './WUCText';
import WUCTextInput from './WUCTextInput';
import WUCLogo from './WUCLogo';
import WUCLoadingButton from './WUCLoadingButton';

import style from '../styles/Login';
import commonStyle from '../styles/common';

export default class Login extends React.Component {

  componentWillUnmount() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  render() {
    const {
      username,
      password,
      isLoading,
      updateUsername,
      updatePassword,
      cleanUsername,
      error,
      buttonEnabled,
      submit,
    } = this.props;
    const renderError = error ? (
      <View style={style.errorWrapper}>
        <WUCText style={style.errorText}>{error}</WUCText>
      </View>
    ) : null;
    const renderSpacer = Platform.OS === 'ios' ? <KeyboardSpacer /> : null;
    return (
      <View style={style.wrapper}>
        <View style={style.logoHeader}>
          <WUCLogo size="85" />
        </View>
        <View style={[commonStyle.innerBox, style.loginBox]}>
          <View style={style.loginHeader}>
            <WUCText title>{t('login.login')}</WUCText>
            <WUCText>{t('login.text')}</WUCText>
          </View>
          {renderError}
          <View style={style.formBox}>
            <WUCTextInput
              autoFocus={username.length === 0}
              selectTextOnFocus
              placeholder={t('login.user')}
              autoCapitalize="none"
              editable={!isLoading}
              autoCorrect={false}
              value={username}
              onBlur={cleanUsername}
              onChangeText={updateUsername}
            />
            <WUCTextInput
              autoFocus={username.length > 0}
              selectTextOnFocus
              secureTextEntry
              enablesReturnKeyAutomatically
              placeholder={t('login.password')}
              returnKeyType="go"
              editable={!isLoading}
              value={password}
              onChangeText={updatePassword}
              onSubmitEditing={submit}
            />

            <View style={style.submitWrapper}>
              <WUCLoadingButton
                text={t('login.login')}
                isLoading={isLoading}
                disabled={!buttonEnabled}
                onPress={submit}
              />
            </View>
          </View>
        </View>
        <View style={style.bottomSpacer} />
        {renderSpacer}
      </View>
    );
  }
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
