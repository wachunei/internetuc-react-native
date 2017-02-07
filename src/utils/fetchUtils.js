export const METHODS = {
  GET: 'GET',
  POST: 'POST',
};

export const headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const JSONtoForm = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

export const handleError = (response) => {
  if (!response.ok) {
    return Promise.reject();
  }

  return response;
};
