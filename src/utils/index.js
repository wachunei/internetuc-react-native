export const cleanUsername = (username) => {
  const ucSuffix = '@uc.cl';
  const index = username.indexOf(ucSuffix, username.length - ucSuffix.length);
  if (index !== -1) {
    return username.substr(0, index);
  }

  return username;
};
