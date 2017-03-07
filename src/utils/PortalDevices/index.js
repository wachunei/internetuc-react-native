/* global fetch */
import cheerio from 'cheerio-without-node-native';

import {
  headers,
  JSONtoForm,
  METHODS,
} from '../fetchUtils';
import {
  URL,
  ERRORS,
} from './utils';

const dom = {
  inputExecution: 'input[name="execution"]',
  inputLt: 'input[name="lt"]',
  listaRegMac: '.listaRegMac',
  rowReg: 'tr[id^=registro_]',
  rowName: 'td div[id^=nombreReg]',
  rowMac: 'td div[id^=macReg]',
  success: '.exito',
  error: '.error',
};

const maxGetDevicesAttempts = 5;

const responseText = response => response.text();

const portalErrorPromise = (response) => {
  const $ = cheerio.load(response);
  const $domSuccess = $(dom.success);
  if ($domSuccess.length > 0) {
    return Promise.resolve($domSuccess.text());
  }

  const $domError = $(dom.error);
  if ($domError.length > 0) {
    return Promise.reject({
      error: $domError.text(),
      portalError: true,
    });
  }

  if (response.indexOf('CAS') !== -1) {
    return Promise.reject({ CASError: true });
  }

  throw new Error(ERRORS.default);
};

const handleCASError = (error, dispatcher) => {
  if (error.CASError) {
    return dispatcher();
  }

  throw error;
};

let getDevicesAttempts = 0;

export default class PortalDevices {
  static handleFormLogin(response, username, password) {
    const $ = cheerio.load(response);
    const $execution = $(dom.inputExecution);
    if ($execution.length > 0) {
      const execution = $(dom.inputExecution).val();
      const lt = $(dom.inputLt).val();
      const body = JSONtoForm({
        lt,
        execution,
        username,
        password,
        _eventId: 'submit',
        submit: 'Iniciar Sesión',
      });


      return fetch(
        URL.LOGIN,
        {
          body,
          headers,
          method: METHODS.POST,
        },
      );
    }

    return Promise.resolve();
  }

  static login(username, password) {
    return fetch(URL.LOGIN)
    .then(responseText)
    .then(response => this.handleFormLogin(response, username, password))
    .then(() => fetch(URL.RENDER, { headers, method: METHODS.POST }));
  }

  static getDevices(username, password) {
    return PortalDevices.login(username, password)
    .then(() => fetch(URL.LIST, { method: METHODS.POST }))
    .then(responseText)
    .then((response) => {
      const $ = cheerio.load(response);
      if ($(dom.listaRegMac).length === 0) {
        if (getDevicesAttempts >= maxGetDevicesAttempts) {
          getDevicesAttempts = 0;
          throw new Error(ERRORS.unauthorized);
        }
        getDevicesAttempts += 1;
        return this.getDevices(username, password);
      }
      getDevicesAttempts = 0;
      const devices = [];
      $(`${dom.listaRegMac} ${dom.rowReg}`).each((i, el) => {
        devices.push({
          name: $(el).find(dom.rowName).text(),
          mac: $(el).find(dom.rowMac).text()
            .split('-')
            .join('')
            .toLowerCase(),
        });
      });

      return Promise.resolve(devices);
    })
    .catch((error) => {
      throw error || new Error(ERRORS.default);
    });
  }

  static editDevice(username, password, newDevice, oldName) {
    return PortalDevices.login(username, password)
    .then(() => fetch(
      URL.EDIT,
      {
        headers,
        method: METHODS.POST,
        body: JSONtoForm({
          macAntes: newDevice.mac,
          macDespues: newDevice.mac,
          nombreDispositivoAntes: oldName,
          nombreDispositivoDespues: newDevice.name,
        }),
      },
    ))
    .then(responseText)
    .then(portalErrorPromise)
    .catch(error => handleCASError(
      error,
      () => PortalDevices.editDevice(username, password, newDevice, oldName),
    ));
  }

  static removeDevice(username, password, device) {
    return PortalDevices.login(username, password)
    .then(() => fetch(
      URL.REMOVE,
      {
        headers,
        method: METHODS.POST,
        body: JSONtoForm({ mac: device.mac }),
      },
    ))
    .then(responseText)
    .then(portalErrorPromise)
    .catch(error => handleCASError(
      error,
      () => PortalDevices.removeDevice(username, password, device),
    ));
  }

  static addDevice(username, password, device) {
    return PortalDevices.login(username, password)
    .then(() => fetch(
      URL.ADD,
      {
        headers,
        method: METHODS.POST,
        body: JSONtoForm({
          mac: device.mac,
          nombreDispositivo: device.name,
        }),
      },
    ))
    .then(responseText)
    .then(portalErrorPromise)
    .catch(error => handleCASError(
      error,
      () => PortalDevices.addDevice(username, password, device),
    ));
  }

  static logout() {
    return fetch(URL.LOGOUT, { method: METHODS.POST });
  }
}
