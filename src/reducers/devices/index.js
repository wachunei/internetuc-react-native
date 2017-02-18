import actions from '../../actions/constants';

const byActive = (a, b) => b.active - a.active;
const initialState = {
  isUpdating: false,
  isForceUpdating: false,
  editMode: false,
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
    case actions.devices.setIsForceUpdating: {
      return {
        ...state,
        isForceUpdating: action.isForceUpdating,
      };
    }
    case actions.devices.setEditMode: {
      return {
        ...state,
        editMode: action.editMode,
      };
    }
    case actions.devices.setDeviceStatus: {
      const index = state.data.findIndex(device => device.mac === action.device.mac);
      const newData = (index !== -1 ? [
        ...state.data.slice(0, index),
        { ...state.data[index], active: action.status },
        ...state.data.slice(index + 1),
      ] : [...state.data]).sort(byActive);
      return {
        ...state,
        data: newData,
      };
    }
    case actions.devices.setDeviceUpdating: {
      const index = state.data.findIndex(device => device.mac === action.device.mac);
      return {
        ...state,
        data: (index !== -1 ? [
          ...state.data.slice(0, index),
          { ...state.data[index], updating: action.updating },
          ...state.data.slice(index + 1),
        ] : [...state.data]),
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
        updating: false,
      })).sort(byActive);

      const newActiveRemoteDevices = remoteDevices.filter(remoteDevice => (
        !matchedRemoteDevices.find(matchedDeviceMac => matchedDeviceMac === remoteDevice.mac)
      )).map(remoteDevice => ({ ...remoteDevice, active: true, updating: false }));


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
