import actions from '../../actions/constants';

const initialState = {
  username: '',
  password: '',
  fullName: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case actions.user.setUsername: {
      return {
        ...state,
        username: action.username,
      };
    }
    case actions.user.setPassword: {
      return {
        ...state,
        password: action.password,
      };
    }
    case actions.user.setFullName: {
      return {
        ...state,
        fullName: action.fullName,
      };
    }
    case actions.user.clearData: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
}
