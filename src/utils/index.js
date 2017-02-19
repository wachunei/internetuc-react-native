export const cleanUsername = (username) => {
  const ucSuffix = '@uc.cl';
  const index = username.indexOf(ucSuffix, username.length - ucSuffix.length);
  if (index !== -1) {
    return username.substr(0, index);
  }

  return username;
};

export const macFormat = mac => mac.match(new RegExp('.{1,2}', 'g')).join('-').toUpperCase();
