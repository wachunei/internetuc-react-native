import actions from '../../actions/constants';

const initialState = {
  isUpdating: false,
  data: [],
};

export default function devices(state = initialState, action) {
  switch (action.type) {
    case actions.devices.setIsUpdating: {
      return {
        ...state,
        isUpdating: action.isUpdating,
      };
    }
    case actions.devices.updateDevices: {
      const matchedRemoteDevices = [];
      const remoteDevices = action.devices;
      const sortedLocalDevices = state.data.map(device => ({
        ...device,
        active: (() => {
          const index = (remoteDevices.find(remoteDevice => remoteDevice.mac === device.mac));
          if (index) {
            matchedRemoteDevices.push(device.mac);
            return true;
          }

          return false;
        })(),
      })).sort((a, b) => b.active - a.active);

      const newActiveRemoteDevices = remoteDevices.filter(remoteDevice => (
        !matchedRemoteDevices.find(matchedDeviceMac => matchedDeviceMac === remoteDevice.mac)
      )).map(remoteDevice => ({ ...remoteDevice, active: true }));


      return {
        ...state,
        data: [
          ...newActiveRemoteDevices,
          ...sortedLocalDevices,
        ],
      };
    }
    case actions.user.logOut: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
}
