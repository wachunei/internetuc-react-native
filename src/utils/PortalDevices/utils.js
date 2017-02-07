const PORTAL_HOST = 'https://portal.uc.cl';
const MAC_HOST = `${PORTAL_HOST}/LPT028_RegistroMac`;

export const URL = {
  LOGIN: 'https://sso.uc.cl/cas/login?service=https%3A%2F%2Fportal.uc.cl%2Fc%2Fportal%2Flogin',
  LOGOUT: `${PORTAL_HOST}/c/portal/logout`,
  RENDER: `${PORTAL_HOST}/c/portal/render_portlet?p_l_id=10229&p_p_id=RegistroMac_WAR_LPT028_RegistroMac_INSTANCE_L0Zr&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-3&p_p_col_pos=1&p_p_col_count=2&currentURL=%2Fweb%2Fhome-community%2Finicio`,
  LIST: `${MAC_HOST}/GetListaMac_controller`,
  EDIT: `${MAC_HOST}/EditarRegistroMac_controller`,
  REMOVE: `${MAC_HOST}/EliminarRegistroMac_controller`,
  ADD: `${MAC_HOST}/AgregarRegistroMac_controlle`,
};
