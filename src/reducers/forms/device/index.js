import actions from '../../../actions/constants';

const initialState = {
  device: {
    name: '',
    mac: '',
    active: false,
  },
  type: 'new',
  isLoading: false,
};

export default function device(state = initialState, action) {
  switch (action.type) {
    case actions.forms.device.updateName: {
      return {
        ...state,
        device: {
          ...state.device,
          name: action.name,
        },
      };
    }
    case actions.forms.device.updateMac: {
      return {
        ...state,
        device: {
          ...state.device,
          mac: action.mac,
        },
      };
    }
    case actions.forms.device.setEditDevice: {
      return {
        ...state,
        device: {
          name: action.device.name,
          mac: action.device.mac,
          active: action.device.active,
        },
      };
    }
    case actions.forms.device.setFormType: {
      return {
        ...state,
        type: action.formType,
      };
    }
    case actions.forms.device.clear: {
      return {
        ...initialState,
      };
    }
    case actions.forms.device.isFormLoading: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case actions.scenes.setScene: {
      return (action.scene !== 'form') ? { ...initialState } : state;
    }
    default: {
      return state;
    }
  }
}
