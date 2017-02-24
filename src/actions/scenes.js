import actions from './constants';

// import {
//   updateDevicesRequest,
// } from './devices';

export function setScene(scene) {
  return (dispatch) => {
    // if (scene === 'devices') {
    //   dispatch(updateDevicesRequest());
    // }

    dispatch({
      type: actions.scenes.setScene,
      scene,
    });
  };
}
