import I18n from 'react-native-i18n';
import en from './en';
import es from './es';

I18n.fallbacks = true;
I18n.defaultLocale = 'es';
I18n.translations = {
  en,
  es,
};

export default (key, ...otherArgs) => I18n.t(key, ...otherArgs);
