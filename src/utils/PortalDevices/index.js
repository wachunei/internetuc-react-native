/* global fetch */
import cheerio from 'cheerio-without-node-native';

import {
  URL,
  headers,
  JSONtoForm,
  METHODS,
} from './utils';

const responseText = response => response.text();

const portalErrorPromise = (response) => {
  const $ = cheerio.load(response);
  if ($('.exito').length > 0) {
    return Promise.resolve($('.exito').text());
  }

  return Promise.reject({
    error: $('.error').text(),
    portalError: true,
  });
};

export default class PortalDevices {
  static handleFormLogin(response, username, password) {
    const $ = cheerio.load(response);
    const $execution = $('input[name="execution"]');
    if ($execution.length > 0) {
      const execution = $('input[name="execution"]').val();
      const lt = $('input[name="lt"]').val();
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
    return this.login(username, password)
    .then(() => fetch(URL.LIST, { method: METHODS.POST }))
    .then(responseText)
    .then((response) => {
      const $ = cheerio.load(response);
      if ($('.listaRegMac').length === 0) {
        return this.getDevices(username, password);
      }
      const devices = [];
      $('.listaRegMac tr[id^=registro_]').each((i, el) => {
        devices.push({
          name: $(el).find('td div[id^=nombreReg]').text(),
          mac: $(el).find('td div[id^=macReg]').text()
            .split('-')
            .join('')
            .toLowerCase(),
        });
      });

      return Promise.resolve(devices);
    })
    .catch(() => {
      throw new Error('An error ocurred trying to load devices');
    });
  }

  static editDevice(username, password, newDevice, oldName) {
    return this.login(username, password)
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
    .then(portalErrorPromise);
  }

  static removeDevice(username, password, device) {
    return this.login(username, password)
    .then(() => fetch(
      URL.REMOVE,
      {
        headers,
        method: METHODS.POST,
        body: JSONtoForm({ mac: device.mac }),
      },
    ))
    .then(responseText)
    .then(portalErrorPromise);
  }

  static addDevice(username, password, device) {
    return this.login(username, password)
    .then(() => fetch(
      URL.ADD,
      {
        headers,
        body: JSONtoForm({
          mac: device.mac,
          nombreDispositivo: device.name,
        }),
      },
    ))
    .then(responseText)
    .then(portalErrorPromise);
  }

  static logout() {
    return fetch(URL.LOGOUT, { method: METHODS.POST });
  }
}
